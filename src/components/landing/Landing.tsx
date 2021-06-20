import { Heading, Flex, IconButton, VStack } from "@chakra-ui/react";
import { Link as Scroll } from "react-scroll";
import { VscChevronDown } from "react-icons/vsc";

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
      <VStack w="75%">
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
        <Heading
          fontSize="1.3rem"
          fontWeight="bold"
          mt="0"
          fontFamily="Open Sans"
        >
          Software Engineering Student at the University of Victoria
        </Heading>
      </VStack>
      <Scroll to="info" smooth={true}>
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
