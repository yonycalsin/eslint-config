module.exports = {
  rules: {
    'typescript-react-imports': require('./rules/typescript-react-imports'),
  },
  configs: {
    react: require('./configs/react'),
    node: require('./configs/node'),
  },
}
