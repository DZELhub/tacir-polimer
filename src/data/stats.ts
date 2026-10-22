import type messages from "@/locales/en.json";
export interface StatDefinition {
  readonly value: string;
  readonly labelKey: keyof typeof messages.Stats;
}
export const stats = [
  {
    value: "20K+",
    labelKey: "tons",
  },
  {
    value: "10+",
    labelKey: "plastic_types",
  },
  {
    value: "24+",
    labelKey: "countries",
  },
  {
    value: "200+",
    labelKey: "connections",
  },
] as const satisfies readonly StatDefinition[];
