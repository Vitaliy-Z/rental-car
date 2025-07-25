const styles = {
  container: {
    maxWidth: "924px",
    margin: "0 auto",
    marginBottom: "56px",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "stretch",
    gap: "16px"
  },
  button: {
    width: "17%",
    fontWeight: "600",
    fontSize: "16px",
    lineHeight: "1.25",
    textTransform: "capitalize",
    borderRadius: "12px",
    backgroundColor: "var(--button)",
    color: "var(--white)",
    "&:hover": {
      backgroundColor: "var(--button-hover)"
    }
  }
};

export default styles;
