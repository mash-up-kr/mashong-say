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
        "select mashong platform",
      )
        .option("-e, --eye [eyeType]", "select eye type", "default")
      .option("-b, --bubble-type [bubbleType]", "select speech bubble type", "pipe")
      .action(async (input: string, command: IOption) => {
        const output = this.action.handle(input, command);
        console.log(output);
      });
  }
}
