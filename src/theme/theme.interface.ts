import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    name: string;
    colours: {
      sixty: string;
      sixtyAccent: string;
      thirty: string;
      tenAccentGradient: string;
      tenAccent: string;
      liftedBackground: string;
      error: string;
      success: string;
      info: string;

      primary: string;
      secondary: string;
      tertiary: string;
      complementary: {
        one: string;
        two: string;
      };
      text: {
        primary: string;
        againstBackground: string;
      };
    };
    fonts: {
      body: string;
      keyboard: string;
    };
    outline: {
      outline: string;
      offset: string;
    };
    boxShadow: {
      bottom: string;
      surround: string;
      topInset: string;
    };
  }
}
