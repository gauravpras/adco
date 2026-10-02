export type CmsChoice = "1" | "0" | "0.5";

export type FastTrackEstimateInput = {
  goalLabel: string;
  goalBase: number;
  pageCount: number;
  designMult: number;
  isRedesign: boolean;
  featureWeights: number[];
  cmsChoice: CmsChoice | null;
  timelineMult: number;
};

export type BreakdownRow = {
  id: string;
  label: string;
  value: string;
  description: string;
};

export type FastTrackEstimateResult = {
  low: number;
  high: number;
  rangeLabel: string;
  rows: BreakdownRow[];
};

function pageMultiplier(pageCount: number): number {
  if (pageCount <= 3) return 1;
  if (pageCount <= 6) return 1.25;
  if (pageCount <= 10) return 1.6;
  return 2.2;
}

function formatBaht(value: number): string {
  return `฿${value.toLocaleString("en-US")}`;
}

export function computeFastTrackEstimate(
  input: FastTrackEstimateInput,
): FastTrackEstimateResult {
  const pageMult = pageMultiplier(input.pageCount);
  const designMult = input.designMult || 1;
  let core = input.goalBase * pageMult * designMult;
  if (input.isRedesign) {
    core *= 0.9;
  }

  const featTotal = input.featureWeights.reduce((sum, w) => sum + w, 0);
  let total = core + featTotal;

  const cmsAdd =
    input.cmsChoice === "1" && input.goalBase <= 14900 ? 15000 : 0;
  total += cmsAdd;
  total *= input.timelineMult || 1;

  const low = Math.round((total * 0.85) / 500) * 500;
  const high = Math.round((total * 1.15) / 500) * 500;

  const rows: BreakdownRow[] = [
    {
      id: "r1",
      label: `Base (${input.goalLabel || "site"})`,
      value: formatBaht(input.goalBase),
      description:
        "The starting price for this type of site, based on current Bangkok agency rates for comparable builds.",
    },
    {
      id: "r2",
      label: "Size & design multiplier",
      value: `×${(pageMult * designMult).toFixed(2)}`,
      description:
        "More pages and fully custom design both take more design and build hours, so they scale the base price up.",
    },
  ];

  if (input.isRedesign) {
    rows.push({
      id: "r3",
      label: "Redesign adjustment",
      value: "×0.90",
      description:
        "Redesigns start from existing content and structure, which usually means less discovery work than a brand new build.",
    });
  }

  rows.push({
    id: "r4",
    label: "Features & add-ons",
    value: formatBaht(featTotal),
    description:
      "The combined cost of every extra function and bundle-priced add-on you selected, like booking, e-commerce, or integrations.",
  });

  if (cmsAdd) {
    rows.push({
      id: "r5",
      label: "CMS setup",
      value: formatBaht(cmsAdd),
      description:
        "Adds a content management system so you can edit pages yourself after launch, instead of a fixed, developer-only site.",
    });
  }

  rows.push({
    id: "r6",
    label: "Timeline adjustment",
    value: `×${input.timelineMult || 1}`,
    description:
      "Rushed timelines add a premium for prioritized work. Flexible timelines get a small discount.",
  });

  return {
    low,
    high,
    rangeLabel: `${formatBaht(low)} – ${formatBaht(high)}`,
    rows,
  };
}
