import React from 'react'
import { createGlobalStyle } from 'styled-components'

import { useTheme } from './ThemeContext'

const GlobalStyle = createGlobalStyle`
  body {
    background: ${props => props.theme.background};
    color: ${props => props.theme.body};
    width: 100vw;
    height: 100vh;
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  button {
    background: ${props => props.theme.background};
    color: ${props => props.theme.body};
    border: 1px solid ${props => !props.theme.background};
    border-radius: 2px;
    padding: 10px 25px;
    font-size: 14px;
  }
`

function App() {
  const themeState = useTheme()

  return (
    <>
      <GlobalStyle />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={themeState.toggle}>+</button>
    </>
  )
}

export default App
