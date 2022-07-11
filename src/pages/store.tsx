import { Flex, Heading, Spinner, useColorModeValue } from "@chakra-ui/react";
import { useEffect } from "react";

const Store = () => {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = "https://stores.inksoft.com/WS70777/shop/home";
    }, 1500);
  }, []);

  return (
    <Flex gridRowGap="4" direction="column" align="center">
      <Heading as="h1" size="md">
        Redirecting to store...
      </Heading>
      <Spinner size="lg" color={useColorModeValue("black", "white")} />
    </Flex>
  );
};

export default Store;
