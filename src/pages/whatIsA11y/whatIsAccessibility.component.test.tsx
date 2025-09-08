import { ThemeProvider } from "@emotion/react";
import { render, screen } from "@testing-library/react";
import React from "react";
import { themeLight } from "../../theme/theme";
import { WhatIsA11y } from "./whatIsAccessibility.component";

describe("What is accessibility page", () => {
  beforeEach(() =>
    render(
      <ThemeProvider theme={themeLight}>
        <WhatIsA11y />
      </ThemeProvider>
    )
  );

  it("should have 5 anchor links", () => {
    expect(screen.getByTestId("anchorLinks").childElementCount).toBe(5);
  });
});
