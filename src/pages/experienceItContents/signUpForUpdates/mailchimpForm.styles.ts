import { css, Theme } from "@emotion/react";
import { minWidthTablet } from "../../../app/appWrapper/variables";

export const form = (theme: Theme) => css`
  padding: 2rem;
  padding-bottom: 0;
  border: ${theme.colours.thirty} solid 2px;
  width: fit-content;
  border-radius: 1rem;
  margin: auto;
  margin-top: 4rem;
  max-width: calc(100% - 6rem);
`;

export const label = css`
  display: block;
  padding-bottom: 2rem;
`;

export const emailAndBtn = css`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const emailInput = (theme: Theme) => css`
  line-height: 2.5em;
  border-radius: 0.4rem;
  padding-left: 1rem;
  color: ${theme.colours.sixty};
  font-family: "Mulish", sans-serif;
  font-size: 1.0625rem;
  letter-spacing: 0.01em;
  width: 100%;

  ${minWidthTablet} {
    width: 20rem;
    max-width: calc(100% - 4rem);
  }
`;

export const messageP = css`
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const honeyPotLabel = css`
  opacity: 0;
  width: 0;
  height: 0;
`;

export const honeyPotInput = css`
  display: none;
`;
