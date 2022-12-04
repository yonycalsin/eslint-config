# @yonycalsin/eslint-plugin-import-sort

<a href="https://github.com/yonycalsin/eslint-config"><img src="https://img.shields.io/spiget/stars/1000?color=brightgreen&label=Star&logo=github" /></a>
<a href="https://www.npmjs.com/@yonycalsin/eslint-plugin-import-sort" target="_blank">
<img src="https://img.shields.io/npm/v/@yonycalsin/eslint-plugin-import-sort" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/@yonycalsin/eslint-plugin-import-sort" target="_blank">
<img src="https://img.shields.io/npm/l/@yonycalsin/eslint-plugin-import-sort" alt="Package License" /></a>
<a href="https://www.npmjs.com/@yonycalsin/eslint-plugin-import-sort" target="_blank">
<img src="https://img.shields.io/npm/dm/@yonycalsin/eslint-plugin-import-sort" alt="NPM Downloads" /></a>
<a href="https://github.com/yonycalsin"><img src="https://img.shields.io/badge/Author-Yony%20Calsin-blueviolet?style=flat-square&logo=appveyor" /></a>
<a href="https://twitter.com/yonycalsin" target="_blank">
<img src="https://img.shields.io/twitter/follow/yonycalsin.svg?style=social&label=Follow"></a>

## Installation

```bash
# Using npm
npm install --save @yonycalsin/eslint-plugin-import-sort@latest

# Using yarn
yarn add @yonycalsin/eslint-plugin-import-sort@latest
```

## Usage

> eslintrc.js

Extending configs

```jsonc
// for react
{
    extends: ['plugin:@yonycalsin/import-sort/react']
}

// for node
{
    extends: ['plugin:@yonycalsin/import-sort/node']
}
```

Using rules

```js
module.exports = {
  plugins: ['@yonycalsin/import-sort'],
  rules: {
    '@yonycalsin/import-sort/typescript-react-imports': 'error',
    '@yonycalsin/import-sort/typescript-react-exports': 'error',
  },
}
```

you can also customize the modules

```ts
'@yonycalsin/import-sort/typescript-react-imports': ['error', { modules: ["analytics", "screens", "utils"] }],
```

## Stay in touch

- Github [@yonycalsin](https://github.com/yonycalsin)
- Twitter [@yonycalsin](https://twitter.com/yonycalsin)

## License

`@yonycalsin/eslint-plugin-import-sort` under [License.](LICENSE)
