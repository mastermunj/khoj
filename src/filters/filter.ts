import { AnyObject } from '../types';
import { FilterInterface } from './types';

import { camelCase, upperFirst } from 'lodash';

export type FilterOptions = {
  type: string;
} & AnyObject;

export class Filter implements FilterInterface {
  private _options: FilterOptions;
  constructor(options: FilterOptions) {
    this._options = options;
  }

  private get filterClassName(): string {
    return `${upperFirst(camelCase(this._options.type))}Filter`;
  }

  private get instance(): FilterInterface {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const exports = require(`./${this._options.type}-filter`);
    return this.configure(new exports[this.filterClassName]());
  }

  private configure(instance: FilterInterface): FilterInterface {
    for (const key in this._options) {
      if (key !== 'type') {
        if (!this.hasSetter(instance, key)) {
          throw new Error(
            `Invalid parameter: ${key} for Filter: ${this._options.type}`,
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

  filter(tokens: string[]): string[] {
    return this.instance.filter(tokens);
  }
}
