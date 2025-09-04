import { css } from "@emotion/react";
import { minWidthLaptop } from "../../app/appWrapper/variables";

export const centerContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${minWidthLaptop} {
    p {
      width: 50rem !important;
    }
  }
`;

export const widthUnset = css`
  width: unset;
  max-width: unset;
`;

export const mindMapOrderTip = css`
  text-align: center;
`;

export const fullSizedPosterLink = css`
  text-align: center;

  a {
    padding: 1rem;
  }
`;

export const figure = css`
  width: 100%;
  height: auto;
  margin: 0;
`;

export const loadingImageText = css`
  font-size: 2rem;
  margin-top: 4rem;
  text-align: center;
`;

export const visuallyHidden = css`
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
`;
