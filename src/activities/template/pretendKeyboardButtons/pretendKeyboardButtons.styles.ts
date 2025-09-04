import { css, Theme } from "@emotion/react";

export const keyboardButtonContainer = css`
  min-width: 90%;
  display: flex;
  justify-content: center;
  margin-left: -1rem;
  width: 100%;
  padding: 1rem;
  flex-wrap: wrap;

  button {
    line-height: 3em;

    :hover {
      outline: none;
    }
  }
`;

export const keyboardBtn = (theme: Theme) => css`
  line-height: 3rem;
  box-shadow: rgb(45 35 66 / 40%) 0 2px 4px, rgb(45 35 66 / 30%) 0 7px 13px -3px,
    #d6d6e7 0 -3px 0 inset !important;
  border-style: solid !important;
  border-width: 0.1rem !important;
  padding: 0 0.5rem !important;
  border-bottom-left-radius: 15px 255px !important;
  border-bottom-right-radius: 225px 15px !important;
  border-top-left-radius: 255px 15px !important;
  border-top-right-radius: 15px 225px !important;
  margin: 0.5rem !important;
  background: hsla(277, 20%, 90%, 0.7) !important;
  font-family: "Space Mono";
  color: ${theme.colours.sixty};

  :hover,
  :focus-visible {
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
  }

  :active,
  :target {
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
  }
`;

export const enterKey = (theme: Theme) => css`
  position: relative;
  border-bottom-left-radius: 0 !important;

  :before {
    content: "";
    position: absolute;
    left: -22%;
    bottom: 0;
    width: 20%;
    height: 45%;
    background: hsla(277, 20%, 90%, 0.7);
    border-radius: 0;
    border-bottom-left-radius: 15px 255px;
    box-shadow: #d6d6e7 0 -3px 0 inset !important;
    border-style: solid !important;
    border-width: 0.1em !important;
    border-right-color: ${theme.colours.thirty};
    margin-bottom: -0.1rem;
    border-right: 0 !important;
    border-top-right-radius: 50px 20px !important;
  }
`;

export const tabKey = css`
  width: 80%;
`;

export const shiftTabKey = css`
  width: 90%;
`;
