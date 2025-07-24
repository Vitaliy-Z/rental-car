import { Container, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
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
      <Button
        variant="contained"
        sx={styles.button}
        onClick={() => navigate("/catalog")}
      >
        View Catalog
      </Button>
    </Container>
  );
};

export default Hero;
