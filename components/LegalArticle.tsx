import type { ReactNode } from "react";

export type LegalTocItem = {
  id: string;
  label: string;
};

type LegalArticleProps = {
  title: string;
  lastUpdatedLine?: string;
  toc: LegalTocItem[];
  children: ReactNode;
  showPageHeader?: boolean;
};

export function LegalSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="font-display text-xl font-bold tracking-tight text-ink md:text-2xl">
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-base leading-relaxed text-ink/80">
        {children}
      </div>
    </section>
  );
}

export function LegalArticle({
  title,
  lastUpdatedLine,
  toc,
  children,
  showPageHeader = true,
}: LegalArticleProps) {
  return (
    <article className="mx-auto max-w-3xl">
      {showPageHeader ? (
        <>
          <h1 className="font-display text-4xl font-bold tracking-tight text-ink">
            {title}
          </h1>
          {lastUpdatedLine ? (
            <p className="mt-3 text-sm text-ink/60">{lastUpdatedLine}</p>
          ) : null}
        </>
      ) : null}

      <nav
        className={`rounded-2xl border border-ink/10 bg-ink/[0.02] p-6 ${showPageHeader ? "mt-10" : ""}`}
        aria-label="Table of contents"
      >
        <p className="text-xs font-semibold uppercase tracking-wider text-ink/50">
          On this page
        </p>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-ink/75">
          {toc.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="text-adco-blue hover:text-adco-blue/80 hover:underline"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="mt-12 space-y-12">{children}</div>
    </article>
  );
}
