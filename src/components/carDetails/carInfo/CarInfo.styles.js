const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "68px",
    color: "var(--main)"
  },
  carInfoHeaderWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "32px"
  },

  carInfoHeaderTitle: {
    marginBottom: "8px",
    fontWeight: "600",
    fontSize: "24px",
    lineHeight: "1.33",
    "& span": {
      marginLeft: "16px",
      fontWeight: "500",
      fontSize: "16px",
      lineHeight: "1.25",
      color: "var(--gray)"
    }
  },
  carInfoHeaderLocationWrapper: {
    marginBottom: "16px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "16px",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "1.25"
  },
  carInfoHeaderPrice: {
    fontWeight: "600",
    fontSize: "24px",
    lineHeight: "1.33",
    color: "var(--button)"
  },

  titleBlock: {
    marginBottom: "20px",
    fontWeight: "600",
    fontSize: "20px",
    lineHeight: "1.2"
  },

  detailsList: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "1.25"
  },
  detailsItem: {
    display: "flex",
    alignItems: "center",
    gap: "8px"
  }
};

export default styles;
