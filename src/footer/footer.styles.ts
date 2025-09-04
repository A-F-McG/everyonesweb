import { css, Theme } from "@emotion/react";

export const footer = (theme: Theme) => css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 2rem 0;
  margin: 6rem 2rem 0 2rem;
  list-style: none;
  gap: 2rem;

  border-top: ${theme.colours.thirty} solid 1px;

  a {
    text-decoration: none;
  }
`;
