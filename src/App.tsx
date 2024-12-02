import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";
import { ResetCss } from "@/styles/reset";
import { GlobalStyle } from "@/styles/global";
import { useMediaQuery } from "react-responsive";
import { H1 } from "./components/common/typhography";
import Layout from "./components/system/pages/MainLayout";

function App() {
  //mediaQuery
  const isMobile = useMediaQuery({ query: "(max-width:1023px)" });

  return (
    <ThemeProvider theme={theme}>
      <ResetCss />
      <GlobalStyle />
      <Layout />
    </ThemeProvider>
  );
}

export default App;
