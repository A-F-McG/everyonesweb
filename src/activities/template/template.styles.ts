import { css, Theme } from "@emotion/react";
import { minWidthTablet } from "../../app/appWrapper/variables";

export const description = css`
  margin: auto;
  margin-bottom: 4rem;
  padding-left: 1rem;
  padding-right: 1rem;
`;

export const tabList = css`
  justify-content: center;
  padding-top: 1rem;
  flex-wrap: wrap;
`;

export const tab = (theme: Theme) => css`
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border: ${theme.colours.sixtyAccent} 3px solid;
  border-bottom-width: 2px;
  padding: 0.6rem 1.1rem;
  margin: 0;
  outline-offset: 1rem;
  position: relative;
  background: ${theme.colours.sixty};

  :hover,
  :focus {
    text-decoration: underline;
    text-underline-offset: 2px;
  }

  ${minWidthTablet} {
    padding: 0.6rem 2.5rem;
  }

  &[aria-selected="true"] {
    border-bottom: none;
    height: 6em;
    margin-bottom: -2em;
    margin-top: -1em;
  }
`;

export const tabsContainer = (theme: Theme) => css`
  width: calc(100% - 2rem);
  display: flex;
  justify-content: center;
  margin-bottom: 5rem;
  padding-bottom: 15rem;
  padding: 6rem 1rem 15rem 1rem;
  box-shadow: ${theme.boxShadow.topInset};
`;

export const mobileKeyboard = css`
  top: calc(100% - 12rem);
  position: sticky;
  z-index: 2;
  height: 16rem;
`;

export const activity = css`
  //room for keyboard
  padding-bottom: 20rem;
`;

export const keyboardInfo = (theme: Theme) => css`
  border: ${theme.colours.info} solid 2px;
  padding: 1rem 1.5rem;
  border-radius: 1rem;
  margin: auto;
`;

//to do - make a reusable info card
export const jsNotWorking = (theme: Theme) => css`
  width: fit-content;
  max-width: 90%;
  padding: 0 1rem;
  border-radius: 1rem;
  border: ${theme.colours.info} solid 2px;
  margin: auto;
  margin-bottom: 6rem;

  span {
    display: block;
    text-align: center;
    color: ${theme.colours.info};
    font-weight: bold;
    font-size: 2rem;
    margin-top: 1rem;
  }

  p {
    max-width: unset;
  }
`;
