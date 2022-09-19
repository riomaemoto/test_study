import { Button, ChakraProvider, theme } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Button colorScheme="teal">ボタン</Button>
      </ChakraProvider>
    </>
  );
}

export default App;
