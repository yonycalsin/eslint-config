const DEFAULT_MODULES = [
  'typings',
  'mock-server',
  'tests',
  'services',
  'themes',
  'stores',
  'router',
  'hooks',
  'screens',
  'layouts',
  'containers',
  'components',
  'utils',
  'constants',
]

const ASSETS_MAP = {
  CSS_MODULES: '^.+\\.css$',
  ASSETS_FOLDER: '^assets',
}

const ASSETS_GROUP = Object.values(ASSETS_MAP)

const RELATIVES_GROUP = [
  // Parent imports. Put `..` last.
  '^\\.\\.(?!/?$).*\\u0000$',
  '^\\.\\./?$.*\\u0000$',
  '^\\.\\.(?!/?$)',
  '^\\.\\./?$',
  // Other relative imports. Put same-folder imports and `.` last.
  '^\\./(?=.*/)(?!/?$).*\\u0000$',
  '^\\.(?!/?$).*\\u0000$',
  '^\\./?$.*\\u0000$',
  '^\\./(?=.*/)(?!/?$)',
  '^\\.(?!/?$)',
  '^\\./?$',
]

const DEPENDENCIES_MAP = {
  REACT_TYPES: '^react\\u0000$',
  DEPENDENCIES_TYPES: `^@?\\w.*\\u0000$`,
  SIDE_EFFECTS: '^\\u0000',
  REACT: '^react$',
  DEPENDENCIES: `^@?\\w`,
}

const DEPENDENCIES_GROUP = Object.values(DEPENDENCIES_MAP)

export { ASSETS_GROUP, ASSETS_MAP, RELATIVES_GROUP, DEPENDENCIES_MAP, DEFAULT_MODULES, DEPENDENCIES_GROUP }
