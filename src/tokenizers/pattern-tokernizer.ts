import { TokenizerInterface } from './types';

export type Pattern = RegExp | string;

export class PatternTokenizer implements TokenizerInterface {
  private _pattern: Pattern = /\W+/g;
  private _flags = '';

  set pattern(pattern: Pattern) {
    this._pattern = pattern;
  }

  get pattern(): Pattern {
    return this._pattern;
  }

  set flags(flags: string) {
    if (flags.trim() === '') {
      return;
    }
    if (!/[gimsuy]+/i.test(flags)) {
      throw new Error('Invalid RegExp Flags: ' + flags);
    }
    this._flags = flags.toLowerCase();
  }

  get flags(): string {
    return this._flags;
  }

  tokenize(value: string): string[] {
    const regex =
      this.pattern instanceof RegExp
        ? this.pattern
        : new RegExp(this.pattern, this.flags);

    return value.split(regex).filter((x) => x);
  }
}
