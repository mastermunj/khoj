export type FilterFunction = (tokens: string[]) => string[];

export interface FilterInterface {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [property: string]: any;
  filter: FilterFunction;
}
