/* eslint-disable react/no-children-prop */
/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable react/style-prop-object */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/no-multi-comp */
/* eslint-disable react/no-danger */
/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-script-url */
/* eslint-disable react/jsx-no-leaked-render */
/* eslint-disable react/jsx-fragments */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/button-has-type */
// @ts-nocheck
import * as React from 'react'

interface Props {
  enabled: boolean
  children: React.ReactNode
}

const CounterContext = React.createContext<{ count: number }>({
  count: 0,
})

// Function component is not a function declaration
const Hello = (props: Props) => {
  const { count } = React.useContext(CounterContext)

  return (
    <div>
      {/* Must use destructuring props assignment */}
      {/* eslint-disable-next-line react/destructuring-assignment */}
      <p>{props.enabled ? 'Active' : 'Inactive'}</p>

      {/* Missing an explicit type attribute for button */}
      <button>Hola</button>

      {/* Prefer fragment shorthand over React.Fragment */}
      {/* Fragments should contain more than one child - otherwise, there’s no need for a Fragment at all. */}
      {/* Passing a fragment to an HTML element is useless */}
      <React.Fragment>Hola 1</React.Fragment>
      <React.Fragment key="hello-2">Hola 2</React.Fragment>

      {/* Potential leaked value that might cause unintentionally rendered values or rendering crashes */}
      <div>{count && <p>Count {count}</p>}</div>

      {/* The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles */}
      {/* A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML, try using dangerouslySetInnerHTML instead */}
      <a href="javascript:void(0)">Dangerous</a>

      {/* Prop spreading is forbidden */}
      <Aea {...props} />
      <img {...props} alt="Logo" />

      {[].map((thing, index) => (
        // Do not use Array index in keys
        <Hello key={index} />
      ))}

      {/* Dangerous property 'dangerouslySetInnerHTML' found */}
      <div dangerouslySetInnerHTML={{ __html: 'Hello World' }}></div>

      {/* Style prop value must be an object */}
      <div style="color: 'red'" />

      {/* Void DOM element <br /> cannot receive children. */}
      <br>Children</br>
      <img dangerouslySetInnerHTML={{ __html: 'HTML' }} alt="Logo" />

      {/* Do not pass children as props. Instead, nest children between the opening and closing tags */}
      <hr children="Children" />
    </div>
  )
}

function App() {
  const [count, setCount] = React.useState(0)

  const incrementCounter = React.useCallback(() => {
    setCount(prevCount => prevCount + 1)
  }, [])

  const counterValue = React.useMemo(() => {
    return { count, incrementCounter }
  }, [count, incrementCounter])

  return (
    // The object passed as the value prop to the Context provider changes every render. To fix this consider wrapping it in a useMemo hook
    <CounterContext.Provider value={counterValue}>
      {/* Value must be set for boolean attributes */}
      <Hello enabled>
        <p>Content</p>
      </Hello>
    </CounterContext.Provider>
  )
}

function Component() {
  // Do not define components during render. React will see a new component type on every render and destroy the entire subtree’s DOM nodes and state (https://reactjs.org/docs/reconciliation.html#elements-of-different-types). Instead, move this component definition out of the parent component “Component” and pass data as props.
  function UnstableNestedComponent() {
    return <div />
  }

  return (
    <div>
      <UnstableNestedComponent />
    </div>
  )
}

export { Hello, App, Component }
