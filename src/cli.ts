#!/usr/bin/env node
import program from 'commander';
import { cloack } from '.';
// eslint-disable-next-line
const pkg = require('../package.json');

const list = (value = '') => value.split(',').filter(Boolean);

program
   .version(pkg.version)
   .option('-w --write', 'Write Data')
   .option('-o --open <file path>', 'Source path')
   .option('-s --save <file path>', 'Destination path')
   .option(
      '-i --ignore <ignore values>',
      'variables to be ignored separate by commas (,)',
      list,
   )
   .parse(process.argv);

const data = cloack(program.open, program.save, {
   write: !program.write,
   ignore: program.ignore,
});

if (data) {
   console.log(data);
}
