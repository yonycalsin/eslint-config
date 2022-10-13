module.exports = {
  rules: {
    'typescript-react-imports': require('./rules/typescript-react-imports'),
    'typescript-react-exports': require('./rules/typescript-react-exports'),
  },
  configs: {
    react: require('./configs/react'),
    node: require('./configs/node'),
  },
}
