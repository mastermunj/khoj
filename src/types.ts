export interface AnyObject {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [property: string]: any;
}

export type FilterConfig = {
  type: string;
} & AnyObject;

export type TokenizerConfig = {
  type: string;
} & AnyObject;

export type AnalyzerConfig = {
  type: string;
  tokenizer?: TokenizerConfig;
  filter?: string[];
};

export enum MappingType {
  keyword = 'keyword',
  text = 'text',
}

export type Mapping = {
  [property: string]: {
    type: MappingType;
    analyzer?: string;
    searchAnalyzer?: string;
    properties?: Mapping;
  };
};
