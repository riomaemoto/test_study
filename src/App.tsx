import { Button, ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Theme } from "./theme/theme";

function App() {
  return (
    <>
      <ChakraProvider theme={Theme}>
        <BrowserRouter>
          <Button colorScheme="teal">ボタン</Button>
        </BrowserRouter>
      </ChakraProvider>
    </>
  );
}

export default App;
