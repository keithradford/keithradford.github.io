import { Box } from "@chakra-ui/react";
import { Work, Projects, About, Landing } from "./components";

export function App(): JSX.Element | null {
  return (
    <Box
      bg="#353535"
      bgImage={`url(${
        process.env.PUBLIC_URL + "/assets/large_background.gif"
      })`}
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPos="center center"
    >
      <Landing />
      <Box minH="100vh" id="content">
        <About />
        <Projects />
        <Work />
      </Box>
      <footer style={{ textAlign: "center", color: "whitesmoke" }}>
        &copy; 2021 Keith Radford
      </footer>
    </Box>
  );
}
