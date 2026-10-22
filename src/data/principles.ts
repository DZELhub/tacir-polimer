import {
  Handshake,
  Leaf,
  Recycle,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import type messages from "@/locales/en.json";
export interface PrincipleDefinition {
  readonly key: Exclude<
    keyof typeof messages.Principles,
    "eyebrow" | "heading" | "introduction"
  >;
  readonly icon: LucideIcon;
}
export const principles = [
  { key: "environmental_awareness", icon: Leaf },
  { key: "circular_economy", icon: Recycle },
  { key: "responsible_sourcing", icon: ShieldCheck },
  { key: "business_integrity", icon: Handshake },
] as const satisfies readonly PrincipleDefinition[];
