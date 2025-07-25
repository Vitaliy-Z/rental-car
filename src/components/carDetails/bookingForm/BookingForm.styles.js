const styles = {
  container: {
    padding: "32px",
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    border: "1px solid var(--gray-light)",
    borderRadius: "10px"
  },
  formHeader: {
    display: "flex",
    flexDirection: "column",
    gap: "8px"
  },
  formHeaderTitle: {
    fontWeight: "600",
    fontSize: "20px",
    lineHeight: "1.2",
    color: "var(--main)"
  },
  formHeaderDescription: {
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "1.25",
    color: "var(--gray)"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  },
  formInput: {
    padding: "14px 20px",
    alignItems: "baseline",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "1.25",
    backgroundColor: "var(--inputs)",
    border: "none",
    borderRadius: "12px",

    "&::before, &::after": {
      borderBottom: "none"
    },

    "& input": {
      padding: 0,
      height: "auto"
    }
  },
  datePicker: {
    padding: "8px 20px",
    backgroundColor: "var(--inputs)",
    borderRadius: "12px",
    "& div": {
      padding: "0"
    },
    "& fieldset": {
      padding: 0,
      border: "none",
      outline: "none"
    }
  },
  formButton: {
    width: "156px",
    margin: "0 auto"
  }
};

export default styles;
