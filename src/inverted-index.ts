import {
  FilterConfig,
  AnalyzerConfig,
  AnyObject,
  TokenizerConfig,
  Mapping,
} from './types';

export type IndexOptions = {
  analysis: {
    filter?: {
      [property: string]: FilterConfig;
    };
    tokenizer?: {
      [property: string]: TokenizerConfig;
    };
    analyzer?: {
      [property: string]: AnalyzerConfig;
    };
  };
};

const IndexOptionsDefault: IndexOptions = {
  analysis: {
    filter: {
      standard: {
        type: 'standard',
      },
    },
    analyzer: {
      standard: {
        type: 'standard',
      },
    },
  },
};

export class Index {
  private _options: IndexOptions;
  private _documents: Map<string, AnyObject>;
  // private _invertedIndex: Map<string, AnyObject>;
  private _idField = 'id';
  private _mappings: Mapping = {};

  constructor(options?: IndexOptions) {
    this._options = options || IndexOptionsDefault;
    this._documents = new Map();
  }

  set idField(field: string) {
    this._idField = field;
  }

  get idField(): string {
    return this._idField;
  }

  set mappings(mappings: Mapping) {
    this._mappings = mappings;
  }

  get mappings(): Mapping {
    return this._mappings;
  }

  get documents(): Map<string, AnyObject> {
    return this._documents;
  }

  get expandedMappings() {

  }

  async add(id: string, doc: AnyObject): Promise<Index> {
    this._documents.set(id, doc);
    console.log(this._options);
    return this;
  }
}
