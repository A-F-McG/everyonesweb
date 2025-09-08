import { css, Theme } from "@emotion/react";

export const btn = (theme: Theme) => css`
  z-index: 2;
  transform: rotate(20deg);
  height: 80px;
  width: 80px;
  margin: 20px;
  border-radius: 50% !important;
  border: none;
  position: fixed;
  bottom: 0;
  right: 0; //TODO will android users with the menu at the bottom see this?
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (prefers-reduced-motion: no-preference) {
    transition: transform 1s;
  }

  :focus-visible {
    outline-offset: 10px !important;
    outline: ${theme.colours.thirty} 2px solid;
  }

  :before {
    display: none;
  }

  :after {
    display: none;
  }

  :hover,
  :focus {
    @media (prefers-reduced-motion: no-preference) {
      transition: transform 1s;
    }
    
    transform: rotate(40deg);
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
  }
`;

export const image = css`
  border-radius: 50%;
`;
