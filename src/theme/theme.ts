import { Theme } from "@emotion/react";

export const themeLight: Theme = {
  name: "light",
  colours: {
    sixty: "ert",
    thirty: "erte",
    tenAccentGradient: "ete",
    liftedBackground: "	hsl(274, 55%, 66%, 0.1)",
    sixtyAccent: "something",
    tenAccent: "hsl(22deg 98% 49%) 50%",
    error: "blank",
    success: "blank",
    info: "blank",

    primary: "#e1bcff",
    secondary: "#ffe1bc",
    tertiary: "#bcffe1",
    complementary: {
      one: "#ffbcfc",
      two: "#c0bcff",
    },
    text: {
      primary: "black",
      againstBackground: "#f9eace",
    },
  },
  fonts: {
    body: `"Mulish", sans-serif;`,
    keyboard: "Space mono",
  },
  outline: {
    outline: "dashed black 1.5px;",
    offset: "0.5em;",
  },
  boxShadow: {
    bottom: "hsla(277, 20%, 30%, 1) 0px 7px 20px 5px",
    surround: "null",
    topInset: "null",
  },
};

export const themeDark: Theme = {
  name: "dark",
  colours: {
    sixty: "hsla(277, 100%, 5%, 1)",
    sixtyAccent: "hsla(277, 30%, 65%, 1)",
    thirty: "#BBB5BF", //"hsla(277, 20%, 90%, 1)",
    tenAccent: "hsl(29deg 78% 48%)",
    tenAccentGradient: `linear-gradient(
      325deg,
      hsl(30deg 72% 48%) 0%,
      hsl(29deg 78% 48%) 10%,
      hsl(27deg 84% 48%) 20%,
      hsl(26deg 90% 48%) 30%,
      hsl(24deg 95% 48%) 40%,
      hsl(22deg 98% 49%) 50%,
      hsl(24deg 95% 48%) 60%,
      hsl(26deg 90% 48%) 70%,
      hsl(27deg 84% 48%) 80%,
      hsl(29deg 78% 48%) 90%,
      hsl(30deg 72% 48%) 100%
    )`,
    liftedBackground: `linear-gradient(
      45deg,
      hsl(277, 70%, 25%, 0.1) 0%,
      hsl(277, 65%, 30%, 0.1) 9%,
      hsl(277, 59%, 36%, 0.1) 18%,
      hsl(277, 54%, 41%, 0.1) 27%,
      hsl(278, 50%, 45%, 0.1) 36%,
      hsl(282, 50%, 45%, 0.1) 45%,
      hsl(285, 50%, 45%, 0.1) 55%,
      hsl(289, 50%, 45%, 0.1) 64%,
      hsl(288, 47%, 49%, 0.1) 73%,
      hsl(284, 41%, 54%, 0.1) 82%,
      hsl(281, 36%, 60%, 0.1) 91%,
      hsl(277, 30%, 65%, 0.1) 100%
    )`,
    error: "hsl(7, 81%, 44%)",
    success: "hsl(140, 65%, 35%)",
    info: "hsla(185, 45%, 35%)",

    primary: "#e1bcff",
    secondary: "#ffe1bc",
    tertiary: "#bcffe1",
    complementary: {
      one: "#ffbcfc",
      two: "#c0bcff",
    },
    text: {
      primary: "black",
      againstBackground: "#f9eace",
    },
  },
  fonts: {
    body: `"Mulish", sans-serif`,
    keyboard: "Space mono",
  },
  outline: {
    outline: "dashed black 1.5px",
    offset: "0.5em;",
  },
  boxShadow: {
    bottom: "hsla(277, 20%, 30%, 1) 0px 1.8rem 1.5rem -1.5rem",
    surround: "hsla(277, 20%, 30%, 1) 0 0 1rem 0.1rem",
    topInset: "hsla(277, 20%, 30%, 1) 0px 2.3rem 1.5rem -1.5rem inset",
  },
};
