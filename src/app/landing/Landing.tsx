import { Heading, Flex, IconButton, HStack, Spacer } from "@chakra-ui/react";
import { Link as Scroll } from "react-scroll";
import { VscChevronDown } from "react-icons/vsc";
import { FaLinkedinIn, FaGithubAlt } from "react-icons/fa";

export function Landing(): JSX.Element | null {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      h="100vh"
      bgRepeat="no-repeat"
      bgSize="cover"
      bgImg={`url(${process.env.PUBLIC_URL + "/assets/background.jpg"})`}
      flexDirection="column"
      color="white"
    >
      <HStack mt="1rem">
        <Heading
          as="h1"
          fontSize="4.5rem"
          fontFamily="Open Sans"
          fontWeight="bold"
          mb="1rem"
          mr="1rem"
        >
          Keith Radford
        </Heading>
        <IconButton
          id="social"
          aria-label="github"
          icon={<FaGithubAlt />}
          size="lg"
          isRound
          colorScheme="whiteAlpha"
          fontSize="30px"
          as="a"
          href="https://github.com/keithradford"
          target="_blank"
        />
        <Spacer />
        <IconButton
          id="social"
          aria-label="linkedin"
          icon={<FaLinkedinIn />}
          size="lg"
          isRound
          colorScheme="whiteAlpha"
          fontSize="30px"
          as="a"
          href="https://www.linkedin.com/in/keith-radford/"
          target="_blank"
        />
      </HStack>
      <Heading
        fontSize="1.3rem"
        fontWeight="bold"
        mt="0"
        fontFamily="Open Sans"
      >
        Software Engineering Student at the University of Victoria
      </Heading>
      <Scroll to="projects" smooth={true}>
        <IconButton
          mt="2.3rem"
          aria-label="scroll-button"
          icon={<VscChevronDown />}
          size="lg"
          isRound
          colorScheme="whiteAlpha"
          id="down"
          fontSize="30px"
        />
      </Scroll>
    </Flex>
  );
}
