#!/usr/bin/env node
import program from 'commander';
import cloack from './index';

// eslint-disable-next-line
const pkg = require('../package.json');

const list = (value = '') => value.split(',').filter(Boolean);

program
   .version(pkg.version)
   .option('-f --from <file path>', 'From path')
   .option('-t --to <file path>', 'To path')
   .option('-m --mask', 'For mask')
   .option('-mv --maskValue <string>', 'For mask value')
   .option('-ia --ignoreAll', 'Ignore all values')
   .option(
      '-i --ignore <ignore values>',
      'variables to be ignored separate by commas (,)',
      list,
   )
   .parse(process.argv);

cloack(program);
