const white = '#FFFFFF'
const black = '#161617'
const gray = '#F8F8F9'
const lighterGray = '#777777'
const darkerGray = '#333333'

const themeLight = {
  background: gray,
  secondaryBackground: lighterGray,
  body: black
}

const themeDark = {
  background: black,
  secondaryBackground: darkerGray,
  body: white
}

const theme = mode => (mode === 'dark' ? themeDark : themeLight)

export default theme
