import React, { useState } from "react";
import { themeDark, themeLight } from "../../theme/theme";
import { Global, ThemeProvider } from "@emotion/react";
import { AppContext } from "../appContext/context.component";
import { global } from "./global.styles";
import { MainMenu } from "../../mainMenu/desktop/mainMenu.component";
import { Footer } from "../../footer/footer.component";
import { siteBasicStyles } from "./appWrapper.styles";
import { HamburgerMenu } from "../../mainMenu/mobile/hamburgerMenu/hamburgerMenu.component";

export default function AppWrapper(props: { children: JSX.Element }) {
  const [theme, setTheme] = useState(themeDark);

  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      <ThemeProvider theme={theme}>
        <Global styles={global} />
        <div css={siteBasicStyles}>
          <HamburgerMenu />
          <MainMenu />
          <main>{props.children}</main>
          <footer>
            <Footer />
          </footer>
        </div>
      </ThemeProvider>
    </AppContext.Provider>
  );
}
