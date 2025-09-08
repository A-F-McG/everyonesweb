import { css, Theme } from "@emotion/react";
import { minWidthTablet } from "../../../app/appWrapper/variables";

export const menu = (theme: Theme) => css`
  left: 0.5rem;
  position: fixed;
  background: ${theme.colours.sixty};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  top: 0.5rem;

  @media (prefers-reduced-motion: no-preference) {
    transition: padding-top 0.3s, top 0.3s, left 0.3s, padding-left 0.3s,
      border-top-left-radius 0.3s, padding-right 0.3s, padding-bottom 0.3s;
  }
  z-index: 10;

  ${minWidthTablet} {
    display: none;
  }
`;

export const whiteBorder = css`
  border: solid 0.1rem white;
`;

export const blackBorder = css`
  border: solid 0.1rem black;
`;

export const open = css`
  padding-top: 0.5rem;
  top: 0;
  padding-left: 0.4rem;
  left: 0;
  border-top-left-radius: 0;
  padding-right: 2rem;
  padding-bottom: 2.75rem;

  @media (prefers-reduced-motion: no-preference) {
    transition: padding-top 0.3s, top 0.3s, left 0.3s, padding-left 0.3s,
      border-top-left-radius 0.3s, padding-right 0.3s, padding-bottom 0.3s;
  }
  border-width: 0.15rem;
  width: calc(100% - 3rem);
`;

export const linksContainer = css`
  display: flex;
  flex-direction: column;
  padding-left: 1.5rem;
  list-style: none;

  a {
    margin-top: 2rem;
  }
`;

export const undoButtonAutoStyles = (theme: Theme) => css`
  background: none !important;
  border: none !important;
  padding: 0 !important;
  border-radius: 2px !important;
  position: relative;
  margin: 0.1rem;
  box-shadow: none !important;

  width: 35px;
  height: 32px;

  :hover,
  :focus {
    outline: 4px solid ${theme.colours.thirty};
    outline-offset: 3px;
  }

  :focus:not(:focus-visible) {
    outline: none;
  }
`;

export const menuLine = (theme: Theme) => css`
  top: 7px;
  left: 5px;
  height: 3px;
  width: 26px;
  background: ${theme.colours.thirty};
  border-radius: 3px;
  position: absolute;

  @media (prefers-reduced-motion: no-preference) {
    transition: transform 0.5s 0.1s, width 0.5s 0.6s, left 0.5s 0.6s;
  }
`;

export const topMenuLine = css`
  top: 7px;
`;
export const middleMenuLine = css`
  transform: rotate(0deg);
  top: 15px;
`;

export const bottomMenuLine = css`
  top: 23px;
`;

export const crossLineOne = css`
  transform: rotate(45deg);
  top: 15px;

  @media (prefers-reduced-motion: no-preference) {
    transition: transform 1s;
  }
`;

export const crossLineTwo = css`
  transform: rotate(-45deg);
  top: 15px;

  @media (prefers-reduced-motion: no-preference) {
    transition: transform 1s;
  }
`;

export const hiddenLine = css`
  width: 0;
  left: 18px;

  @media (prefers-reduced-motion: no-preference) {
    transition: width 0.2s, left 0.2s;
  }
`;

export const navItem = css`
  width: fit-content;
`;
