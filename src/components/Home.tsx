import {
  Heading,
  Text,
  Flex,
  Box,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import MotionBox from "./motion/Box";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Flex direction="column" alignItems="center">
      <MotionBox
        animate={{ y: -10, opacity: 1 }}
        transition={{ repeat: 0, duration: 1 }}
        marginY={4}
        opacity={0}
      >
        <Image
          src="/team2021.jpg"
          width={400}
          height={300}
          alt="Merit Academy Cross Country Team 2021"
        />
      </MotionBox>

      <Text>
        The Merit Academy Cross Country team is based out of Springville, UT.
        Practices are Monday through Friday after school; check the{" "}
        <Box as="span" color={useColorModeValue("brand.600", "brand.200")}>
          <Link href="/workouts">workouts</Link>
        </Box>{" "}
        page for location and other details. Grades 7-12 are welcome to join!
      </Text>
      <Heading as="h2" size="md" textAlign="left" my={3} width="100%">
        Team Swag Store
      </Heading>
      <Text>
        This final order of team gear will be open until September 5th.
      </Text>
      <Box textAlign="center" marginTop={3}>
        <Link href="https://stores.inksoft.com/WS70777/shop/home" passHref>
          <Button backgroundColor={useColorModeValue("gray.300", "blue.600")}>
            Browse Team Gear
          </Button>
        </Link>
      </Box>
    </Flex>
  );
}
