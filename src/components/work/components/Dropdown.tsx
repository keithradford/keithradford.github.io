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
          <Text mx="5px">-</Text>
          <Text color="gray.900">{work.position}</Text>
          <Spacer />
          {show ? <VscChevronUp /> : <VscChevronDown />}
        </Flex>
      </Button>
      <Collapse in={show}>
        <Box bg="white" px="15px" pb="15px">
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
          <Text pb="15px" pt="5px">
            {work.description}
          </Text>
          <HStack>
            {work.skills.map((skills) => {
              return (
                <Badge bgColor="#EE495A" color="white" p="5px">
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
