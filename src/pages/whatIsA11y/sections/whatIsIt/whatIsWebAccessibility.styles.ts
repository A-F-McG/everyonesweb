import { css, Theme } from "@emotion/react";
import { minWidthLaptop } from "../../../../app/appWrapper/variables";

export const container = (theme: Theme) => css`
  ${minWidthLaptop} {
    margin-bottom: 8rem;

    p {
      max-width: 80%;
      width: unset;
    }
  }
`;
