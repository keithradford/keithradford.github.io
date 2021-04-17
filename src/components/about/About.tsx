import { Image, Center, HStack, Text, Spacer } from "@chakra-ui/react";

export function About() {
  return (
    <Center minH="fit-content" my={20}>
      <HStack w="70%">
        <Image
          src={`${process.env.PUBLIC_URL + "/assets/keith.JPG"}`}
          h="250px"
          borderRadius="50%"
        />
        <Spacer />
        <Center bg="white" borderRadius="25px" h="200px" p={5}>
          <Text>
            My name is Keith Radford and I am a 3rd year student studying
            Software Engineering at the University of Victoria.
            <br />I am 20 years old and have a passion for computers, software,
            and sports. Throughout my studies in 1st year Engineering at UVic,
            learning fundamentals of programming in the languages C and Java, my
            interest for programming grew exponentially. This lead me to pursue
            Software Engineering and begin to learn, study, and work in the
            field of computer science.
          </Text>
        </Center>
      </HStack>
    </Center>
  );
}
