import { ThemeProvider } from "@emotion/react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { themeLight } from "../../../../theme/theme";
import { Tooltip } from "./tooltip.component";

describe("Bsl info tooltip", () => {
  const word = "serendipitous";

  beforeEach(() =>
    render(
      <ThemeProvider theme={themeLight}>
        <Tooltip word={word} />
      </ThemeProvider>
    )
  );

  describe("Initially", () => {
    it("should not show the tooltip content", () => {
      expect(screen.queryByRole("link")).not.toBeVisible();
    });
  });

  describe("When the i button is pressed", () => {
    beforeEach(() => {
      fireEvent.click(screen.getByText("i"));
    });

    it("should show the tooltip content", () => {
      screen.debug();
      expect(screen.queryByRole("link")).toBeVisible();
    });

    it("should not show the word", () => {
      expect(screen.queryByText(word)).toBeFalsy();
    });

    it("should link to the bsl alphabet", () => {
      expect(screen.queryByRole("link")).toHaveAttribute(
        "href",
        "/artWork#bsl"
      );
    });

    it("should reveal the word when the button is pressed", async () => {
      fireEvent.click(screen.getByRole("button", { name: "Reveal the word" }));

      await waitFor(() => expect(screen.findByText(word)).toBeTruthy());
    });

    it("should close the tooltip if the button is pressed a second time", () => {
      fireEvent.click(screen.getByText("i"));

      expect(screen.queryByRole("link")).not.toBeVisible();
    });

    it("should show the reveal button again and hide the word if the tooltip is closed and reopened", () => {
      fireEvent.click(screen.getByText("i"));

      fireEvent.click(screen.getByText("i"));

      expect(
        screen.queryByRole("button", { name: "Reveal the word" })
      ).toBeTruthy();
      expect(screen.queryByText(word)).toBeFalsy();
    });
  });
});
