import { ThemeProvider } from "@emotion/react";
import { render } from "@testing-library/react";
import React, { ReactElement } from "react";
import { themeDark } from "./theme";

export function renderWithTheme(content: ReactElement) {
  return render(content, {
    wrapper: wrapperWithTheme,
  });
}

function wrapperWithTheme({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={themeDark}>{children}</ThemeProvider>;
}
