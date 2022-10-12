import node from './node'
import react from './react'
import imports from './rules/imports'

const config = {
  configs: {
    react,
    node,
  },
  rules: {
    'typescript-react-imports': imports,
  },
}

export default config
