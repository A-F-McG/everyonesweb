import { css } from "@emotion/react";
import { minWidthLaptop } from "../../app/appWrapper/variables";

export const centerContainer = css`
  display: flex;
  justify-content: center;
`;

export const contentContainer = css`
  max-width: 90%;
  margin-bottom: 16rem;

  ${minWidthLaptop} {
    max-width: 70%;
  }

  h1 {
    margin-bottom: 3rem;
  }

  h3 {
    font-weight: 600 !important;
    margin-top: 4rem;
  }

  p {
    min-width: unset;
    max-width: unset;
    width: unset;
    margin-bottom: 1rem !important;
  }
`;

export const skills = css`
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
`;

export const quickLinks = css`
  display: flex;
  justify-content: center;

  p {
    margin-bottom: 0;
  }

  ul {
    padding-left: 1rem;

    li {
      padding-top: 0.25rem;
    }
  }
`;
