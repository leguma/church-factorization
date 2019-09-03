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
  padding: "1rem",
  div: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: tokens.colors.tertiary.background,
    padding: "1rem",
    borderRadius: "1rem",
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
