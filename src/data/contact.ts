import { Mail, MapPin, Phone, type LucideIcon } from "lucide-react";
import type messages from "@/locales/en.json";
import { company } from "./company";
export interface ContactDetailDefinition {
  readonly labelKey: keyof typeof messages.Contact;
  readonly actionKey: keyof typeof messages.Contact;
  readonly value: string;
  readonly href: string;
  readonly icon: LucideIcon;
  readonly external: boolean;
}
export const contactDetails = [
  {
    labelKey: "address",
    value: company.address,
    href: company.mapUrl,
    icon: MapPin,
    actionKey: "view_on_google_maps",
    external: true,
  },
  {
    labelKey: "email",
    value: company.email,
    href: "mailto:" + company.email,
    icon: Mail,
    actionKey: "send_an_email",
    external: false,
  },
  {
    labelKey: "phone",
    value: company.phone,
    href: "tel:" + company.phone.replaceAll(" ", ""),
    icon: Phone,
    actionKey: "call_us",
    external: false,
  },
] as const satisfies readonly ContactDetailDefinition[];
