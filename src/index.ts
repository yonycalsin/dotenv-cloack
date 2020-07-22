import fs from 'fs';
import { Merge } from 'merge-all-objects';
import path from 'path';

const rex = /^\s*([\w.-]+)\s*=\s*(.*)?\s*$/;

const defaultOptions = {
   ignores: [],
};
const header = `# Created by dotenv-cloack © 2020\n# https://github.com/yonicalsin/dotenv-cloack`;

const getOptions = () => {
   let data: any;
   try {
      data = fs.readFileSync(path.resolve('dcloack.json'), {
         encoding: 'utf-8',
      });
      data = JSON.parse(data);
   } catch {}
   return Merge(defaultOptions, data);
};

/**
 * @author Yoni Calsin <helloyonicb@gmail.com>
 * @title Parser function
 * @param from .env
 * @param to from + ".example"
 * @param write true
 */
export const dc = (
   from = '.env',
   to = from + '.example',
   write = true,
): undefined | string => {
   const { ignores } = getOptions();

   const data = fs.readFileSync(path.resolve(from), { encoding: 'utf-8' });

   let newData = data.toString();

   newData
      .toString()
      .split('\n')
      .forEach((line) => {
         const item = line.match(rex);
         if (item) {
            const [, key, value = 'xxxxxxx'] = item;
            const newLine = `${key}=${String(value).replace(
               /[a-z\s\D\d\w]/g,
               'x',
            )}`;

            if (!ignores.includes(key)) {
               newData = newData.replace(new RegExp(line, 'g'), newLine);
            }
         }
      });

   // credit adding
   newData = header + '\n\n' + newData;
   newData += '\n\n' + header;

   if (write) {
      fs.writeFileSync(to, newData, {
         encoding: 'utf-8',
      });
   } else {
      return newData;
   }
};

export default dc;
