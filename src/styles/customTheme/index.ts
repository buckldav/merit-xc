import { extendTheme } from "@chakra-ui/react";

import colors from "./colors";
import Button from "./components/button";
import fonts from "./fonts";
import styles from "./styles";

const customTheme = extendTheme({
  fonts,
  colors,
  components: {
    Button,
  },
  styles,
});

export default customTheme;
