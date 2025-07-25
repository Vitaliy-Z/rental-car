import { Button as MuiButton } from "@mui/material";
import styles from "./Button.styles.js";

const Button = ({ onClick, style, variant = "contained", children }) => {
  const buttonStyle = {
    ...styles.button,
    ...(variant !== "contained" && styles.outlined)
  };

  return (
    <MuiButton
      variant={variant}
      sx={{ ...buttonStyle, ...style }}
      onClick={onClick}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
