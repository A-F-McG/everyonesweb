import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { fireEvent, screen } from "@testing-library/react";
import { KeyboardButton } from "./keyboardBtn.component";
import * as deviceDetect from "react-device-detect"; //<--important
import { renderWithTheme } from "../theme/emotionTest";

const onClickMock = jest.fn();

describe("Button that can only be clicked via keyboard", () => {
  describe("When device is desktop", () => {
    beforeEach(() => {
      Object.defineProperty(deviceDetect, "isDesktop", { get: () => true });
      renderWithTheme(<KeyboardButton onClick={onClickMock} text="text" />);
    });
    afterEach(() => jest.clearAllMocks());

    it("should not show tooltip initially", () => {
      expect(screen.queryByRole("tooltip")).toBeFalsy();
    });

    it("should show tooltip when button is clicked (if not using NVDA)", () => {
      fireEvent.mouseDown(screen.getByRole("button"), { detail: 1 });

      expect(screen.queryByRole("tooltip")).toBeTruthy();
    });

    it("should hide tooltip when button is pressed again", () => {
      fireEvent.mouseDown(screen.getByRole("button"));
      fireEvent.mouseDown(screen.getByRole("button"));

      expect(screen.queryByRole("tooltip")).toBeFalsy();
    });

    it("should hide tooltip when escape is pressed again", () => {
      fireEvent.mouseDown(screen.getByRole("button"));
      fireEvent.keyDown(screen.getByRole("button"), { key: "Escape" });

      expect(screen.queryByRole("tooltip")).toBeFalsy();
    });

    it("should hide tooltip when mouse leaves", () => {
      fireEvent.mouseDown(screen.getByRole("button"));
      fireEvent.mouseOut(screen.getByTestId("tooltipAndElementContainer"));

      expect(screen.queryByRole("tooltip")).toBeFalsy();
    });

    it("should run function when enter is pressed", () => {
      fireEvent.keyUp(screen.getByRole("button"), { key: "Enter" });

      expect(onClickMock).toBeCalled();
    });

    it("should run function when space is pressed", () => {
      fireEvent.keyUp(screen.getByRole("button"), { key: " " });

      expect(onClickMock).toBeCalled();
    });

    it("should not run function when another key is pressed", () => {
      fireEvent.keyUp(screen.getByRole("button"), { key: "Tab" });

      expect(onClickMock).not.toBeCalled();
    });

    it("should show the correct tooltip text when device is desktop", () => {
      fireEvent.mouseDown(screen.getByRole("button"), { detail: 1 });
      expect(
        screen.queryByText(
          "Clicking buttons with your mouse won't work inside this activity because we're simulating how keyboard users interact with the web. Try using tab, shift + tab and enter instead."
        )
      ).toBeTruthy();
    });

    it("should run function on mousedown if NVDA is running because apparently clicking enter triggers a mouse event", () => {
      fireEvent.mouseDown(screen.getByRole("button"), { detail: 0 });

      expect(onClickMock).toBeCalled();
    });
  });
  describe("When device is mobile or tablet", () => {
    it("should show the correct tooltip text when device is mobile", () => {
      Object.defineProperty(deviceDetect, "isDesktop", { get: () => false });
      renderWithTheme(<KeyboardButton onClick={onClickMock} text="text" />);

      fireEvent.mouseDown(screen.getByRole("button"), { detail: 1 });
      expect(
        screen.queryByText(
          "Tapping buttons with your finger won't work inside the activity because we're simulating how keyboard users interact with the web. Try using the simulated keyboard at the bottom of the screen instead."
        )
      ).toBeTruthy();
    });
  });
});
