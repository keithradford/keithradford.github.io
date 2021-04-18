import { IconButton } from "@chakra-ui/button";
import { HStack } from "@chakra-ui/layout";
import { ReactElement } from "react";
import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa";

type Props = {
  link: string;
  icon: ReactElement;
  label: string;
};

function SocialButton({ link, icon, label }: Props): JSX.Element {
  return (
    <IconButton
      id="social"
      aria-label={label}
      icon={icon}
      size="lg"
      isRound
      colorScheme="whiteAlpha"
      fontSize="30px"
      as="a"
      href={link}
      target="_blank"
      _hover={{ bgColor: "#EE495A" }}
      _focus={{
        border: "none",
      }}
    />
  );
}

export function Social() {
  return (
    <HStack spacing="25px">
      <SocialButton
        label="github"
        icon={<FaGithubAlt />}
        link="https://github.com/keithradford"
      />
      <SocialButton
        label="linkedin"
        icon={<FaLinkedinIn />}
        link="https://www.linkedin.com/in/keith-radford/"
      />
      ;
    </HStack>
  );
}
