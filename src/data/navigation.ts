import type messages from "@/locales/en.json";
export type NavigationLocation = "navbar" | "footer";
export type NavigationLabel = Extract<
  keyof typeof messages.Navbar,
  keyof typeof messages.Footer
>;
export interface NavigationItem {
  readonly id: NavigationLabel;
  readonly href: `#${NavigationLabel}`;
  readonly translationKey: NavigationLabel;
  readonly order: number;
  readonly visibleIn?: readonly NavigationLocation[];
}
export const navigation: readonly NavigationItem[] = [
  { id: "home", href: "#home", translationKey: "home", order: 0 },
  { id: "products", href: "#products", translationKey: "products", order: 1 },
  { id: "about", href: "#about", translationKey: "about", order: 2 },
  {
    id: "solutions",
    href: "#solutions",
    translationKey: "solutions",
    order: 3,
  },
  {
    id: "principles",
    href: "#principles",
    translationKey: "principles",
    order: 4,
  },
  { id: "partners", href: "#partners", translationKey: "partners", order: 5 },
  { id: "contact", href: "#contact", translationKey: "contact", order: 6 },
];
