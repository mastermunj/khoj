export interface AnyObject {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [property: string]: any;
}

export type Filter = {
  type: string;
} & AnyObject;

export type Tokenizer = {
  type: string;
} & AnyObject;

export type Analyzer = {
  type: string;
  tokenizer?: Tokenizer;
  filter?: string[];
};
