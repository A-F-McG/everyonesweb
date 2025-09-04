import { css, Theme } from "@emotion/react";

export const container = css`
  position: relative;
  width: fit-content;
`;

export const tooltip = (theme: Theme) => css`
  position: absolute;
  bottom: 50%;
  background: ${theme.colours.sixty};
  border-radius: 0.2rem;
  padding: 1rem;
  box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
  border: ${theme.colours.thirty} solid 0.3rem;
  width: 10rem;
  max-width: 80vw;
`;
