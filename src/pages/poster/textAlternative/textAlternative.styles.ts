import { css } from "@emotion/react";

export const textAlternative = css`
  margin-top: 3rem;
  padding-left: 0 !important;

  h3,
  h4 {
    font-weight: normal;
    text-decoration: underline;
    text-underline-offset: 3px;
    font-size: 1.2rem;
    margin-top: 4em;
  }

  h4 {
    font-size: 1.12rem;
  }

  p {
    width: unset;
    max-width: unset;
  }

  max-width: 40rem;

  list-style: none;

  ul {
    list-style: none;
  }
`;

export const conceptContent = css`
  margin-left: 5%;
  width: 95%;
`;

export const expandBtn = css`
  margin-bottom: 1rem;
`;
