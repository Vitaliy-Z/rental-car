import { useNavigate } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import Button from "../button/Button.jsx";
import styles from "./Hero.styles.js";
const Hero = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={styles.container}>
      <Typography variant="h1" sx={styles.title}>
        Find your perfect rental car
      </Typography>
      <Typography variant="p" sx={styles.description}>
        Reliable and budget-friendly rentals for any journey
      </Typography>
      <Button style={styles.button} onClick={() => navigate("/catalog")}>
        View Catalog
      </Button>
    </Container>
  );
};

export default Hero;
