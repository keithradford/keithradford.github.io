import {
  Box,
  Button,
  Collapse,
  Flex,
  Text,
  VStack,
  Spacer,
} from "@chakra-ui/react";
import { useState } from "react";
import { VscChevronDown, VscChevronUp } from "react-icons/vsc";
import { Table } from "./components/Table";

export function Work() {
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);
  return (
    <VStack alignContent="center">
      <Box w="70%">
        <Button
          onClick={handleToggle}
          mt="1rem"
          w="100%"
          borderRadius="0"
          alignContent="left"
        >
          <Flex align="left" w="100%">
            <Text>Work experience</Text>
            <Spacer />
            {show ? <VscChevronUp /> : <VscChevronDown />}
          </Flex>
        </Button>
        <Collapse in={show}>
          <Table />
        </Collapse>
      </Box>
    </VStack>
  );
}
