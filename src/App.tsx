import { Landing } from "./app/landing/Landing";
import { Projects } from "./app/projects/Projects";
import { Box } from "@chakra-ui/react";

export function App(): JSX.Element | null {
  return (
    <>
      <Landing />
      <Box minH="100vh" bg="#353535" id="info">
        <Projects />
      </Box>
    </>
  );
}
