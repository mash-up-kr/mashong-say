import { Command } from "commander";
import { AbstractCommand } from "./abstract.command";

export class BrandingMashongCommand extends AbstractCommand {
  public load(program: Command) {
    program
      .command("branding-mashong [input]")
      .alias("bms")
      .description("Generate Example Mashong say.")
      .option("-f, --foo [foo]", "foo example", "default foo value")
      .action(async (input: string, command) => {
        const options = [];

        options.push({ name: "foo", value: command.foo });
        await this.action.handle(input, options);
      });
  }
}
