import { ServiceAlacarteVisual } from "@/components/ServiceAlacarteVisual";
import Link from "next/link";
import type { ReactNode } from "react";

type Block =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "image"; alt: string; slug: string; caption: string };

function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const pattern = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;
  return text
    .split(pattern)
    .filter((part) => part.length > 0)
    .map((part, index) => {
      const key = `${keyPrefix}-${index}`;
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={key}>{part.slice(2, -2)}</strong>;
      }
      const link = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part);
      if (link) {
        const label = link[1] ?? "";
        const href = link[2] ?? "";
        const className =
          "font-semibold text-adco-blue underline underline-offset-2 hover:text-adco-blue/80";
        if (href.startsWith("http")) {
          return (
            <a
              key={key}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={className}
            >
              {label}
            </a>
          );
        }
        return (
          <Link key={key} href={href} className={className}>
            {label}
          </Link>
        );
      }
      return <span key={key}>{part}</span>;
    });
}

function parseImage(line: string): Block | null {
  const match =
    /^!\[([^\]]*)\]\(visual:([a-z0-9-]+)(?: "([^"]*)")?\)$/.exec(line);
  if (!match) return null;
  return {
    type: "image",
    alt: match[1] ?? "",
    slug: match[2] ?? "",
    caption: match[3] ?? "",
  };
}

function parseTableRow(line: string): string[] {
  return line
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim());
}

function isTableDivider(line: string): boolean {
  return /^\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?$/.test(line.trim());
}

function parseBlocks(markdown: string): Block[] {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const blocks: Block[] = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index] ?? "";
    const trimmed = line.trim();
    if (!trimmed) {
      index += 1;
      continue;
    }

    if (trimmed.startsWith("## ")) {
      blocks.push({ type: "h2", text: trimmed.slice(3).trim() });
      index += 1;
      continue;
    }
    if (trimmed.startsWith("### ")) {
      blocks.push({ type: "h3", text: trimmed.slice(4).trim() });
      index += 1;
      continue;
    }

    const image = parseImage(trimmed);
    if (image) {
      blocks.push(image);
      index += 1;
      continue;
    }

    if (trimmed.startsWith("|")) {
      const tableLines: string[] = [];
      while (index < lines.length && (lines[index] ?? "").trim().startsWith("|")) {
        tableLines.push((lines[index] ?? "").trim());
        index += 1;
      }
      const headers = parseTableRow(tableLines[0] ?? "");
      const rows = tableLines
        .slice(1)
        .filter((row) => !isTableDivider(row))
        .map(parseTableRow);
      blocks.push({ type: "table", headers, rows });
      continue;
    }

    if (trimmed.startsWith("- ")) {
      const items: string[] = [];
      while (index < lines.length && (lines[index] ?? "").trim().startsWith("- ")) {
        items.push((lines[index] ?? "").trim().slice(2));
        index += 1;
      }
      blocks.push({ type: "ul", items });
      continue;
    }

    if (/^\d+\.\s/.test(trimmed)) {
      const items: string[] = [];
      while (index < lines.length && /^\d+\.\s/.test((lines[index] ?? "").trim())) {
        items.push((lines[index] ?? "").trim().replace(/^\d+\.\s/, ""));
        index += 1;
      }
      blocks.push({ type: "ol", items });
      continue;
    }

    const paragraph: string[] = [trimmed];
    index += 1;
    while (index < lines.length) {
      const next = (lines[index] ?? "").trim();
      if (
        !next ||
        next.startsWith("#") ||
        next.startsWith("- ") ||
        next.startsWith("|") ||
        /^\d+\.\s/.test(next) ||
        parseImage(next)
      ) {
        break;
      }
      paragraph.push(next);
      index += 1;
    }
    blocks.push({ type: "p", text: paragraph.join(" ") });
  }

  return blocks;
}

function BlockView({ block, index }: { block: Block; index: number }) {
  const key = `${block.type}-${index}`;
  switch (block.type) {
    case "h2":
      return (
        <h2
          key={key}
          className="mt-10 font-display text-2xl font-bold tracking-tight text-ink md:text-3xl"
        >
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 key={key} className="mt-8 font-display text-xl font-semibold text-ink">
          {block.text}
        </h3>
      );
    case "p":
      return (
        <p key={key} className="mt-4 text-base leading-relaxed text-ink/75">
          {renderInline(block.text, key)}
        </p>
      );
    case "ul":
      return (
        <ul key={key} className="mt-4 list-disc space-y-2 pl-5 text-base leading-relaxed text-ink/75">
          {block.items.map((item, itemIndex) => (
            <li key={`${key}-${itemIndex}`}>{renderInline(item, `${key}-${itemIndex}`)}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={key} className="mt-4 list-decimal space-y-2 pl-5 text-base leading-relaxed text-ink/75">
          {block.items.map((item, itemIndex) => (
            <li key={`${key}-${itemIndex}`}>{renderInline(item, `${key}-${itemIndex}`)}</li>
          ))}
        </ol>
      );
    case "table":
      return (
        <div key={key} className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm text-ink/75">
            <thead>
              <tr>
                {block.headers.map((header) => (
                  <th
                    key={header}
                    className="border-b border-ink/15 px-3 py-2 font-semibold text-ink"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, rowIndex) => (
                <tr key={`${key}-row-${rowIndex}`}>
                  {row.map((cell, cellIndex) => (
                    <td key={`${key}-${rowIndex}-${cellIndex}`} className="border-b border-ink/10 px-3 py-2">
                      {renderInline(cell, `${key}-${rowIndex}-${cellIndex}`)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "image":
      return (
        <figure key={key} className="mt-6">
          <div
            className="relative h-44 overflow-hidden rounded-2xl md:h-56"
            role="img"
            aria-label={block.alt}
          >
            <ServiceAlacarteVisual slug={block.slug} />
          </div>
          {block.caption ? (
            <figcaption className="mt-2 text-sm text-ink/55">{block.caption}</figcaption>
          ) : null}
        </figure>
      );
    default: {
      const unreachable: never = block;
      return unreachable;
    }
  }
}

export function BlogMarkdown({ markdown }: { markdown: string }) {
  const blocks = parseBlocks(markdown);
  return (
    <div>
      {blocks.map((block, index) => (
        <BlockView key={`${block.type}-${index}`} block={block} index={index} />
      ))}
    </div>
  );
}
