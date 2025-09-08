import { Theme, css } from "@emotion/react";

export const symbol = css`
  font-family: Arial, Helvetica, sans-serif;
`;

export const accented = (theme: Theme) => css`
  color: ${theme.colours.tenAccent};
`;

export const codeSnippet = (theme: Theme) => css`
  background: hsla(277, 20%, 30%, 0.3);
  padding: 0.5rem 1rem;
  font-family: ${theme.fonts.keyboard};
  line-height: 2.7rem;
`;

export const btnContainer = css`
  display: flex;
  flex-wrap: wrap;
`;
