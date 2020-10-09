const headerComment = `# Created by # https://github.com/yonycalsin/dotenv-cloack`;

const envFilename = '.env';

const envExampleFileName = '.env.example';

const defaultOptions = {
   ignore: ['PORT'],
   mask: false,
   maskValue: 'x',
};

const rexMatchLine = /^\s*([\w.-]+)\s*=\s*(.*)?\s*$/;

export {
   headerComment,
   envFilename,
   envExampleFileName,
   defaultOptions,
   rexMatchLine,
};
