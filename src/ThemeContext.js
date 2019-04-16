import React, { useState, useContext, createContext, useEffect } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import theme from './theme'

const defaultContextData = {
  dark: false,
  toggle: () => {}
}

const ThemeContext = createContext(defaultContextData)
const useTheme = () => useContext(ThemeContext)

// custom hook
const useDarkMode = () => {
  const [themeState, setThemeState] = useState({
    dark: false,
    hasThemeLoaded: false
  })

  useEffect(() => {
    const isDark = localStorage.getItem('dark') === 'true'
    setThemeState({ ...themeState, dark: isDark, hasThemeLoaded: true })
  }, [themeState])

  return [themeState, setThemeState]
}

const ThemeProvider = ({ children }) => {
  const [themeState, setThemeState] = useDarkMode()

  if (!themeState.hasThemeLoaded) {
    return <div />
  }

  const toggle = () => {
    const dark = !themeState.dark
    localStorage.setItem('dark', JSON.stringify(dark))
    setThemeState({ ...themeState, dark })
  }

  const computedTheme = themeState.dark ? theme('dark') : theme('light')

  return (
    <StyledThemeProvider theme={computedTheme}>
      <ThemeContext.Provider
        value={{
          dark: themeState.dark,
          toggle
        }}
      >
        {children}
      </ThemeContext.Provider>
    </StyledThemeProvider>
  )
}

export { ThemeProvider, useTheme }
