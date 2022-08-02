import { Box, Input } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <Box w="100vw" h="var(--app-height)">
      <Box px="1.5rem" pb="5rem" overflow="auto" h="100%">
        <Box>Input</Box>
        <Box height="300px"></Box>
        <Box width="100%" pt="1rem" pb="3.0rem">
          <Box position="relative">
            <Input
              className="field"
              p="0 1rem"
              borderRadius="9px"
              fontSize="1.2rem"
              fontWeight="500"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
