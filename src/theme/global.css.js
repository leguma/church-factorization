/**
 * Build default CSS based on theme tokens.
 * @param {Object} tokens Theme tokens.
 * @returns {Object} CSS
 */
export default tokens => ({
  fontSize: tokens.fontSizes.body.medium,
  fontFamily: tokens.bodyFont,
  backgroundColor: tokens.colors.primary.background,
  color: tokens.colors.primary.text,
  height: "100vh",
  boxSizing: "border-box",
  padding: "2vh",
  "&:first-child>div": {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: tokens.colors.tertiary.background,
    padding: "1rem",
    borderRadius: "1rem",
    maxHeight: "89vh",
    overflowY: "scroll",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
      width: 0,
      height: 0
    },
    a: {
      color: tokens.colors.primary.textLink,
      textDecoration: "underline"
    },
    button: {
      backgroundColor: tokens.colors.secondary.background,
      color: tokens.colors.secondary.text,
      border: "none",
      fontSize: tokens.fontSizes.body.large,
      padding: "0.5rem 1rem",
      margin: "0.5rem",
      borderRadius: "1rem",
      cursor: "pointer"
    }
  }
});
