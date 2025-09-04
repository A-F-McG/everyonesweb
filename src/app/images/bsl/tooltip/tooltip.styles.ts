import { css, Theme } from "@emotion/react";

export const infoBtn = css`
  margin-bottom: 2rem;
`;

export const details = css`
  padding-right: 1rem;
`;

export const tooltipContent = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 1rem;
  padding: 2rem 1rem;
  background: ${theme.colours.liftedBackground};
  text-align: center;
  align-items: center;
  border: ${theme.colours.thirty} solid 0.1px;

  * {
    width: fit-content;
  }
`;

export const tooltipContainer = css`
  position: relative;
  padding: 2rem 1rem 4rem 1rem;
`;

export const justForFun = (theme: Theme) => css`
  position: absolute;
  top: 1rem;
  right: 0;
  background: ${theme.colours.sixty};
  border: ${theme.colours.thirty} solid 1px;
  z-index: 1;
  padding: 0.1rem 0.5rem;
  border-radius: 3rem;
  rotate: 90;
  transform: rotate(20deg);
`;

export const revealWordContainer = css`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 3rem;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const word = css`
  position: absolute;
  width: 100%;
`;

export const revealWordBtn = css`
  background: none;
  border: none;
  border-radius: 2rem;
  margin: 0;

  @media (prefers-reduced-motion: no-preference) {
    transition: margin-top 1s ease-out;
  }
  z-index: 2;
`;

export const buttonRevealing = css`
  margin-top: -8em !important;
`;

export const revealWordDetailsNoJs = css`
  border-radius: 2rem;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  padding: 1rem;
  width: calc(100% - 2rem);
  margin-bottom: 1rem;
`;
