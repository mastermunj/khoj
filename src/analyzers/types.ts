export type AnalyzerFunction = (value: string) => string[];

export interface AnalyzerInterface {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [property: string]: any;
  analyze: AnalyzerFunction;
}
