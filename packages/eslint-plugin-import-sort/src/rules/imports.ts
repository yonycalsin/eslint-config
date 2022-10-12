// @ts-expect-error ts(7016)
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import { modulesToGroups } from '../utils'

export default {
  meta: {
    type: 'layout',
    fixable: 'code',
    schema: [
      {
        type: 'object',
        additionalProperties: false,
        properties: {
          modules: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
        },
      },
    ],
    docs: {
      url: 'https://github.com/yonycalsin/eslint-config',
    },
    message: {
      sort: 'Run autofix to sort the imports considering the modules',
    },
  },
  create: (context: any) => {
    const options = context.options[0] || {}

    const groups = modulesToGroups(options.modules ?? undefined)

    context.options = [{ groups }]

    return simpleImportSort.rules.imports.create(context)
  },
}
