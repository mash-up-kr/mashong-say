import { Command } from "commander";
import { BrandingMashongAction } from "../actions/branding-mashong.action";
import { BrandingMashongCommand } from "./branding-mashong.command";
export class CommandLoader {
  public static async load(program: Command): Promise<void> {
    new BrandingMashongCommand(new BrandingMashongAction()).load(program);

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
