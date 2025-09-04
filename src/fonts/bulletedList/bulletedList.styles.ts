import { css, Theme } from "@emotion/react";

export const style = (theme: Theme) => css`
  list-style: square;
  padding-left: 1.5rem;

  li {
    padding-bottom: 0.5rem;
  }

  li::marker {
    color: ${theme.colours.primary};
  }
`;
