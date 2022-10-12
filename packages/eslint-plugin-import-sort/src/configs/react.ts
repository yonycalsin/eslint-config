import { ASSETS_GROUP, DEPENDENCIES_GROUP, RELATIVES_GROUP } from '../core/constants'

const GROUPS = [ASSETS_GROUP, DEPENDENCIES_GROUP, ['^~/?\\w'], RELATIVES_GROUP]

export = {
  plugins: ['simple-import-sort'],
  rules: {
    'simple-import-sort/imports': ['error', { groups: GROUPS }],
    'simple-import-sort/exports': 'error',
  },
}
