import { useEffect } from "react";
import { Container, ThemeProvider } from "@mui/material";
import theme from "./styles/themes";
import Appbar from "./components/appbar";
import Banner from "./components/banner";
import Promotions from "./components/promotions";


function App() {

  useEffect(() => {
    document.title = "Hitchify - Home";
  }, []);

  return (

    <ThemeProvider theme={theme}>
      <Container
      maxWidth = "xl"
    >
      {
      /*
          AppBar
          Banner
          Promotions
          Title
          Services/Products
          Footer
          <Home />
      */
      }

      <Appbar />
      <Banner />  
      <Promotions />
      </Container>
  
    </ThemeProvider>
  );

}

export default App;
