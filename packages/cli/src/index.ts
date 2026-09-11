import { add } from "./commands/add.js";
import { list, doSearch } from "./commands/list.js";
import { init } from "./commands/init.js";
import { c, line, fail } from "./ui.js";

const VERSION = "0.1.0";

const HELP = `${c.bold("moticon")} ${c.dim("· copy hand-animated React icons into your project")}

${c.bold("Usage")}
  moticon <command> [options]

${c.bold("Commands")}
  add <names...>        Copy icon components into your project
  list                 List every icon in the catalog
  search <query>       Find icons by name, tag, category or mechanic
  init                 Create moticon.json in the current project

${c.bold("add options")}
  -o, --out <dir>       Output directory (default: components/moticon)
  --jsx                 Emit .jsx instead of .tsx
  --overwrite           Replace existing files

${c.bold("list options")}
  --category <name>     Filter by category
  --mechanic <name>     Filter by animation mechanic
  --stateful            Only icons that accept a state prop
  --json                Machine-readable output

${c.bold("Examples")}
  ${c.cyan("moticon add bell heart download")}
  ${c.cyan("moticon search notification")}
  ${c.cyan("moticon list --stateful")}
  ${c.cyan("moticon add menu --out src/icons")}
`;

/** Minimal flag parser: --flag, --key value, -x, and positional args. */
function parse(argv: string[]) {
  const positional: string[] = [];
  const flags: Record<string, string | boolean> = {};
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--") {
      positional.push(...argv.slice(i + 1));
      break;
    }
    if (a.startsWith("--")) {
      const key = a.slice(2);
      const next = argv[i + 1];
      if (next !== undefined && !next.startsWith("-")) {
        flags[key] = next;
        i++;
      } else {
        flags[key] = true;
      }
    } else if (a.startsWith("-") && a.length > 1) {
      const key = a.slice(1);
      const next = argv[i + 1];
      if (next !== undefined && !next.startsWith("-")) {
        flags[key] = next;
        i++;
      } else {
        flags[key] = true;
      }
    } else {
      positional.push(a);
    }
  }
  return { positional, flags };
}

function main() {
  const argv = process.argv.slice(2);
  const { positional, flags } = parse(argv);

  if (flags.version || flags.v || positional[0] === "version") {
    line(VERSION);
    return;
  }
  const cmd = positional[0];
  if (!cmd || flags.help || flags.h || cmd === "help") {
    line(HELP);
    return;
  }

  const rest = positional.slice(1);

  switch (cmd) {
    case "add":
      add(rest, {
        outDir: (flags.out ?? flags.o) as string | undefined,
        overwrite: Boolean(flags.overwrite),
        jsx: Boolean(flags.jsx),
      });
      break;

    case "list":
      list({
        category: flags.category as string | undefined,
        mechanic: flags.mechanic as string | undefined,
        stateful: Boolean(flags.stateful),
        json: Boolean(flags.json),
      });
      break;

    case "search":
      if (!rest[0]) fail(`search needs a query: ${c.cyan("moticon search bell")}`);
      doSearch(rest.join(" "), { json: Boolean(flags.json) });
      break;

    case "init":
      init({
        outDir: (flags.out ?? flags.o) as string | undefined,
        jsx: Boolean(flags.jsx),
        force: Boolean(flags.force),
      });
      break;

    default:
      fail(`unknown command "${cmd}". Run ${c.cyan("moticon help")}`);
  }
}

main();
