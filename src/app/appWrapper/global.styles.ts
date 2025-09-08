import { Theme, css } from "@emotion/react";
import { minWidthLaptop, minWidthTablet } from "./variables";

export const global = (theme: Theme) => css`
  p {
    margin-top: 2rem;
    margin-bottom: 2rem;

    ${minWidthTablet} {
      width: 25rem;
      max-width: 90%;
    }

    ${minWidthLaptop} {
      width: 30rem;
      max-width: 90%;
    }
  }

  a,
  button,
  summary,
  input,
  [role="tab"],
  [role="tabpanel"] {
    outline-offset: 1rem;

    :focus-visible {
      @media (prefers-reduced-motion: no-preference) {
        transition: outline-offset 0.4s;
      }

      outline: solid ${theme.colours.thirty} 1.5px;
      outline-offset: 0.5em;
    }

    :focus:not(:focus-visible) {
      outline: none;

      &.focusedViaPretendKeyboard {
        @media (prefers-reduced-motion: no-preference) {
          transition: outline-offset 0.4s;
        }

        outline: solid ${theme.colours.thirty} 1.5px;
        outline-offset: 0.5em;
      }
    }
  }

  h1 {
    font-weight: 1000;
    font-size: 1.5rem !important;
    box-shadow: ${theme.boxShadow.bottom};
    letter-spacing: 0.1rem;
    padding: 1rem;
    padding-top: 6rem;
    margin: auto;
    margin-bottom: 6rem;
    margin-top: 0;
    text-align: center;

    ${minWidthTablet} {
      width: fit-content;
      padding: 1rem 3rem;
    }
  }

  h2 {
    font-weight: 1000;
    font-size: 1.5rem !important;
    box-shadow: ${theme.boxShadow.bottom};
    letter-spacing: 0.1rem;
    padding: 1rem;
    margin-bottom: 6rem;
    padding-top: 6rem;
  }

  img {
    max-width: 100%;
  }

  a {
    text-decoration-color: ${theme.colours.tenAccent};
    text-decoration-thickness: 0.1rem;
    text-underline-offset: 0.2rem;
    position: relative;
    display: inline-block;
    color: ${theme.colours.thirty};

    &::before,
    &::after {
      content: "";
      position: absolute;
      width: 0px;
      height: 0px;
      opacity: 0;

      @media (prefers-reduced-motion: no-preference) {
        transition: 0.3s ease-in-out;
      }
    }

    &::before {
      top: -0.6rem;
      left: -0.6rem;
      border-top: 1px solid ${theme.colours.thirty};
      border-left: 1px solid ${theme.colours.thirty};
    }

    &::after {
      right: -0.6rem;
      bottom: -0.6rem;
      border-bottom: 0.1rem solid ${theme.colours.thirty};
      border-right: 0.1rem solid ${theme.colours.thirty};
    }

    &:hover::before,
    &:hover::after {
      opacity: 1;
      width: calc(100% + 1.3rem);
      height: calc(100% + 1.3rem);
    }
  }

  //.button is only used to purposefully mimic accessibility issues
  button,
  .button {
    font-weight: 800;
    color: ${theme.colours.thirty};
    font-family: "Mulish", sans-serif;
    font-size: 1.0625rem;
    letter-spacing: 0.01em;
    line-height: 1.8em;
    height: fit-content;
    max-width: 100%;

    :not([role="tab"]) {
      color: ${theme.colours.sixty};
      background: ${theme.colours.tenAccentGradient};
      border-radius: 0.5rem;
      border: ${theme.colours.sixty};
      box-shadow: #f06206 0.1rem 0.2rem 0;
      border-style: solid;
      border-width: 0.1em;
      padding: 0.5rem 2rem;

      @media (prefers-reduced-motion: no-preference) {
        transition: box-shadow 0.3s, margin 0.3s, outline-offset 0.4s;
      }

      :hover,
      :focus {
        margin: 0.1rem -0.1rem -0.1rem 0.1rem;
        box-shadow: #f06206 0.1rem 0.1rem 0;
      }

      :active {
        margin: 0.2rem -0.1rem -0.2rem 0.1rem;
        box-shadow: #fbf5f2 0 0 0;
      }
    }
  }

  details summary {
    list-style: none;
    background: none;
    border-radius: 5rem;
    padding: 0 0.75rem;
    width: fit-content;
    margin: auto;
    border: solid ${theme.colours.thirty} 2px;
    font-weight: bold;
    list-style: none;

    :hover {
      outline: solid ${theme.colours.thirty} 1.5px;
      outline-offset: 0.5em;
    }

    :focus:hover {
      outline: solid ${theme.colours.thirty} 1.5px;
      outline-offset: 0.5rem !important;
    }
  }

  ul,
  li,
  a {
    max-width: 100%;
  }
`;
