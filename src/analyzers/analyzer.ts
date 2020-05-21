import { TokenizerOptions, Tokenizer } from '../tokenizers/tokernizer';
import { FilterOptions, Filter } from '../filters/filter';
import { AnalyzerInterface } from './types';
import { TokenizerInterface } from '../tokenizers/types';
import { FilterInterface } from '../filters';

export type AnalyzerOptions = {
  type: string;
  tokenizer: TokenizerOptions;
  filters?: {
    [type: string]: FilterOptions;
  };
};

export const AnalyzerOptionsDefault: AnalyzerOptions = {
  type: 'letter',
  tokenizer: {
    type: 'letter',
  },
  filters: {
    lowercase: {
      type: 'lowercase',
    },
    stop: {
      type: 'stop',
    },
  },
};

export class Analyzer implements AnalyzerInterface {
  private _options: AnalyzerOptions;
  constructor(options?: AnalyzerOptions) {
    this._options = Object.assign({}, AnalyzerOptionsDefault, options);
  }

  get tokenizer(): TokenizerInterface {
    return new Tokenizer(this._options.tokenizer);
  }

  get filters(): FilterInterface[] {
    const filters: FilterInterface[] = [];
    if (Object.keys(this._options.filters as {}).length > 0) {
      for (const key in this._options.filters) {
        filters.push(new Filter(this._options.filters[key]));
      }
    }
    return filters;
  }

  analyze(value: string): string[] {
    let tokens = this.tokenizer.tokenize(value);
    const filters = this.filters;
    if (filters.length > 0) {
      for (const filter of filters) {
        tokens = filter.filter(tokens);
      }
    }
    return tokens;
  }
}
