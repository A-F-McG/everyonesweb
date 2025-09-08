import { css, Theme } from "@emotion/react";
import { minWidthLaptop, minWidthTablet } from "../../app/appWrapper/variables";

export const mainContent = css`
  padding: 0 1rem;
  width: calc(100% - 2rem);
  display: flex;
  justify-content: center;

  ${minWidthTablet} {
    padding: 0 5rem;
    width: calc(100% - 10rem);
  }

  ${minWidthLaptop} {
    padding: 0 10rem;
    width: calc(100% - 20rem);
  }
`;

export const innerFlex = css`
  width: fit-content;
  max-width: 100%;
`;
