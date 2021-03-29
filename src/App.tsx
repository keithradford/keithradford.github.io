import { Landing } from "./app/landing/Landing";
import { Projects } from "./app/projects/Projects";
import { Work } from "./app/work/Work";
import { Box } from "@chakra-ui/react";

export function App(): JSX.Element | null {
  return (
    <>
      <Landing />
      <Box minH="100vh" bg="#353535" id="info">
        <Projects />
        <Work />
      </Box>
    </>
  );
}
