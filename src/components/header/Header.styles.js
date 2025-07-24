const styles = {
  appBar: {
    backgroundColor: "var(--badges)",
    boxShadow: "none"
  },
  toolbar: {
    width: "100%",
    maxWidth: "1440px",
    margin: "0 auto",
    padding: "24px 120px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  logo: {
    width: "104px",
    height: "16px",
    svg: {
      width: "100%",
      height: "100%"
    }
  },
  linksWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "32px"
  },
  link: {
    textDecoration: "none",
    color: "var(--main)",
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "1.25"
  },
  linkActive: {
    color: "var(--button)",
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "1.25"
  }
};

export default styles;
