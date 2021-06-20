import {
  Box,
  Button,
  Collapse,
  Flex,
  Text,
  Spacer,
  Badge,
  HStack,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import { VscChevronDown, VscChevronUp } from "react-icons/vsc";
import { Work } from "../static/types";

type Props = {
  work: Work;
};

export function Dropdown({ work }: Props) {
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);
  return (
    <Box w="100%">
      <Button
        onClick={handleToggle}
        mt="1px"
        w="100%"
        py="30px"
        borderRadius="0"
        alignContent="left"
        _focus={{
          border: "none",
        }}
      >
        <Flex align="left" w="100%">
          <Text as="strong">{work.company}</Text>
          <Text mx="5px" display={{ base: "none", lg: "initial" }}>
            -
          </Text>
          <Text color="gray.900" display={{ base: "none", lg: "initial" }}>
            {work.position}
          </Text>
          <Spacer />
          {show ? <VscChevronUp /> : <VscChevronDown />}
        </Flex>
      </Button>
      <Collapse in={show}>
        <Box bg="white" px="15px">
          {work.links.map((link) => {
            return (
              <Link
                color="#EE495A"
                href={link.link}
                target="_blank"
                _focus={{
                  border: "none",
                }}
                mr="8px"
              >
                {link.name}
              </Link>
            );
          })}
          <Text pt="10px">{work.description}</Text>
          <HStack pt="3px" flexWrap="wrap">
            {work.skills.map((skills) => {
              return (
                <Badge
                  bgColor="#EE495A"
                  color="white"
                  p="5px"
                  w="fit-content"
                  h="fit-content"
                >
                  {skills}
                </Badge>
              );
            })}
          </HStack>
        </Box>
      </Collapse>
    </Box>
  );
}
