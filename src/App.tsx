import { ChakraProvider } from "@chakra-ui/react";
import PasswordGenerator from "./PasswordGenerator";


const App: React.FC = () => {
  return (
    <ChakraProvider>
      <PasswordGenerator />
    </ChakraProvider>
  );
}

export default App;
