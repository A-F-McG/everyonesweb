import { css } from "@emotion/react";
import { minWidthLaptop } from "../../../../app/appWrapper/variables";

export const introContainer = css`
  ${minWidthLaptop} {
    margin-left: 2rem;
  }
`;

export const heading = css`
  text-decoration-color: #3a2ef5b0;
`;

export const singleLine = css`
  width: unset;
`;

export const pourContainer = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 6rem;
  gap: 5rem;
`;
