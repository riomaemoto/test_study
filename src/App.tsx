import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/router";
import { Theme } from "./theme/theme";

function App() {
  return (
    <>
      <ChakraProvider theme={Theme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ChakraProvider>
    </>
  );
}

export default App;
