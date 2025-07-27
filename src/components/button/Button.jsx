import clsx from "clsx";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({ children, type = "button", onClick, className }) => {
  return (
    <button
      className={clsx(styles.button, className)}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired
};
