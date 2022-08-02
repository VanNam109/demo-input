import { Box, Input } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <Box w="100vw" h="var(--app-height)">
      <Box>Input</Box>
      <Box height="300px"></Box>
      <Input
        className="field"
        p="0 1rem"
        borderRadius="9px"
        fontSize="1.2rem"
        fontWeight="500"
      />
    </Box>
  );
}

export default App;
