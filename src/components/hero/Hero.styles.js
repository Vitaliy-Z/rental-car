const styles = {
  container: {
    width: "100%",
    height: "700px",
    maxWidth: "1440px",
    margin: "0 auto",
    padding: "60px 120px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "end",
    color: "var(--white)",
    backgroundImage: "url('./img/hero/hero-bg@1x.webp')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",

    "@media (min-device-pixel-ratio: 2), (min-resolution: 192dpi)": {
      backgroundImage: "url('./img/hero/hero-bg@2x.webp')"
    }
  },
  title: {
    marginBottom: "16px",
    textAlign: "center",
    fontSize: "60px",
    fontWeight: "700",
    lineHeight: "1.2"
  },
  description: {
    marginBottom: "40px",
    textAlign: "center",
    fontSize: "24px",
    fontWeight: "600",
    lineHeight: "1.33"
  },
  button: {
    width: "276px",
    height: "44px",
    fontSize: "16px",
    fontWeight: "600",
    lineHeight: "1.25",
    color: "var(--white)",
    backgroundColor: "var(--button)",
    borderRadius: "12px",
    border: "none",
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "var(--button-hover)"
    }
  }
};

export default styles;
