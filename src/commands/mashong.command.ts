import { Command } from "commander";
import { IOption } from "../actions/abstract.action";
import { AbstractCommand } from "./abstract.command";

export class MashongCommand extends AbstractCommand {
  public load(program: Command) {
    program
      .command("say [input]")
      .alias("s")
      .description("Generate Example Mashong say.")
      .option(
        "-p, --platform [platform]",
        "select mahsong platform",
        "branding"
      )
      .option("-b, --bubble-type [bubbleType]", "select speech bubble type")
      .action(async (input: string, command: IOption) => {
        console.log(command);
        await this.action.handle(input, command);
      });
  }
}
