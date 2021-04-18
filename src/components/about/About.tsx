import {
  Image,
  Center,
  HStack,
  Text,
  Spacer,
  Link,
  VStack,
  Heading,
} from "@chakra-ui/react";
import { Social } from "./components/Social";

export function About() {
  return (
    <Center minH="fit-content" w="70%" my={20} mx="auto">
      <VStack align="left">
        <Heading as="h3" fontFamily="Open Sans" fontWeight="bold" color="white">
          About Me
        </Heading>
        <HStack>
          <Image
            src={`${process.env.PUBLIC_URL + "/assets/keith.JPG"}`}
            h="250px"
          />
          <Spacer />
          <VStack color="whitesmoke" w="75%">
            <Text>
              My name's Keith and I'm a student and software developer with an
              interest in making tools to help others. I'm from Victoria, BC and
              currently studying Software Engineering at UVic.
              <br />
              <br />I am a former hockey player who has always had an interest
              in computers and how they work. Aside from coding I enjoy fitness,
              skiing, video games, and chess among other things. <br />
              <br />
              Check me out on the various networks linked below, take a look at
              my{" "}
              <Link
                color="#EE495A"
                href={`${process.env.PUBLIC_URL + "/assets/resume.pdf"}`}
                target="_blank"
                _focus={{
                  border: "none",
                }}
              >
                resume
              </Link>
              , send me an email at{" "}
              <Link
                color="#EE495A"
                href="mailto:khr8771@gmail.com"
                _focus={{
                  border: "none",
                }}
              >
                khr8771@gmail.com
              </Link>
              , and take a look at some of my projects and work experience!
            </Text>
            <Social />
          </VStack>
        </HStack>
      </VStack>
    </Center>
  );
}
