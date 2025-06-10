import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";
import { ResetCss } from "@/styles/reset";
import { GlobalStyle } from "@/styles/global";
import { useMediaQuery } from "react-responsive";
import MainLayout from "./components/system/templates/MainLayout";
import { ModalProvider } from "./context/ModalContext";

function App() {
  //mediaQuery
  const isMobile = useMediaQuery({ query: "(max-width:1023px)" });

  return (
    <ThemeProvider theme={theme}>
      <ResetCss />
      <GlobalStyle />
      <ModalProvider>
        <MainLayout isMobile={isMobile} />
      </ModalProvider>
    </ThemeProvider>
  );
}

export default App;
