import { FilterInterface } from './types';

export class TrimFilter implements FilterInterface {
  filter(value: string[]): string[] {
    return value.map((v) => v.trim());
  }
}
