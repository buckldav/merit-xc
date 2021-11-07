import { Box, Flex, Heading, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import { RiExternalLinkLine } from "react-icons/ri";

import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <>
      <Flex as="header" width="full" align="center">
        <Heading as="h1" size="md">
          <Link href="/">Merit Cross Country</Link>
        </Heading>

        <Box marginLeft="auto">
          <ThemeToggle />
        </Box>
      </Flex>
      <Flex as="nav" width="full" align="center" mt="2">
        <Box pr="3" color={useColorModeValue("brand.600", "brand.200")}>
          <Link href="/">Home</Link>
        </Box>
        <Box pr="3" color={useColorModeValue("brand.600", "brand.200")}>
          <Link href="/workouts">Workouts</Link>
        </Box>
        <Box pr="3" color={useColorModeValue("brand.600", "brand.200")}>
          <Link href="/results">Results</Link>
        </Box>
        <Box pr="3" color={useColorModeValue("brand.600", "brand.200")}>
          <a href="https://band.us/band/85784568">
            BAND{" "}
            <RiExternalLinkLine
              style={{ display: "inline-block", marginBottom: "3px" }}
            />
          </a>
        </Box>
      </Flex>
    </>
  );
};

export default Header;
