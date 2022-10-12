import node from './node'
import react from './react'
import imports from './rules/imports'

const config = {
  rules: {
    'typescript-react-imports': imports,
  },
  configs: {
    react,
    node,
  },
}

export default config
