import { css, Theme } from "@emotion/react";
import {
  minWidthLaptop,
  minWidthTablet,
} from "../../../app/appWrapper/variables";

export const activity = css`
  display: flex;
  flex-wrap: wrap;

  ${minWidthLaptop} {
    gap: 10rem;
  }
`;

export const speechContanier = css`
  width: 70%;
  align-self: flex-end;
`;

export const speechBubble = (theme: Theme) => css`
  border: solid 2px ${theme.colours.thirty};
  padding: 1rem;
  border-radius: 2rem;
  margin: 0;
  position: relative;

  ::after {
    content: "";
    position: absolute;
    bottom: -1rem;
    left: 40%;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 2rem 2rem 0 0;
    border-color: transparent ${theme.colours.thirty} transparent transparent;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    border-radius: 0 0 0 10px;
  }
`;

export const rabbitAndSpeechContainer = css`
  display: flex;
  flex-direction: column;
  max-width: 350px;

  ${minWidthTablet} {
    margin-right: 4rem;
  }

  ${minWidthLaptop} {
    margin-bottom: 1rem;
    max-width: 400px;
    gap: 2rem;
  }
`;

export const buttons = css`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  flex-direction: column;
  margin: auto;
  gap: 1rem;
  align-items: center;

  ${minWidthTablet} {
    align-items: flex-start;
  }

  ${minWidthLaptop} {
    gap: 3rem;
  }
`;

export const turtle = css`
  height: auto;
  align-self: flex-start;
  width: 150px;
  margin: 1rem 1rem 2rem 0;

  ${minWidthLaptop} {
    width: 230px;
  }
`;
