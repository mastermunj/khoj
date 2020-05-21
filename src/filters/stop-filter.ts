import { FilterInterface } from './types';

export class StopFilter implements FilterInterface {
  private _stopwords: string | string[] = 'english';
  private _ignoreCase = true;
  private _removeTrailing = true;

  set stopwords(stopwords: string | string[]) {
    this._stopwords = stopwords;
  }

  get stopwords(): string | string[] {
    return this._stopwords;
  }

  set ignoreCase(ignoreCase: boolean) {
    this._ignoreCase = ignoreCase;
  }

  get ignoreCase(): boolean {
    return this._ignoreCase;
  }

  set removeTrailing(removeTrailing: boolean) {
    this._removeTrailing = removeTrailing;
  }

  get removeTrailing(): boolean {
    return this._removeTrailing;
  }

  filter(value: string[]): string[] {
    let stopwords: string[] = [];
    if (typeof this.stopwords === 'string') {
      stopwords = require(`${__dirname}/stop-words/${this.stopwords}`).default;
    } else if (Array.isArray(this.stopwords)) {
      stopwords = this.stopwords;
    } else {
      throw new Error('Invalid stopwords');
    }
    const regex = new RegExp(
      '\\b(' + stopwords.join('|') + ')\\b',
      'g' + (this.ignoreCase ? 'i' : ''),
    );
    return value.filter((v) => v.trim().replace(regex, '').length);
  }
}
