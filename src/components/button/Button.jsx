import { Button as MuiButton } from "@mui/material";
import styles from "./Button.styles.js";

const Button = ({
  onClick,
  style,
  variant = "contained",
  type = "button",
  children
}) => {
  const buttonStyle = {
    ...styles.button,
    ...(variant !== "contained" && styles.outlined)
  };

  return (
    <MuiButton
      variant={variant}
      sx={{ ...buttonStyle, ...style }}
      onClick={onClick}
      type={type}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
