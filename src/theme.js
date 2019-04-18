const white = '#FFFFFF'
const black = '#161617'
const gray = '#F8F8F9'

const themeLight = {
  background: gray,
  noteHeaderBackground: black,
  noteHeaderColor: white,
  noteBodyBackground: white,
  noteBodyColor: black,
  noteBorderColor: black,
  body: black
}

const themeDark = {
  background: black,
  noteHeaderBackground: white,
  noteHeaderColor: black,
  noteBodyBackground: black,
  noteBodyColor: white,
  noteBorderColor: white,
  body: white
}

const theme = mode => (mode === 'dark' ? themeDark : themeLight)

export default theme
