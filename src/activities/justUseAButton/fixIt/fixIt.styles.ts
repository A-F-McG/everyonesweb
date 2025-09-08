import { css, Theme } from "@emotion/react";
import { minWidthLaptop } from "../../../app/appWrapper/variables";

//TODO why is the text going bigger on mobile?
export const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin-bottom: 4rem;

    :last-of-type {
      margin-bottom: 6rem;
    }
  }
`;

export const keyboardInfo = (theme: Theme) => css`
  border: ${theme.colours.info} solid 2px;
  padding: 1rem;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  border-bottom: none;
  margin: 0 !important;
  text-align: center;
`;

export const codeEditor = (theme: Theme) => css`
  .sp-editor {
    font-family: ${theme.fonts.body};
    font-size: 1rem;
    letter-spacing: 0.01em;

    ${minWidthLaptop} {
      width: 40rem;
    }
  }

  .cm-scroller {
    line-height: 1.8em;
  }

  .sp-preview {
    height: 28.6rem;
    background: black;
    overflow: hidden;
  }

  .sp-cm {
    padding-left: 4px;
    padding-right: 4px;

    :focus-visible {
      box-shadow: inset 0 0 0 4px ${theme.colours.tenAccent};
    }
  }
`;
