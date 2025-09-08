import { css } from "@emotion/react";
import { minWidthLaptop } from "../../../../app/appWrapper/variables";

export const visual = css`
  display: flex;
  justify-content: center;

  ${minWidthLaptop} {
    display: block;
    padding: 5rem 7rem;
  }
`;

export const graphicText = css`
  max-width: 100%;
`;
