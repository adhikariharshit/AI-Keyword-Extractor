import { Heading, Image, Text } from "@chakra-ui/react";
import logo from "../assets/light-bulb.png";

const Header = () => {
  return (
    <div>
      <Image
        src={logo}
        alt="logo"
        width={100}
        marginBottom="1rem"
        display="block"
        marginLeft="19rem"
      />
      <Heading color="black" marginBottom="1rem" textAlign="center">
        AI Keyword Extractor
      </Heading>
      <Text fontSize={25} textAlign="center">
        Paste in your text below and we will extract the keywords for you
      </Text>
    </div>
  );
};

export default Header;
