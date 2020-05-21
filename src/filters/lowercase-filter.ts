import { FilterInterface } from './types';

export class LowercaseFilter implements FilterInterface {
  private _locale = 'en';

  set locale(locale: string) {
    this._locale = locale;
  }

  get locale(): string {
    return this._locale;
  }

  filter(value: string[]): string[] {
    return value.map((v) => v.toLocaleLowerCase(this._locale));
  }
}
