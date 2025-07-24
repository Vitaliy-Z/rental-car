import React from "react";
import HashLoader from "react-spinners/HashLoader";
import styles from "./Loader.styles";

const Loader = ({ size = 40 }) => {
  return (
    <div style={styles.loaderWrapper}>
      <HashLoader color="#3470ff" size={size} />
    </div>
  );
};

export default Loader;
