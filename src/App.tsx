import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";
import { ResetCss } from "@/styles/reset";
import { GlobalStyle } from "@/styles/global";
import { useMediaQuery } from "react-responsive";
import MainLayout from "./components/system/templates/MainLayout";

function App() {
  //mediaQuery
  const isMobile = useMediaQuery({ query: "(max-width:1023px)" });

  return (
    <ThemeProvider theme={theme}>
      <ResetCss />
      <GlobalStyle />
      <MainLayout isMobile={isMobile} />
    </ThemeProvider>
  );
}

export default App;
