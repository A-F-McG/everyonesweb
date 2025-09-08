import { css, Theme } from "@emotion/react";

export const cardsContainer = (theme: Theme) => css`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-evenly;
  background: ${theme.colours.liftedBackground};
  border-radius: 1rem;
  margin-top: 6rem;
  padding: 3rem 0;
  border: ${theme.colours.thirty} solid 0.1px;
  padding: 2rem;
`;

export const twoCards = css`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-around;
  width: 100%;

  @media (min-width: 100rem) {
    width: unset;
  }
`;

export const heading = css`
  text-decoration-color: #ffc94987;
`;
