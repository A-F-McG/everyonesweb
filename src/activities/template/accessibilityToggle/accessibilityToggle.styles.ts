import { css, Theme } from "@emotion/react";
import { minWidthLaptop } from "../../../app/appWrapper/variables";

export const checkBoxes = css`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const svg = css`
  stroke: rgb(0, 0, 0);
  stroke-width: 2;
  stroke-dasharray: 40;
  stroke-linecap: round;
  stroke-dashoffset: 40;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
  fill: none;
  fill-rule: nonzero;
  opacity: 1;
  transition: stroke-dashoffset 0s;
`;

export const checkboxContainer = css`
  border: solid black 1px;
  border-radius: 0.2rem;
  position: relative;
  width: 2rem;
  height: 2rem;

  input {
    opacity: 0;
    position: absolute;
  }
`;

export const fieldset = (theme: Theme) => css`
  border-color: ${theme.colours.tenAccent};
  width: fit-content;
  margin: auto;
  margin-bottom: 6rem;

  ${minWidthLaptop} {
    margin-top: 2rem;
    margin-bottom: 10rem;
    background: ${theme.colours.sixty};
  }
`;

export const redBorder = (theme: Theme) => css`
  border-color: ${theme.colours.error};
`;

export const greenBorder = (theme: Theme) => css`
  border-color: ${theme.colours.success};
`;
