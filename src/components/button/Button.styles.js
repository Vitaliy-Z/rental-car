const styles = {
  button: {
    padding: "12px",
    textTransform: "none",
    background: "var(--button)",
    fontWeight: 600,
    fontSize: "16px",
    lineHeight: 1.25,
    color: "var(--white)",
    borderRadius: "12px",
    boxShadow: "none",

    "&:disabled": {
      background: "var(--gray)",
      color: "var(--white)"
    },

    "&:hover": {
      background: "var(--button-hover)",
      boxShadow: "none"
    }
  }
};
export default styles;
