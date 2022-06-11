import { ChakraProvider } from "@chakra-ui/react";
import Login from "./components/Login/Login";

const App = () => (
  <div>
    <ChakraProvider>
      <Login />
    </ChakraProvider>
  </div>
);

export default App;
