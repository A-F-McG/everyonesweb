import { css, Theme } from "@emotion/react";
import { minWidthLaptop, minWidthTablet } from "../../app/appWrapper/variables";

export const intro = css`
  display: flex;
  justify-content: center;
  margin-top: 6rem;

  p {
    max-width: 90%;
  }
`;

export const mouseImg = (theme: Theme) => css`
  height: auto;
  border-radius: 0.4rem;
  border: solid 1px ${theme.colours.thirty};
`;

export const titleAndDropdown = (theme: Theme) => css`
  box-shadow: ${theme.boxShadow.bottom};
  margin-bottom: 6rem;
  padding-top: 6rem;
  padding-bottom: 1rem;
  position: relative;
`;

export const sectionTitle = css`
  font-size: 1.25rem;
  box-shadow: none;
  margin: 0;
  padding: 1rem;
  width: 70%;
`;

export const activitiesList = (theme: Theme) => css`
  list-style: none;
  padding: 0.5rem;

  li::marker {
    color: ${theme.colours.tenAccent};
  }

  li {
    margin-bottom: 3rem;
  }
`;

export const comingSoon = css`
  font-style: italic;
`;

export const figure = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const caption = css`
  font-size: 0.8rem;
  max-width: 20rem;
`;

export const info = (theme: Theme) => css`
  background: ${theme.colours.liftedBackground};
  border-radius: 1rem;
  width: fit-content;
  height: fit-content;
  padding: 0.2rem 0.9rem;
  border-radius: 2rem;
  padding: 2rem;
  max-width: calc(100% - 4rem);

  ${minWidthLaptop} {
    max-width: 45rem;
  }

  h3 {
    font-size: 1.1rem;
  }
`;

export const summary = css`
  position: absolute;
  top: 7rem;

  right: 1rem;

  ${minWidthTablet} {
    right: 5%;
  }

  ${minWidthLaptop} {
    right: 15%;
  }
`;
