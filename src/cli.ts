#!/usr/bin/env node
import * as commander from "commander";
import { CommandLoader } from "./commands";

const bootstrap = async () => {
  const program = commander.program;
  program
    .version(
      require("../package.json").version,
      "-v, --version",
      "Output the current version."
    )
    .usage("<command> [options]")
    .helpOption("-h, --help", "Output usage information.");

  await CommandLoader.load(program);

  program.parseAsync(process.argv);

  if (!process.argv.slice(2).length) {
    program.outputHelp();
  }
};

bootstrap();
