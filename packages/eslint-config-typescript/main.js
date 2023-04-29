module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  plugins: ['@typescript-eslint'],
  ignorePatterns: ['.eslintrc.js', '.eslintrc.cjs'],
  rules: {
    'no-console': 'error',
  },
}
