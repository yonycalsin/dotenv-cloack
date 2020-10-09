import fs from 'fs';
import path from 'path';
import { defaultOptions, headerComment, rexMatchLine } from './constants';

export const cloack = (from = '.env', to = from + '.example', options) => {
   const { ignore } = Object.assign(options ?? {}, defaultOptions);

   const data = fs.readFileSync(path.resolve(from), { encoding: 'utf-8' });

   let newData = data.toString();

   newData
      .toString()
      .split('\n')
      .forEach((line) => {
         const item = line.match(rexMatchLine);
         if (item) {
            const [, key, value = 'xxxxxxx'] = item;
            const newLine = `${key}=${String(value).replace(
               /[a-z\s\D\d\w\_\-]/g,
               'x',
            )}`;

            if (!ignore.includes(key)) {
               newData = newData.replace(new RegExp(line, 'g'), newLine);
            }
         }
      });

   // credit adding
   newData = headerComment + '\n\n' + newData;
   newData += '\n\n' + headerComment;

   fs.writeFileSync(to, newData, {
      encoding: 'utf-8',
   });
};

export default cloack;
