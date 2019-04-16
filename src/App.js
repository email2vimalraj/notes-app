import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import { useTheme } from './ThemeContext'
import NoteContainer from './NoteContainer'

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100vh;
  }
  body {
    background: ${props => props.theme.background};
    color: ${props => props.theme.body};
    width: 100vw;
    margin: 0;
    padding: 0;
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

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

function App() {
  const themeState = useTheme()

  return (
    <>
      <GlobalStyle />
      <TitleContainer>
        <h1>Markdown Notes</h1>
        <button onClick={themeState.toggle}>+</button>
      </TitleContainer>
      <NoteContainer />
    </>
  )
}

export default App
