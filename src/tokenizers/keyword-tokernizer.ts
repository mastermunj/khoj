import { TokenizerInterface } from './types';

export class KeywordTokenizer implements TokenizerInterface {
  tokenize(value: string): string[] {
    return [value];
  }
}
