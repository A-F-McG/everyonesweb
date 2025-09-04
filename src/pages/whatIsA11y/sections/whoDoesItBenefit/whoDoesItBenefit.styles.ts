import { css, Theme } from "@emotion/react";
import { minWidthTablet } from "../../../../app/appWrapper/variables";

export const container = css`
  width: 55rem;
  max-width: 100%;
  margin: auto;
  text-align: center;
`;

export const everyone = (theme: Theme) => css`
  margin-top: 1rem;
  margin-bottom: 3rem;
  display: flex;
  justify-content: center;
  font-size: 2rem;
  color: ${theme.colours.sixtyAccent};
  font-weight: bold;
`;

export const wrappedFlex = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 6rem;
  width: 100%;

  > div {
    max-width: 90%;

    ${minWidthTablet} {
      max-width: 20rem;
      gap: 6rem;
    }
  }
`;

export const listHeading = (theme: Theme) => css`
  background: ${theme.colours.sixtyAccent};
  margin: 0;
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
  padding: 1rem;
  text-align: center;
  color: ${theme.colours.sixty};
  font-weight: bold;
  font-size: 2rem;
  letter-spacing: 0.01em;
  line-height: 1.2rem;
  padding: 2rem 0.2rem;

  span {
    display: block;
    font-size: 1rem;
    padding-top: 1rem;
    line-height: 1.5rem;
  }
`;

export const listBullets = (theme: Theme) => css`
  margin: 0;
  list-style-type: none;
  padding: 0;

  ${minWidthTablet} {
    width: 32rem;
    max-width: calc(90% + 2rem);
  }

  li {
    border-bottom: ${theme.colours.sixtyAccent} solid 2px;
    padding: 3rem 1rem;

    :last-of-type {
      border: none;
    }

    span {
      display: block;
      padding-top: 1rem;
      font-size: 1rem;
      font-style: italic;
    }
  }
`;
