const styles = {
  card: {
    width: "calc((100% - 32px*3)/4)",
    height: "424px",
    boxShadow: "none"
  },
  imgWrapper: {
    position: "relative"
  },
  img: {
    width: "100%",
    height: "268px",
    marginBottom: "16px",
    borderRadius: "14px",
    objectFit: "cover"
  },
  favoriteButton: {
    position: "absolute",
    top: "16px",
    right: "16px",
    zIndex: 99,
    width: "16px",
    height: "15px"
  },
  favoriteFillIcon: {
    color: "var(--button)"
  },
  favoriteBorderIcon: {
    color: "var(--badges)"
  },
  cardContent: {
    padding: "0px",
    height: "33%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",

    "&:last-child": {
      paddingBottom: "0px"
    }
  },
  carInfoTitle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: 1.25,
    "& span": {
      color: "var(--button)"
    }
  },
  carInfoTextWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: "8px"
  },
  carInfoText: {
    marginBottom: "auto",
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: 1.33,
    color: "var(--gray)"
  },
  readMoreButton: {
    width: "100%"
  },
  loadMoreButton: {
    display: "flex",
    margin: "0 auto",
    marginTop: "80px",
    width: "156px"
  },
  loaderWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "80px",
    height: "40px"
  }
};
export default styles;
