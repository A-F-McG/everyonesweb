import { css, Theme } from "@emotion/react";

export const siteBasicStyles = (theme: Theme) => css`
  background: ${theme.colours.sixty};
  font-family: ${theme.fonts.body};
  font-size: 1.0625rem;
  letter-spacing: 0.01em;
  line-height: 1.8em;
  color: ${theme.colours.thirty};
  word-wrap: break-word;
`;
