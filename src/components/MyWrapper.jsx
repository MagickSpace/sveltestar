import { useTheme } from './_ThemeProvider'

export default () => {
  const theme = useTheme()
  return <p>The theme is "{theme}"</p>
}
