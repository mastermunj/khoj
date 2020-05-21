import { PatternTokenizer } from './pattern-tokernizer';

export class LetterTokenizer extends PatternTokenizer {
  constructor() {
    super();
    this.pattern = /[^A-Za-zА-Яа-я]+/;
  }
}
