import clsx from "clsx";
import PropTypes from "prop-types";
import styles from "./Container.module.css";

const Container = ({ pageType = "default", className, children }) => {
  if (pageType !== "default") {
    return <div className={clsx(styles.container, className)}>{children}</div>;
  }
  return (
    <section className={styles.section}>
      <div className={clsx(styles.container, className)}>{children}</div>
    </section>
  );
};

Container.propTypes = {
  pageType: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Container;
