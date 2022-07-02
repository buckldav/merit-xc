import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Textarea,
  Input,
  Button,
  Alert,
  AlertIcon,
  Heading,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";

export default function ContactForm() {
  const [success, setSuccess] = useState<boolean>(false);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSuccess(true);
  };

  return (
    <>
      <Heading as="h2" size="md" mt="5">
        Contact Coach Buckley
      </Heading>
      <Box color={useColorModeValue("brand.600", "brand.200")}>
        <a href="mailto:david.buckley@meritacademy.org">
          david.buckley@meritacademy.org
        </a>
      </Box>
      {success ? (
        <Alert status="success" mt="2">
          <AlertIcon />
          Form Submitted!
        </Alert>
      ) : (
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={onSubmit}
        >
          <Input type="hidden" name="form-name" value="contact" />
          <FormControl mt="2" maxW={400}>
            <FormLabel htmlFor="yourname">Your Name:</FormLabel>
            <Input type="text" name="name" id="yourname" />
          </FormControl>
          <FormControl mt="2" maxW={400}>
            <FormLabel htmlFor="youremail">Your Email:</FormLabel>
            <Input type="email" name="email" id="youremail" />
          </FormControl>
          <FormControl mt="2">
            <FormLabel htmlFor="yourmessage">Message:</FormLabel>
            <Textarea name="message" id="yourmessage"></Textarea>
          </FormControl>
          <FormControl mt="2">
            <Button type="submit">Send</Button>
          </FormControl>
        </form>
      )}
    </>
  );
}
