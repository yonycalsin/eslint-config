// @ts-expect-error ts(7016)
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import defineRule from './utils'

export = defineRule({
  meta: {
    type: 'layout',
    fixable: 'code',
    schema: [],
    docs: {
      url: 'https://github.com/yonycalsin/eslint-config',
    },
    messages: {
      sort: 'Run autofix to sort the exports',
    },
  },
  create: function (context) {
    return simpleImportSort.rules.exports.create(context)
  },
})
