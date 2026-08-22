import type { ReactNode } from "react";

type Language = "tsx" | "ts" | "bash";

const tokenPattern =
  /(\/\/.*$|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`|\b(?:import|from|export|default|function|return|interface|type|const|let|var|extends|new|true|false|null|undefined)\b|\b(?:string|number|boolean|ReactNode)\b|\b\d+(?:\.\d+)?\b|<\/?[A-Z][A-Za-z0-9]*|[{}()[\];,.?:=<>/])/gm;

function tokenClass(token: string, language: Language) {
  if (token.startsWith("//")) return "syntax-comment";
  if (/^["'`]/.test(token)) return "syntax-string";
  if (/^\d/.test(token)) return "syntax-number";
  if (/^<\/?[A-Z]/.test(token)) return "syntax-component";
  if (/^(string|number|boolean|ReactNode)$/.test(token)) return "syntax-type";
  if (
    /^(import|from|export|default|function|return|interface|type|const|let|var|extends|new|true|false|null|undefined)$/.test(
      token
    )
  ) {
    return "syntax-keyword";
  }
  if (language === "bash" && /^(npm|pnpm|yarn|bun)$/.test(token)) {
    return "syntax-command";
  }
  return "syntax-punctuation";
}

function highlightLine(line: string, language: Language): ReactNode[] {
  if (language === "bash") {
    const match = line.match(/^(\$\s+)?(npm|pnpm|yarn|bun)(.*)$/);
    if (match) {
      return [
        match[1] ? (
          <span key="prompt" className="syntax-prompt">
            {match[1]}
          </span>
        ) : null,
        <span key="command" className="syntax-command">
          {match[2]}
        </span>,
        <span key="args" className="syntax-code-text">
          {match[3]}
        </span>,
      ];
    }
  }

  const output: ReactNode[] = [];
  let cursor = 0;
  const matcher = new RegExp(tokenPattern.source, tokenPattern.flags);

  for (const match of line.matchAll(matcher)) {
    const index = match.index ?? 0;
    if (index > cursor) output.push(line.slice(cursor, index));
    output.push(
      <span key={`${index}-${match[0]}`} className={tokenClass(match[0], language)}>
        {match[0]}
      </span>
    );
    cursor = index + match[0].length;
  }

  if (cursor < line.length) output.push(line.slice(cursor));
  return output;
}

export function SyntaxCode({
  code,
  language = "tsx",
}: {
  code: string;
  language?: Language;
}) {
  return (
    <code>
      {code.split("\n").map((line, index, lines) => (
        <span key={index} className="block min-h-[1.5em]">
          {highlightLine(line, language)}
          {index < lines.length - 1 ? "\n" : null}
        </span>
      ))}
    </code>
  );
}
