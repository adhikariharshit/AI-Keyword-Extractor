import { useState } from "react";
import { Textarea, Button, useToast } from "@chakra-ui/react";

const TextInput = ({ extractKeyword }) => {
  const [text, setText] = useState("");

  const toast = useToast();

  const submitText = () => {
    if (text === "") {
      toast({
        title: "Text field is empty",
        description: "Please enter some text to extract keyword",
        status: "error",
        duration: 1500,
        isClosable: false,
      });
    } else {
      extractKeyword(text);
    }
  };
  return (
    <>
      <Textarea
        bg="white"
        color="black"
        marginTop={5}
        padding={4}
        height={150}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button
        bg="black"
        color="white"
        marginTop={3}
        width="100%"
        onClick={submitText}
        _hover={{ bg: "blue.600" }}
      >
        Extract Keywords
      </Button>
    </>
  );
};

export default TextInput;
