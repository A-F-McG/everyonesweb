import "@testing-library/jest-dom/extend-expect";
import { fireEvent, screen } from "@testing-library/react";
import React from "react";
import { HamburgerMenu } from "./hamburgerMenu.component";
import { matchers } from "@emotion/jest";
import { BrowserRouter } from "react-router-dom";
import { renderWithTheme } from "../../../theme/emotionTest";

expect.extend(matchers);

describe("Hamburger menu", () => {
  beforeEach(() => {
    renderWithTheme(
      <BrowserRouter>
        <HamburgerMenu />
      </BrowserRouter>
    );
  });
  it("should not show any links initially", () => {
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });

  it("should show links when button clicked", () => {
    fireEvent.click(
      screen.getByRole("button", { name: "Main menu hamburger" })
    );

    expect(screen.queryAllByRole("link")).toHaveLength(3);
  });

  it("should change button accessible name to say that it's now a close button when openened ", () => {
    fireEvent.click(
      screen.getByRole("button", { name: "Main menu hamburger" })
    );

    expect(
      screen.queryByRole("button", { name: "Close menu" })
    ).toBeInTheDocument();
  });

  it("should hide links when button clicked again", () => {
    fireEvent.click(screen.getByRole("button"));
    fireEvent.click(screen.getByRole("button"));

    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });

  it("should set aria expanded to true when opened and to false when closed", () => {
    expect(screen.getByRole("button")).toHaveAttribute(
      "aria-expanded",
      "false"
    );

    fireEvent.click(screen.getByRole("button"));

    expect(screen.getByRole("button")).toHaveAttribute("aria-expanded", "true");
  });

  // TODO - dunno why style tests aren't being picked up

  // it("should change style when opened", () => {
  //   expect(screen.getByTestId("nav")).toHaveStyleRule("top", "0.5rem");

  //   fireEvent.click(screen.getByRole("button"));

  //   expect(screen.getByTestId("nav")).toHaveStyleRule("top", "0");
  // });
});
