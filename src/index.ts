import fs from 'fs';
import path from 'path';

const rex = /^\s*([\w.-]+)\s*=\s*(.*)?\s*$/;

const getOptions = () => {
   try {
      const data = fs.readFileSync(path.resolve('envrc.json'), {
         encoding: 'utf-8',
      });
      return JSON.parse(data);
   } catch {
      return {
         '@ignore': [],
      };
   }
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
   const options = getOptions();
   const ignores: string[] = options['@ignores'];

   const data = fs.readFileSync(path.resolve(from), { encoding: 'utf-8' });

   let newData = data.toString();

   newData
      .toString()
      .split('\n')
      .forEach((line) => {
         const item = line.match(rex);
         if (item) {
            const [oldLine, key, value = 'xxxxxxx'] = item;
            let newLine = `${key}=${String(value).replace(
               /[a-z\s\D\d\w]/g,
               'x',
            )}`;

            if (ignores.includes(key)) {
               newLine = oldLine;
            }

            newData = newData.replace(new RegExp(line, 'g'), newLine);
         }
      });

   // credit adding
   newData += '\n\n# Create by dotenv-cloack';

   if (write) {
      fs.writeFileSync(to, newData, {
         encoding: 'utf-8',
      });
   } else {
      return newData;
   }
};

export default dc;
