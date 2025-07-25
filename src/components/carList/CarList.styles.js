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
    padding: 0
  },
  carInfoTitle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "8px",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: 1.25,
    "& span": {
      color: "var(--button)"
    }
  },
  carInfoText: {
    marginBottom: "28px",
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: 1.33,
    color: "var(--gray)"
  },
  readMoreButton: {
    borderRadius: "12px",
    textTransform: "none",
    fontWeight: 600,
    fontSize: "16px",
    background: "var(--button)",
    "&:hover": {
      background: "var(--button-hover)"
    }
  }
};
export default styles;
