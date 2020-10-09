import fs from 'fs';
import path from 'path';
import { headerComment, mergeOptions, rexMatchLine } from './constants';

const cloack = (options?: any) => {
   const {
      ignoreKeys,
      maskValue,
      from,
      to,
      mask,
      ignoreAll,
      alreadyEnv,
   } = mergeOptions(options);

   const data = fs.readFileSync(path.resolve(from), { encoding: 'utf-8' });

   let newData = data.toString();

   !alreadyEnv &&
      newData.split('\n').forEach((line) => {
         const item = line.match(rexMatchLine);

         if (!item) return;

         const [, key, value] = item;

         // Already in ignore
         if (ignoreKeys.includes(key) || ignoreAll) return;

         const newValue = mask
            ? String(value).replace(/[a-z\s\D\d\w\_\-]/g, maskValue)
            : '';

         const newLine = key + '=' + newValue;

         newData = newData.replace(new RegExp(line, 'g'), newLine);
      });

   const alreadyComment = newData.match(headerComment);

   if (!alreadyComment) {
      // credit adding
      newData = headerComment + '\n\n' + newData;
   }

   fs.writeFileSync(to, newData, {
      encoding: 'utf-8',
   });
};

export default cloack;
