#!/usr/bin/env node
import program from 'commander';
import { dc } from '.';
// eslint-disable-next-line
const pkg = require('../package.json');

program
   .version(pkg.version)
   .option('-w --write', 'Write Data')
   .option('-o --open <file path>', 'Source path')
   .option('-s --save <file path>', 'Destination path')
   .parse(process.argv);

const data = dc(program.open, program.save, {
   write: !program.write,
});

if (data) {
   console.log(data);
}
