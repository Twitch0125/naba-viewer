import { Ref, ref } from "vue";
import { BattingPlayer, BattingPlayerStats } from "~~/types";
import Papa from "papaparse";

/**
 * @description Parses a given CSV File and returns headers and data
 * @param file CSV File
 */
export async function parseCSVFile<HeaderType, PlayerType>(
  file: Ref<File> | File
): Promise<{
  headers: HeaderType;
  data: PlayerType[];
}> {
  file = unref(file);
  const reader = new FileReader();
  const parsePromise = new Promise<{ headers: HeaderType; data: PlayerType[] }>(
    (resolve, reject) => {
      reader.addEventListener("load", () => {
        const {
          data: [headers, ...data],
          errors,
        } = Papa.parse<string>(reader.result as string);
        if (errors.length) {
          console.error("Error", errors);
          reject(errors);
        }
        resolve({ headers, data });
      });
      reader.readAsBinaryString(file);
    }
  );
  const result = await parsePromise;
  return result;
}
