export default {
  plugins: ['simple-import-sort'],
  rules: {
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^\\u0000'],
          ['^react', '^@?\\w'],
          ['^~/?\\w'],
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          ['^.+\\.css$'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',
  },
}
