import { Filter, Analyzer, AnyObject, Tokenizer } from './types';

export type IndexOptions = {
  analysis: {
    filter?: {
      [property: string]: Filter;
    };
    tokenizer?: {
      [property: string]: Tokenizer;
    };
    analyzer?: {
      [property: string]: Analyzer;
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

  getData(): Map<string, AnyObject> {
    return this._documents;
  }

  async add(id: string, doc: AnyObject): Promise<Index> {
    this._documents.set(id, doc);
    console.log(this._options);
    return this;
  }
}
