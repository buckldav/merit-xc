import { Heading, Text, Flex } from "@chakra-ui/react";
import MotionBox from "./motion/Box";
import Image from "next/image";

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
        Their 2021 season is over; they will resume in July 2022.
      </Text>
    </Flex>
  );
}
