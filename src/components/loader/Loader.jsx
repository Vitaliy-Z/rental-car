import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import HashLoader from "react-spinners/HashLoader";
import styles from "./Loader.module.css";

const Loader = ({ size = 40, className }) => {
  return (
    <div className={clsx(styles.loaderWrapper, className)}>
      <HashLoader color="#3470ff" size={size} />
    </div>
  );
};

Loader.propTypes = {
  size: PropTypes.number,
  className: PropTypes.string
};

export default Loader;
