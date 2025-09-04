import { css, Theme } from "@emotion/react";
import { minWidthLaptop } from "../../../app/appWrapper/variables";

export const tick = (theme: Theme) => css`
  font-weight: 1000;
  color: ${theme.colours.success};
  margin-right: 1rem;
  font-size: 1.5rem;
`;

export const cross = (theme: Theme) => css`
  font-weight: 400;
  color: ${theme.colours.error};
  margin-right: 1.2rem;
  font-size: 1.5rem;
`;

export const tldr = css`
  padding-top: 0;
  margin-bottom: 0;
`;

export const tldrP = css`
  margin-bottom: 2rem;
  box-shadow: none;
  font-weight: normal;
  margin-top: 4rem;
  font-size: 1.0625rem;
`;

export const problemContainer = css`
  p {
    ${minWidthLaptop} {
      width: 41rem;
    }
  }
`;

export const table = (theme: Theme) => css`
  margin-top: 4rem;
  margin-bottom: 8rem;
  padding: 1rem 0.5rem;
  background: ${theme.colours.liftedBackground};
  width: calc(100% - 0.6rem);

  caption {
    border: ${theme.colours.sixtyAccent} solid 3px;
    padding: 1rem;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
  }

  tbody th {
    text-align: right;
  }

  td,
  th {
    font-weight: normal;
    padding: 1rem 0.1rem;
  }

  tr {
    text-align: center;
  }

  td {
    font-size: 1.3rem;
  }
`;

export const red = (theme: Theme) => css`
  color: ${theme.colours.error};
`;

export const green = (theme: Theme) => css`
  color: ${theme.colours.success};
`;

export const smallerCol = css`
  width: 30%;
`;
