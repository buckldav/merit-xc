import { Box } from "@chakra-ui/react";

import Calendar from "components/Calendar";
import Map from "components/Map";

const Workouts = () => {
  return (
    <Box mb={8} w="full">
      <Calendar />
      <Map />
    </Box>
  );
};

export default Workouts;
