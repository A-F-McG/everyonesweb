import { css, Theme } from "@emotion/react";

export const treeParent = (theme: Theme) => css`
  background: none !important;
  border: none !important;
  box-shadow: none !important;
  text-align: left !important;
  padding: 0 !important;
  margin: 0 !important;
  display: flex;
  color: ${theme.colours.thirty} !important;
  font-weight: 400 !important;
  margin-top: 1rem !important;

  :hover,
  :focus,
  :active {
    margin: 0 !important;
    margin-top: 1rem !important;
  }
`;

export const downChevron = css`
  padding-right: 1rem;
  padding-top: 0.25rem;

  svg {
    height: 1.2rem;
    width: 1.2rem;
  }
`;

export const container = css`
  /* padding-left: 2rem; */
  cursor: default;
`;
