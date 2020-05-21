export type TokenizerFunction = (value: string) => string[];

export interface TokenizerInterface {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [property: string]: any;
  tokenize: TokenizerFunction;
}
