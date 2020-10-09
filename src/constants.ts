import { existsSync } from 'fs';

const headerComment = `# Created by https://github.com/yonycalsin/dotenv-cloack`;

const envFilename = '.env';

const envExampleFileName = '.env.example';

const defaultOptions = {
   ignore: ['PORT', 'APP_NAME'],
   mask: false,
   maskValue: 'x',
   from: envFilename,
   to: envExampleFileName,
   maskLengthAuto: false,
   ignoreAll: false,
};

const rexMatchLine = /^\s*([\w.-]+)\s*=\s*(.*)?\s*$/;

const mergeOptions = (settings: any = defaultOptions) => {
   const ignoreKeys = [...defaultOptions?.ignore, ...(settings?.ignore ?? [])];
   const moreOptions = { ...defaultOptions, ...settings };

   const alreadyEnv =
      existsSync(moreOptions.to) && !existsSync(moreOptions.from);

   if (alreadyEnv) {
      moreOptions.ignoreAll = true;
   }

   const from = alreadyEnv ? moreOptions?.to : moreOptions?.from;
   const to = alreadyEnv ? moreOptions?.from : moreOptions?.to;

   return {
      ...moreOptions,
      ignoreKeys,
      alreadyEnv,
      from,
      to,
   };
};

export {
   headerComment,
   envFilename,
   envExampleFileName,
   defaultOptions,
   rexMatchLine,
   mergeOptions,
};
