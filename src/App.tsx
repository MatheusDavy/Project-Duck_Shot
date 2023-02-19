import { ThemeProvider } from "styled-components"
import { MatchDataProvider } from "./context/match_datas"
import { Routers } from "./routes/router"
import { GlobalStyle } from "./styles/globa"
import { defaultTheme } from "./styles/themes/default"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <MatchDataProvider>
        <Routers />

        <GlobalStyle />
      </MatchDataProvider>
    </ThemeProvider>
  )
}

export default App
