import { AnyObject } from '../types';
import { TokenizerInterface } from './types';

import { camelCase, upperFirst } from 'lodash';

export type TokenizerOptions = {
  type: string;
} & AnyObject;

export class Tokenizer implements TokenizerInterface {
  private _options: TokenizerOptions;
  constructor(options: TokenizerOptions) {
    this._options = options;
  }

  private get tokenizerClassName(): string {
    return `${upperFirst(camelCase(this._options.type))}Tokenizer`;
  }

  private get instance(): TokenizerInterface {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const exports = require(`./${this._options.type}-tokernizer`);
    return this.configure(new exports[this.tokenizerClassName]());
  }

  private configure(instance: TokenizerInterface): TokenizerInterface {
    for (const key in this._options) {
      if (key !== 'type') {
        if (!this.hasSetter(instance, key)) {
          throw new Error(
            `Invalid parameter: ${key} for Tokenizer: ${this._options.type}`,
          );
        }
        instance[key] = this._options[key];
      }
    }
    return instance;
  }

  private hasSetter(object: AnyObject, name: string): boolean {
    const descriptor = Object.getOwnPropertyDescriptor(
      Object.getPrototypeOf(object),
      name,
    );
    return descriptor?.set !== undefined;
  }

  tokenize(value: string): string[] {
    return this.instance.tokenize(value);
  }
}
