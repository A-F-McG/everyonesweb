import { css, Theme } from "@emotion/react";
import {
  minWidthLaptop,
  minWidthTablet,
} from "../../../../../app/appWrapper/variables";

export const card = css`
  width: fit-content;
  border-radius: 1em;
  min-width: 12rem;
`;

export const heading = css`
  margin: 0;
  border-radius: 1em;
  text-align: center;
  font-size: 2rem;
  box-shadow: none;
  padding: 0;
  padding-top: 1rem;

  ${minWidthTablet} {
    text-align: start;
    padding: 1rem 0;
  }
`;

export const eg = css`
  width: 100%;
  padding: 0;
  text-align: center;
  max-width: unset;
  margin: 0 0 1rem 0;

  ${minWidthLaptop} {
    text-align: start;
  }
`;

export const list = (theme: Theme) => css`
  padding-right: 0.6rem;
  margin-bottom: 0;
  margin: 0;

  li::marker {
    color: ${theme.colours.complementary.one};
  }
`;

export const imageContainer = css`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 220px;
  margin-bottom: 1rem;

  ${minWidthLaptop} {
    justify-content: start;
  }
`;

export const image = css`
  border-radius: 1em;
`;
