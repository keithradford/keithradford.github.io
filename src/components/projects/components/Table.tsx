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
  languages: string[];
  links: { name: string; link: string }[];
};

function Project({ name, languages, links }: Props) {
  const linkDisplay = links.map((link, i) => {
    if (i === links.length - 1) return link;
    return { ...link, name: link.name + "," };
  });

  return (
    <Tr>
      <Td>{name}</Td>
      <Td>{languages.join(", ")}</Td>
      <Td>
        {linkDisplay.map((link) => {
          return (
            <>
              <a
                href={link.link}
                target="_blank"
                rel="noreferrer"
                style={{ color: "blue", textDecoration: "underline" }}
              >
                {link.name}
              </a>
              <p> </p>
            </>
          );
        })}
      </Td>
    </Tr>
  );
}

export function Table() {
  return (
    <ChakraTable bg="white">
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Languages and Tools</Th>
          <Th>Relevant Links</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Project
          name="UVic Course Scraper"
          languages={["Node.js", "TypeScript"]}
          links={[
            {
              name: "GitHub Repo",
              link: "https://github.com/VikeLabs/uvic-course-scraper",
            },
            {
              name: "npm page",
              link:
                "https://www.npmjs.com/package/@vikelabs/uvic-course-scraper",
            },
          ]}
        />
        <Project
          name="Clockwork"
          languages={["ReactJS", "TypeScript", "Firebase"]}
          links={[
            {
              name: "GitHub Repo",
              link: "https://github.com/VikeLabs/clockwork",
            },
            { name: "Website", link: "https://clockwork.vikelabs.dev/" },
          ]}
        />
        <Project
          name="Terminal Chess"
          languages={["Java"]}
          links={[
            {
              name: "GitHub Repo",
              link: "https://github.com/keithradford/terminal-chess",
            },
          ]}
        />
      </Tbody>
    </ChakraTable>
  );
}
