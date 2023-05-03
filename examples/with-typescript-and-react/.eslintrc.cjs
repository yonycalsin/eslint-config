/* eslint-env node */

module.exports = {
  root: true,
  extends: ['@yonycalsin/typescript', '@yonycalsin/react'],
  parserOptions: {
    project: ['tsconfig.json', 'tsconfig.node.json'],
  },
}
