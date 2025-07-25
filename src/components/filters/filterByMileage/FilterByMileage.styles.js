const styles = {
  container: {
    position: "relative",
    width: "34.65%"
  },
  label: {
    position: "absolute",
    top: "-9px",
    left: "15px",
    zIndex: 99,
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: 1.33
  },
  formControl: {
    display: "flex",
    flexDirection: "row",
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "1.25",
    color: "var(--main)",
    borderRadius: "12px",
    border: "none",
    overflow: "hidden"
  },

  textField: {
    padding: "12px 5px 12px 24px",
    alignItems: "baseline",
    backgroundColor: "var(--inputs)",
    border: "none"
  },
  separator: {
    width: "2px",
    backgroundColor: "var(--gray-light)"
  }
};

export default styles;
