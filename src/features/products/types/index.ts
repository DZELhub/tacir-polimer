export interface Product {
  readonly code: string;
  readonly name: string;
  readonly description: string;
  readonly applications: readonly string[];
  readonly image: string;
}
