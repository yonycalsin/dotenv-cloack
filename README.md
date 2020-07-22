# dotenv-cloack

`dotenv cloack` is a package that allows you to generate on file all environment variables without the value

<a href="https://github.com/yonicalsin/dotenv-cloack"><img src="https://img.shields.io/spiget/stars/1000?color=brightgreen&label=Star&logo=github" /></a>
<a href="https://www.npmjs.com/dotenv-cloack" target="_blank">
<img src="https://img.shields.io/npm/v/dotenv-cloack" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/dotenv-cloack" target="_blank">
<img src="https://img.shields.io/npm/l/dotenv-cloack" alt="Package License" /></a>
<a href="https://www.npmjs.com/dotenv-cloack" target="_blank">
<img src="https://img.shields.io/npm/dm/dotenv-cloack" alt="NPM Downloads" /></a>
<a href="https://github.com/yonicalsin/dotenv-cloack" target="_blank">
<img src="https://s3.amazonaws.com/assets.coveralls.io/badges/coveralls_95.svg" alt="Coverage" /></a>
<a href="https://github.com/yonicalsin/dotenv-cloack"><img src="https://img.shields.io/badge/Github%20Page-dotenv.cloack-yellow?style=flat-square&logo=github" /></a>
<a href="https://github.com/yonicalsin"><img src="https://img.shields.io/badge/Author-Yoni%20Calsin-blueviolet?style=flat-square&logo=appveyor" /></a>
<a href="https://twitter.com/yonicalsin" target="_blank">
<img src="https://img.shields.io/twitter/follow/yonicalsin.svg?style=social&label=Follow"></a>

## 🍉 Installation

> First we will have to install, in order to use this wonderful package.

```bash
# Using npm
npm install --save dotenv-cloack
npm install -g dotenv-cloack # Globaly

# Using yarn
npm add --save dotenv-cloack
yarn global add dotenv-cloack # Globaly
```

## 🚀 Process

> Create .env file

```bash
# Application
APP_NAME=Dotenv Cloack
APP_PORT=8080

# Database
DB_HOST=localhost
DB_PASS=admin_password
DB_USER=cloack
```

> The processed file will be generated `.env.example`

```bash
# Application
APP_NAME=Dotenv Cloack
APP_PORT=xxxx

# Database
DB_HOST=localhost
DB_PASS=xxxxxxxxxxxxxx
DB_USER=xxxxxx
```

to generate is very easy !

```bash
cloack --ignore APP_NAME,DB_HOST
```

## 🌎 Usage

```bash
npx cloack

# Or

# Globaly
cloack
```

### options

-  **-w** --write - create the target file and generate without the values, by default it is true
-  **-o** --open - the default file address is `.env`
-  **-s** --save - the default output address is the name of the input file concatenated with `.example`; for example `.env.example`
-  **-i** --ignore - entered keys will be ignored, add separating by commas `(,)`

> Example

```bash
cloack -w -o .env -s .env.example -i APP_NAME,AUTHOR_NAME
```

## ⭐ Support for

`dotenv-cloack` is an open source project licensed by [MIT](LICENSE). You can grow thanks to the sponsors and the support of the amazing sponsors. If you want to join them, [contact me here](mailto:helloyonicb@gmail.com).

## 🎩 Stay in touch

-  Github [@yonicalsin](https://github.com/yonicalsin)
-  Twitter [@yonicalsin](https://twitter.com/yonicalsin)
-  Instagram [@yoni_calsin](https://instagram.com/yoni_calsin)
-  Medium [@yonicalsin](https://medium.com/yonicalsin)

## 🚀 Contributors

Thanks to the wonderful people who collaborate with me !

## 📜 License

`dotenv-cloack` under [License MIT.](LICENSE)
