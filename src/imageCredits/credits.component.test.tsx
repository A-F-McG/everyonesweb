import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { BslAlt } from "../app/images/bsl/bslAlt";
import { ImageCredits } from "./credits.component";
import { ThemeProvider } from "@emotion/react";
import { themeLight } from "../theme/theme";

describe("All artwork credits", () => {
  beforeEach(() =>
    render(
      <ThemeProvider theme={themeLight}>
        {" "}
        <ImageCredits />
      </ThemeProvider>
    )
  );

  it("should show the creative commons license and BSL artist", () => {
    expect(
      screen.getByRole("link", {
        name: "Creative Commons Attribution-Share Alike 3.0",
      })
    ).toHaveAttribute("href", "https://creativecommons.org/licenses/by-sa/3.0");

    expect(screen.getByText("Coloringbuddymike")).toBeTruthy();
  });

  it("should show everything correctly for one BSL letter", () => {
    expect(screen.getByText("B")).toHaveAttribute(
      "href",
      "https://commons.wikimedia.org/wiki/File:BSL_letter_B.svg"
    );
    expect(screen.getByAltText(BslAlt.B)).toBeTruthy();
  });
});
