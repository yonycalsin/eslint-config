module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/strict',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  plugins: ['@typescript-eslint', 'import'],
  ignorePatterns: ['.eslintrc.js', '.eslintrc.cjs'],
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    'no-console': 'error',
    'padding-line-between-statements': 'off',
    '@typescript-eslint/padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: '*',
      },
      {
        blankLine: 'any',
        prev: ['import', 'case', 'default'],
        next: ['import', 'case', 'default'],
      },
    ],
    '@typescript-eslint/no-use-before-define': 'error',
    'no-useless-rename': 'error',
    'object-shorthand': 'error',
    'no-else-return': 'error',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    'import/no-duplicates': 'error',
  },
  overrides: [
    {
      files: ['index.ts'],
      rules: {
        '@typescript-eslint/padding-line-between-statements': 'off',
      },
    },
  ],
}
