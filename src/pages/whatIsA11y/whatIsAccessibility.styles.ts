import { css, Theme } from "@emotion/react";
import { minWidthLaptop } from "../../app/appWrapper/variables";

export const pageContent = css`
  ${minWidthLaptop} {
    margin-left: 13rem;
  }
`;

export const centerContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const heroImage = css`
  height: auto;
  margin-bottom: 3rem;

  clip-path: polygon(
    5% 0,
    95% 0,
    100% 5%,
    100% 95%,
    95% 100%,
    5% 100%,
    0 95%,
    0 5%
  );

  ${minWidthLaptop} {
    clip-path: polygon(
      2.5% 0,
      97.5% 0,
      100% 5%,
      100% 95%,
      97.5% 100%,
      2.5% 100%,
      0 95%,
      0 5%
    );

    margin-bottom: 12rem;
  }
`;

export const visibleOnMobile = css`
  ${minWidthLaptop} {
    display: none;
  }
`;

export const visibleOnDesktop = css`
  display: none;

  ${minWidthLaptop} {
    display: block;
  }
`;

export const stickyAnchorMenuContainer = css`
  ${minWidthLaptop} {
    position: sticky;
    left: 0;
    top: 10vh;
    margin: auto;
    width: 15rem;
    float: left;
    margin-left: -25rem;
  }
`;

export const anchorMenu = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  border: ${theme.colours.thirty} solid 1px;
  border-radius: 2rem;
  margin: auto;
  margin-top: 8rem;
  margin-bottom: 4rem;
  gap: 2rem;
  padding: 2rem 3rem;
  width: fit-content;

  list-style: none;

  a {
    text-decoration: underline;
    background: none;
    text-underline-offset: 0.2rem;
    border: none;
  }

  ${minWidthLaptop} {
    padding: 0rem 1rem;
    gap: 4rem;
    margin: 0;
    border: none;
    border-right: ${theme.colours.sixtyAccent} solid 1px;
    border-left: none;
    border-radius: 0;
    height: 80vh;
    justify-content: center;

    a {
      color: ${theme.colours.sixtyAccent};
    }
  }
`;

export const webringTitle = css`
  font-size: 1rem !important;
  width: fit-content;
  box-shadow: none;
  margin: auto;
  margin-bottom: 1rem;
`;

export const webringDescription = css`
  width: 80%;
  margin: auto;
  text-align: center;
`;

export const webringLinks = css`
  display: flex;
  width: 80%;
  justify-content: space-evenly;
  margin: auto;
  margin-top: 2rem;
  padding-bottom: 10rem;
  list-style: none;
  flex-wrap: wrap;
`;
