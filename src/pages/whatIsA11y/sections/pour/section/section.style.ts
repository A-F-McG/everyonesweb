import { css, Theme } from "@emotion/react";
import { minWidthWideLaptop } from "../../../../../app/appWrapper/variables";

export const stretch = css`
  align-self: stretch;
`;

export const pourSection = (theme: Theme) => css`
  align-items: center;
  justify-content: start;

  display: flex;
  flex-direction: column;

  box-shadow: ${theme.boxShadow.surround};
  border-radius: 2rem;
  margin-bottom: 4rem;

  width: calc(100% - 3.5rem);

  ${minWidthWideLaptop} {
    width: calc(40% - 4rem);
    margin: 0;
  }

  p {
    align-self: center;
    max-width: max-content;
  }

  h3 {
    font-size: 1rem;
    font-weight: normal;
    letter-spacing: 0.01rem;
    text-align: center;
    box-shadow: none;

    strong {
      font-size: 2rem;
      font-weight: bold;
      letter-spacing: 0.1rem;
      padding-left: 0.3rem;
      padding-right: 0.3rem;
      text-shadow: 0.15rem 0.1rem 0.05rem ${theme.colours.sixtyAccent};
    }
  }
`;

export const eg = css`
  margin: 0;
  padding: 0;
  position: absolute;
  top: 1.2rem;
  left: calc(50% - 1rem);
`;

export const examples = css`
  margin-top: 1rem;
  padding-left: 2rem;
  padding-right: 0.5rem;

  li {
    font-size: 1rem;
  }
`;

export const wave = css`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;

  svg {
    position: relative;
    display: block;
    width: 100%;
    height: 3rem;
    transform: rotateY(180deg);
  }
`;

export const waveShapeFill = (theme: Theme) => css`
  fill: ${theme.colours.sixty};
`;

export const waveSection = (theme: Theme) => css`
  position: relative;
  padding: 1rem 2rem 4rem 2rem;
  background: ${theme.colours.liftedBackground};
  width: calc(100% - 4rem);
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
`;
