import type { Service } from "@/lib/content";
import { serviceSolutionsHref } from "@/lib/content";
import { getServiceIcon } from "@/lib/icons";
import Link from "next/link";

type ServiceCardProps = {
  service: Service;
  compact?: boolean;
};

export function ServiceCard({ service, compact = false }: ServiceCardProps) {
  const Icon = getServiceIcon(service.icon);
  const href = serviceSolutionsHref(service.slug);

  return (
    <Link
      href={href}
      className="group flex h-full flex-col rounded-2xl border border-ink/10 bg-white p-6 transition hover:border-adco-blue/40 hover:shadow-lg hover:shadow-adco-blue/5"
    >
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-adco-blue/10 text-adco-blue">
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <h3 className="mt-4 font-display text-lg font-semibold tracking-tight group-hover:text-adco-blue">
        {service.name}
      </h3>
      <p className="mt-2 flex-1 text-sm text-ink/65">
        {compact ? service.shortDescription : service.longDescription}
      </p>
      {!compact ? (
        <p className="mt-3 text-xs text-ink/50">
          <span className="font-semibold text-ink/70">Best for:</span>{" "}
          {service.bestFor}
        </p>
      ) : null}
    </Link>
  );
}
