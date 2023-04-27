// import { Input } from "../commands";

import { readFileSync } from "fs";
import path from "path";

export type IOption = {
  [key: string]: string;
};
export abstract class AbstractAction {
  abstract mashongKey: string;

  public getMashong(key: string) {
    try {
      const filePath = path.join(__dirname, `/../../mashongs/${key}.mashong`);
      const mashong = readFileSync(filePath, { encoding: "utf-8" });
      return mashong;
    } catch (e) {
      const filePath = path.join(__dirname, `/../../mashongs/mashong.mashong`);
      return readFileSync(filePath, { encoding: "utf-8" });
    }
  }

  public abstract handle(...args: any[]): string;
}
