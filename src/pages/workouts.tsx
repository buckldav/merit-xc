import { Box, Text } from "@chakra-ui/react";

import Calendar from "components/Calendar";
import Map from "components/Map";

const Workouts = () => {
  return (
    <Box mb={8} w="full">
      <Text mb={4}>
        Check out the workouts for this week and the routes below.
      </Text>
      <Calendar />
      <Map />
    </Box>
  );
};

export default Workouts;
