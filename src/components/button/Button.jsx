import { Button as MuiButton } from "@mui/material";
import styles from "./Button.styles.js";

const Button = ({ onClick, style, children }) => {
  return (
    <MuiButton
      variant="contained"
      sx={{ ...styles.button, ...style }}
      onClick={onClick}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
