import {
  ArrowLeftRight,
  Recycle,
  SearchCheck,
  type LucideIcon,
} from "lucide-react";
import type messages from "@/locales/en.json";
export interface SolutionDefinition {
  readonly number: string;
  readonly titleKey: keyof typeof messages.Solutions;
  readonly descriptionKey: keyof typeof messages.Solutions;
  readonly icon: LucideIcon;
}
export const solutions = [
  {
    number: "01",
    titleKey: "polymer_trading",
    descriptionKey:
      "connecting_businesses_with_polymer_materials_through_international",
    icon: ArrowLeftRight,
  },
  {
    number: "02",
    titleKey: "recycling_initiatives",
    descriptionKey:
      "exploring_recyclingoriented_material_opportunities_to_support_more",
    icon: Recycle,
  },
  {
    number: "03",
    titleKey: "custom_sourcing",
    descriptionKey: "helping_businesses_identify_polymer_materials_that_align",
    icon: SearchCheck,
  },
] as const satisfies readonly SolutionDefinition[];
