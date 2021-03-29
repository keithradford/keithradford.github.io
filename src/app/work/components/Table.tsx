import {
  Table as ChakraTable,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

type Props = {
  name: string;
  position: string;
  experience: string[];
  date: string;
};

function Project({ name, position, experience, date }: Props) {
  return (
    <Tr>
      <Td>{name}</Td>
      <Td>{position}</Td>
      {/* <Td>{experience.join(", ")}</Td> */}
      <Td>{date}</Td>
    </Tr>
  );
}

export function Table() {
  return (
    <ChakraTable bg="white">
      <Thead>
        <Tr>
          <Th>Company</Th>
          <Th>Position</Th>
          {/* <Th>Relevant Experience</Th> */}
          <Th>Date</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Project
          name="Rooof"
          position="Integration Engineer - Co-op"
          experience={["Python", "Web-Scraping"]}
          date="January 2020 - April 2020"
        />
        <Project
          name="Change.org"
          position="Software Engineer - Co-op"
          experience={["ReactJS", "TypeScript", "Ruby on Rails"]}
          date="January 2021 - August 2021"
        />
      </Tbody>
    </ChakraTable>
  );
}
