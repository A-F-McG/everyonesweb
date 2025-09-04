import { css, Theme } from "@emotion/react";
import { minWidthTablet } from "../../app/appWrapper/variables";

export const nav = css`
  display: none;

  ${minWidthTablet} {
    display: block;
  }
`;

export const menuContainer = (theme: Theme) => css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 1rem 1rem;
  list-style: none;
  margin: 0 5rem 3rem 5rem;
  border-bottom: ${theme.colours.thirty} solid 0.5px;

  a {
    font-size: 1rem;
    text-decoration: none;
  }
`;
