import Container from "../../components/container/Container.jsx";
import Button from "../../components/button/Button.jsx";
import styles from "./HomePage.module.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/catalog");
  };

  return (
    <section className={styles.homePage}>
      <Container pageType="home" className={styles.container}>
        <div className={styles.headersWrapper}>
          <h1 className={styles.title}>Find your perfect rental car</h1>
          <h2 className={styles.subtitle}>
            Reliable and budget-friendly rentals for any journey
          </h2>
        </div>
        <Button className={styles.button} onClick={handleClick}>
          View Catalog
        </Button>
      </Container>
    </section>
  );
};

export default HomePage;
