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
import { Project } from "../static/types";

type Props = {
  project: Project;
};

export function Dropdown({ project }: Props) {
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
          <Text as="strong">{project.name}</Text>
          <Text mx="5px">-</Text>
          <Text color="gray.900">{project.slogan}</Text>
          <Spacer />
          {show ? <VscChevronUp /> : <VscChevronDown />}
        </Flex>
      </Button>
      <Collapse in={show}>
        <Box bg="white" px="15px" pb="15px">
          {project.links.map((link) => {
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
          <Text pb="15px" pt="5px">
            {project.description}
          </Text>
          <HStack>
            {project.languages.map((language) => {
              return (
                <Badge bgColor="#EE495A" color="white" p="5px">
                  {language}
                </Badge>
              );
            })}
          </HStack>
        </Box>
      </Collapse>
    </Box>
  );
}
