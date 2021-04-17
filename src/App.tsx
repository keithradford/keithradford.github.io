import { Box } from "@chakra-ui/react";
import { Work, Projects, About, Landing } from "./components";

export function App(): JSX.Element | null {
  return (
    <Box bg="#353535">
      <Landing />
      <About />
      <Box minH="100vh" id="info">
        <Projects />
        <Work />
      </Box>
      <footer style={{ textAlign: "center", color: "whitesmoke" }}>
        &copy; 2021 Keith Radford
      </footer>
    </Box>
  );
}
