import {
  Container,
  Image,
  HStack,
  Text,
  Heading,
  Box,
  VStack,
  Flex,
} from "@chakra-ui/react";

export function Landing(): JSX.Element | null {
  return (
    <Container
      maxW="100%"
      h="100vh"
      bg="black"
      bgImg={`url(${process.env.PUBLIC_URL + "/assets/background.jpg"})`}
      bgRepeat="no-repeat"
      bgSize="cover"
      centerContent
    >
      <Flex h="100vh" alignItems="center" justifyContent="center">
        <HStack
          direction="row"
          spacing="24px"
          pr="4"
          bg="rgba(255, 255, 255, 0.80)"
        >
          <Image
            boxSize="200px"
            objectFit="cover"
            src="https://i.ibb.co/q0KgLvp/keith.png"
            alt="Keith Radford"
          />
          <VStack alignItems="left" w="430px" justifyContent="center">
            <Heading size="4xl" fontFamily="VT323" flexGrow={1}>
              keith radford
            </Heading>
            <Heading size="xl" fontFamily="VT323">
              software engineering student
            </Heading>
          </VStack>
        </HStack>
      </Flex>
    </Container>
  );
}
