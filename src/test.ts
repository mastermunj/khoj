// import { KeywordTokenizer } from './tokenizers/keyword-tokernizer';
// import { PatternTokenizer } from './tokenizers/pattern-tokernizer';
// import { LowercaseFilter } from './filters/lowercase-filter';
// import { TrimFilter } from './filters/trim-filter';

import { Analyzer } from './analyzers/analyzer';

// import { Tokenizer } from './tokenizers/tokernizer';
// import { Filter } from './filters/filter';

// const ktk = new KeywordTokenizer();
// console.log(ktk.tokenize('This is Amazing'));

// // const ptk = new PatternTokenizer(/"\w+"/);
// const ptk = new PatternTokenizer();
// // console.log(ptk.tokenize('This is Amazing "wow"'));
// console.log(
//   ptk.tokenize("The 2 QUICK Brown-Foxes jumped over the lazy dog's bone."),
// );

// // const wtk = new PatternTokenizer(/[^A-Za-zА-Яа-я0-9_]+/);
// const wtk = new PatternTokenizer(/[^A-Za-zА-Яа-я]+/);
// const tokens = wtk.tokenize(
//   "The 2 QUICK Brown-Foxes jumped over the lazy dog's bone.",
// );

// console.log(tokens);
// console.log('==============');

// const lf = new LowercaseFilter();
// console.log(lf.filter(tokens));

// const tf = new TrimFilter();
// console.log(
//   tf.filter([
//     '  a',
//     'quick  ',
//     '  fox  ',
//     ' jumps',
//     'over ',
//     ' the ',
//     ' ',
//     '  ',
//   ]),
// );

// // console.log('This is Amazing'.match(/\W+/));

// const tokenizer = new Tokenizer({
//   type: 'pattern',
// });
// const tokens = tokenizer.tokenize(
//   "The 2 QUICK Brown-Foxes jumped over the lazy dog's bone.",
// );
// console.log(tokens);

// const filter = new Filter({
//   type: 'lowercase',
// });
// console.log(filter.filter(tokens));

const analyzer = new Analyzer();

console.log(analyzer);
console.log(analyzer.filters);
console.log(
  analyzer.analyze("The 2 QUICK Brown-Foxes jumped over the lazy dog's bone."),
);
