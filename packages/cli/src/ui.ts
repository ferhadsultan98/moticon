/** Tiny ANSI helpers — no dependency. Respects NO_COLOR / non-TTY. */
const enabled =
  process.stdout.isTTY && !process.env.NO_COLOR && process.env.TERM !== "dumb";

const wrap = (code: string) => (s: string | number) =>
  enabled ? `\x1b[${code}m${s}\x1b[0m` : String(s);

export const c = {
  bold: wrap("1"),
  dim: wrap("2"),
  green: wrap("32"),
  cyan: wrap("36"),
  yellow: wrap("33"),
  red: wrap("31"),
  gray: wrap("90"),
};

export const sym = {
  ok: c.green("✓"),
  err: c.red("✗"),
  arrow: c.dim("→"),
  bullet: c.dim("·"),
};

export function line(msg = "") {
  process.stdout.write(msg + "\n");
}

export function fail(msg: string): never {
  process.stderr.write(`${sym.err} ${msg}\n`);
  process.exit(1);
}
