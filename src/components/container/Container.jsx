import { Container as MuiContainer } from "@mui/material";
import styles from "./Container.styles.js";

const Container = ({ children }) => {
  return (
    <MuiContainer maxWidth="1440px" sx={styles.container} disableGutters>
      {children}
    </MuiContainer>
  );
};

export default Container;
