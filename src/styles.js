import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100vh;
  }
  body {
    background: ${props => props.theme.background};
    color: ${props => props.theme.body};
    width: 100vw;
    margin: 10;
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
    outline: none;
    cursor: pointer;
  }
  pre {
    background: #333;
    white-space: pre;
    word-wrap: break-word;
    overflow: auto;
    margin: 20px 25px;
    border-radius: 4px;
    border: 1px solid #292929;
    position: relative;
  }

  pre code {
    display: block;
    padding: 15px;
    overflow-x: auto;
    font-size: 13px;
    line-height: 19px;
    color: #ffa726;
  }
`

export const ButtonSpan = styled.span`
  cursor: pointer;
`

export const StyledTextarea = styled.textarea`
  resize: none;
  outline: none;
  overflow: auto;
  height: 100px;
  border: none;
  background: ${props => props.theme.background};
  color: ${props => props.theme.body};
  font-size: 14px;
  padding: 10px;
`

export const Container = styled.div`
  display: flex;
  border: 1px solid ${props => props.theme.noteBorderColor};
  line-height: 20px;
  flex-direction: column;
  margin: 10px;
  width: 90%;
`

export const NoteHeader = styled.div`
  display: flex;
  background: ${props => props.theme.noteHeaderBackground};
  color: ${props => props.theme.noteHeaderColor};
  font-size: 18px;
  justify-content: space-between;
  padding: 10px;
`

export const NotePreviewBody = styled.div`
  padding: 10px;
`
