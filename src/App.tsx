import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";
import { ResetCss } from "@/styles/reset";
import { GlobalStyle } from "@/styles/global";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ResetCss />
      <GlobalStyle />

      <div>가나다라마바사</div>
    </ThemeProvider>
  );
}

export default App;
