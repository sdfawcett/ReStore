import { ThemeProvider } from "@emotion/react"
import Catalog from "../../features/catalog/Catalog"
import Header from "./Header"
import { Container, CssBaseline, createTheme } from "@mui/material"
import { useState } from "react"

function App() {

  const [darkMode, setDarkMode] = useState(false)
  const paletteType = darkMode ? 'dark' : 'light'

  const theme = createTheme({
    palette: {
      mode: paletteType
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container>
        <Catalog />
      </Container>
    </ThemeProvider>
  )
}

export default App
