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
    reader.addEventListener("load", () => {
      const parsedCSV = Papa.parse<PlayerType>(reader.result as string, {
        dynamicTyping: true,
        comments: "//",
        skipEmptyLines: true,
        transform(val, field) {
          if (val === "eol") {
            return REMOVE_TOKEN;
          } else return val;
        },
      });
      const { data, errors } = parsedCSV;
      if (errors.length) {
        console.error("Error", errors);
        reject(errors);
      }
      //remove the 'eol' at the end of each row
      const filteredData = data.map((row) => {
        return row.filter((val) => val !== REMOVE_TOKEN);
      });
      if (transform) {
        resolve({ data: filteredData.map(transform) });
      }
      resolve({ data: filteredData });
    });
    reader.readAsBinaryString(unref(file));
  });
  const result = await parsePromise;
  return result;
}
