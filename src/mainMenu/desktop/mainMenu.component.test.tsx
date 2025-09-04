import { screen } from "@testing-library/react";
import React from "react";
import { renderWithTheme } from "../../theme/emotionTest";
import { MainMenu } from "./mainMenu.component";

describe("Main menu at the top", () => {
  it("shouldn't be visible on smaller screens", () => {
    Object.defineProperty(window, "innerWidth", {
      value: "28rem",
    });

    renderWithTheme(<MainMenu />);

    expect(
      screen.queryByRole("link", { name: "What is web accessibility?" })
    ).toBeFalsy();
  });

  it("should be visible on bigger screens", () => {
    Object.defineProperty(window, "innerWidth", {
      value: "29rem",
    });

    renderWithTheme(<MainMenu />);

    expect(
      screen.queryByRole("link", { name: "What is web accessibility?" })
    ).toBeFalsy();
  });
});
