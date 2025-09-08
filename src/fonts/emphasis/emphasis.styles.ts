import { css, Theme } from "@emotion/react";

export const emphasis = (theme: Theme) => css`
  font-size: 1.5rem;
  color: ${theme.colours.sixtyAccent};
  padding: 0 0.5rem;
`;
