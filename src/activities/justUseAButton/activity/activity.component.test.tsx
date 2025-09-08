import { ThemeProvider } from "@emotion/react";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { themeLight } from "../../../theme/theme";
import { UnreachableElementsActivity } from "./activity.component";

describe("Unreachable elements", () => {
  describe("When it's not accessible", () => {
    beforeEach(() =>
      render(
        <ThemeProvider theme={themeLight}>
          <UnreachableElementsActivity isAccessible={false} />
        </ThemeProvider>
      )
    );

    it("should start off with 1000 carrots", () => {
      expect(
        screen.queryByText("I'm so hungry; I could eat 1000 carrots!")
      ).toBeTruthy();
    });

    it("should have 999 carrots left if 1 is fed", () => {
      fireEvent.keyUp(screen.getByRole("button", { name: "Feed 1 carrot" }), {
        key: "Enter",
      });

      expect(
        screen.queryByText("I'm so hungry; I could eat 999 more carrots!")
      ).toBeTruthy();
    });

    it("should have 995 carrots left if 5 are", () => {
      fireEvent.keyUp(screen.getByRole("button", { name: "Feed 5 carrots" }), {
        key: "Enter",
      });

      expect(
        screen.queryByText("I'm so hungry; I could eat 995 more carrots!")
      ).toBeTruthy();
    });

    it("should not take away any carrots if the pretend button is pressed", () => {
      fireEvent.keyUp(screen.getByText("Feed 250 carrots"), {
        key: "Enter",
      });

      expect(
        screen.queryByText("I'm so hungry; I could eat 1000 carrots!")
      ).toBeTruthy();
    });

    describe("When it is accessible", () => {
      beforeEach(() =>
        render(
          <ThemeProvider theme={themeLight}>
            <UnreachableElementsActivity isAccessible={true} />
          </ThemeProvider>
        )
      );

      it("250 buttons should work and should have the right text when there's no carrots left", () => {
        fireEvent.keyUp(
          screen.getByRole("button", { name: "Feed 250 carrots" }),
          {
            key: "Enter",
          }
        );
        fireEvent.keyUp(
          screen.getByRole("button", { name: "Feed 250 carrots" }),
          {
            key: "Enter",
          }
        );
        fireEvent.keyUp(
          screen.getByRole("button", { name: "Feed 250 carrots" }),
          {
            key: "Enter",
          }
        );
        fireEvent.keyUp(
          screen.getByRole("button", { name: "Feed 250 carrots" }),
          {
            key: "Enter",
          }
        );

        expect(
          screen.queryByText(
            "Good job! I'm stuffed. I carrot eat even one more carrot!"
          )
        ).toBeTruthy();
      });
    });
  });
});

//test the pretend button styles
