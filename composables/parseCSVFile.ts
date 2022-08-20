import Papa from "papaparse";
import type { MaybeRef } from "@vueuse/core";
import { BattingStats } from "~~/types";
const REMOVE_TOKEN = "REMOVE_TOKEN";

type Transformer<T, X = any> = (row: T) => X[];

/**
 * @description Parses a given CSV File from Out Of The Park baseball. No headers are returned
 * @param file CSV File
 */
export async function parseCSVFile<PlayerType extends any[], ReturnType>(
  file: MaybeRef<File>,
  { transform }: { transform?: Transformer<PlayerType, ReturnType> } = {}
): Promise<{
  data: ReturnType[];
}> {
  const reader = new FileReader();
  const parsePromise = new Promise<{ data: PlayerType }>((resolve, reject) => {
    const transforms = [
      (data: string[]) => {
        return data.filter((val) => val !== "eol");
      },
    ];
    transform && transforms.push(transform);
    reader.addEventListener("load", async () => {
      const parsedCSV = await parseCSV<PlayerType>(
        reader.result as string,
        transforms
      );
      parsedCSV;
      resolve({ data: parsedCSV });
    });
    reader.readAsBinaryString(unref(file));
  });
  const result = await parsePromise;
  return result;
}

/** offload parse operation to a worker with PapaParse. returns transformed data */
function parseCSV<PlayerType extends any[]>(
  result: string,
  transforms = []
): Promise<PlayerType> {
  return new Promise((resolve, reject) => {
    const parsedRows = [];
    Papa.parse<PlayerType>(result as string, {
      dynamicTyping: true,
      comments: "//",
      skipEmptyLines: true,
      worker: true,
      step({ data, errors }) {
        if (errors.length > 0) {
          reject(errors);
          return;
        }
        //run data through each transform function
        const transformedData = transforms.reduce((data, transformer) => {
          return transformer(data);
        }, data);
        parsedRows.push(transformedData);
      },
      complete() {
        resolve(parsedRows);
      },
    });
  });
}
