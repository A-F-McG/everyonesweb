import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { Bsl } from "./bsl.component";
import { BslAlt } from "./bslAlt";
import { ThemeProvider } from "@emotion/react";
import { themeLight } from "../../../theme/theme";

describe("BSL letters", () => {
  it("should have the correct alt text", () => {
    render(
      <ThemeProvider theme={themeLight}>
        <Bsl word="AB" />
      </ThemeProvider>
    );

    expect(screen.queryByAltText(BslAlt.A)).toBeTruthy();
    expect(screen.queryByAltText(BslAlt.B)).toBeTruthy();
  });

  it("should have the correct src", () => {
    render(
      <ThemeProvider theme={themeLight}>
        <Bsl word="A" />{" "}
      </ThemeProvider>
    );

    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      "/images/bsl/light/A.svg"
    );
  });

  it("should have correct src even if letters are supplied in lowercase", () => {
    render(
      <ThemeProvider theme={themeLight}>
        <Bsl word="b" />{" "}
      </ThemeProvider>
    );

    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      "/images/bsl/light/B.svg"
    );
  });
});
