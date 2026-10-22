import type messages from "@/locales/en.json";
type ProductMessageKey = keyof typeof messages.Products;
export interface ProductDefinition {
  readonly code: string;
  readonly nameKey: ProductMessageKey;
  readonly descriptionKey: ProductMessageKey;
  readonly applicationKeys: readonly ProductMessageKey[];
  readonly image: string;
}
export const products = [
  {
    code: "PET",
    nameKey: "polyethylene_terephthalate",
    descriptionKey: "a_versatile_thermoplastic_widely_used_in_packaging",
    applicationKeys: [
      "bottles_and_containers",
      "food_packaging",
      "polyester_fibers",
    ],
    image: "/images/products/pet.webp",
  },
  {
    code: "PP",
    nameKey: "polypropylene",
    descriptionKey: "a_lightweight_polymer_valued_for_its_chemical",
    applicationKeys: [
      "rigid_packaging",
      "automotive_components",
      "household_products",
    ],
    image: "/images/products/pp.webp",
  },
  {
    code: "PS",
    nameKey: "polystyrene",
    descriptionKey: "a_widely_used_polymer_suitable_for_rigid",
    applicationKeys: [
      "food_containers",
      "disposable_products",
      "consumer_goods",
    ],
    image: "/images/products/ps.webp",
  },
  {
    code: "HIPS",
    nameKey: "high_impact_polystyrene",
    descriptionKey: "a_modified_polystyrene_designed_for_improved_impact",
    applicationKeys: [
      "appliance_housings",
      "electronic_enclosures",
      "thermoformed_packaging",
    ],
    image: "/images/products/hips.webp",
  },
  {
    code: "EPS",
    nameKey: "expanded_polystyrene",
    descriptionKey: "a_lightweight_cellular_material_known_for_insulation",
    applicationKeys: [
      "thermal_insulation",
      "protective_packaging",
      "construction_products",
    ],
    image: "/images/products/eps.webp",
  },
  {
    code: "POM",
    nameKey: "polyoxymethylene",
    descriptionKey:
      "an_engineering_thermoplastic_suited_to_precision_mechanical",
    applicationKeys: [
      "gears_and_bearings",
      "precision_components",
      "industrial_mechanisms",
    ],
    image: "/images/products/pom.webp",
  },
  {
    code: "ABS",
    nameKey: "acrylonitrile_butadiene_styrene",
    descriptionKey: "a_durable_engineering_polymer_combining_toughness_and",
    applicationKeys: [
      "automotive_components",
      "electronic_housings",
      "consumer_products",
    ],
    image: "/images/products/abs.webp",
  },
  {
    code: "PE",
    nameKey: "polyethylene",
    descriptionKey: "a_widely_used_polymer_family_offering_flexibility",
    applicationKeys: [
      "films_and_bags",
      "pipes_and_containers",
      "industrial_packaging",
    ],
    image: "/images/products/pe.webp",
  },
] as const satisfies readonly ProductDefinition[];
