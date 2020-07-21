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

const parser = (from = '.env', to = from + '.example') => {
   const options = getOptions();
   console.log(options);
};
