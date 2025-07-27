import clsx from "clsx";
import icons from "./sprite.svg";
import styles from "./Icon.module.css";

export const Icon = ({ name, className }) => {
  return (
    <svg className={clsx(styles.icon, className)}>
      <use href={`${icons}#icon-${name}`} />
    </svg>
  );
};

export default Icon;
