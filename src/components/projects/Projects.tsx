import { Heading, VStack } from "@chakra-ui/react";
import { Dropdown } from "./components/Dropdown";
import { projects } from "./static";

export function Projects() {
  return (
    <VStack alignContent="center" w="70%" mx="auto" align="left" mt="10rem">
      <Heading as="h3" fontFamily="Open Sans" fontWeight="bold" color="white">
        Projects and Contributions
      </Heading>
      {projects.map((project) => {
        return <Dropdown project={project} />;
      })}
    </VStack>
  );
}
