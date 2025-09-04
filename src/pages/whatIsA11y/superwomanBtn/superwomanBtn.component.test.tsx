import { ThemeProvider } from "@emotion/react";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { themeLight } from "../../../theme/theme";
import { SuperwomanBtn } from "./superwomanBtn.component";
import "@testing-library/jest-dom/extend-expect";

describe("Superwoman scroll button", () => {
  beforeEach(() =>
    render(
      <ThemeProvider theme={themeLight}>
        <SuperwomanBtn />
      </ThemeProvider>
    )
  );

  it("shouldn't show initially", () => {
    expect(screen.queryByRole("link")).toBeFalsy();
  });

  it("should not show if scrolled less than 100 from top", () => {
    fireEvent.scroll(window, { target: { scrollY: 99 } });

    expect(screen.queryByRole("link")).toBeFalsy();
  });

  it("should show if scrolled 100 from top", () => {
    fireEvent.scroll(window, { target: { scrollY: 100 } });

    expect(screen.queryByRole("link")).toBeTruthy();
  });

  it("should hide if scrolled 100 from top and then scrolled back up to 0", () => {
    fireEvent.scroll(window, { target: { scrollY: 100 } });
    fireEvent.scroll(window, { target: { scrollY: 0 } });

    expect(screen.queryByRole("link")).toBeFalsy();
  });

  it("link href should link to the top of the page", () => {
    fireEvent.scroll(window, { target: { scrollY: 100 } });

    expect(screen.getByRole("link")).toHaveAttribute("href", "#top");
  });
});
