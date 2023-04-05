import { Command } from "commander";
import { MashongAction } from "../actions/mashong.action";
import { MashongCommand } from "./mashong.command";
export class CommandLoader {
  public static async load(program: Command): Promise<void> {
    new MashongCommand(new MashongAction()).load(program);

    this.handleInvalidCommand(program);
  }

  private static handleInvalidCommand(program: Command) {
    program.on("command:*", () => {
      console.error(`\nERROR Invalid command: ${program.args.join(" ")}`);
      console.log(`See --help for a list of available commands.\n`);
      process.exit(1);
    });
  }
}
