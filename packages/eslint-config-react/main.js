module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:jsx-a11y/strict',
  ],
  plugins: ['react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/button-has-type': 'error',
    'react/destructuring-assignment': 'error',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'function-declaration',
        unnamedComponents: 'function-expression',
      },
    ],
    'react/jsx-boolean-value': ['error', 'always'],
    'react/jsx-fragments': 'error',
    'react/jsx-max-depth': [
      'error',
      {
        max: 5,
      },
    ],
    'react/jsx-no-constructed-context-values': 'error',
    'react/jsx-no-leaked-render': 'error',
    'react/jsx-no-script-url': 'error',
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-props-no-spreading': [
      'error',
      {
        html: 'ignore',
      },
    ],
    'react/no-array-index-key': 'error',
    'react/no-danger': 'error',
    'react/no-multi-comp': 'error',
    'react/no-unstable-nested-components': 'error', // optional
    'react/style-prop-object': 'error', // optional
    'react/void-dom-elements-no-children': 'error', // optional
  },
}
