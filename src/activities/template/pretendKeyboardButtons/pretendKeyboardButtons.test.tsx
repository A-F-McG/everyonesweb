import { fireEvent, screen } from "@testing-library/react";
import Link from "next/link";
import React from "react";
import { PretendKeys } from "./pretendKeyboardButtons.component";
import "@testing-library/jest-dom/extend-expect";
import { KeyboardButton } from "../../../keyboardBtn/keyboardBtn.component";
import { renderWithTheme } from "../../../theme/emotionTest";

describe("Pretend keyboard buttons", () => {
  const activityBtnMock = jest.fn();
  const activityContainerRef = React.createRef<HTMLDivElement>();

  beforeEach(() =>
    renderWithTheme(
      <>
        <button>Button before activity</button>
        <div id="activity" ref={activityContainerRef}>
          <KeyboardButton onClick={() => activityBtnMock()} text="Button" />
          <Link href="/nowhere">Link</Link>
          <input />
        </div>
        <button>Button after activity</button>
        <PretendKeys ref={activityContainerRef} />
      </>
    )
  );

  it("should focus on the first button in the activity if tab is pressed", () => {
    fireEvent.mouseDown(screen.getByRole("button", { name: "tab" }));

    expect(screen.getByRole("button", { name: "Button" })).toHaveFocus();
  });

  it("should focus on the second button in the activity if tab is pressed again", () => {
    fireEvent.mouseDown(screen.getByRole("button", { name: "tab" }));
    fireEvent.mouseDown(screen.getByRole("button", { name: "tab" }));

    expect(screen.getByRole("link")).toHaveFocus();
  });

  it("should focus back on the first button in the activity if tab is pressed when the last element is focussed", () => {
    fireEvent.mouseDown(screen.getByRole("button", { name: "tab" }));
    fireEvent.mouseDown(screen.getByRole("button", { name: "tab" }));
    fireEvent.mouseDown(screen.getByRole("button", { name: "tab" }));
    fireEvent.mouseDown(screen.getByRole("button", { name: "tab" }));

    expect(screen.getByRole("button", { name: "Button" })).toHaveFocus();
  });

  it("should focus on the first button in the activity if shift + tab is pressed and nothing is focussed yet", () => {
    fireEvent.mouseDown(screen.getByRole("button", { name: "shift + tab" }));

    expect(screen.getByRole("button", { name: "Button" })).toHaveFocus();
  });

  it("should cycle to the last element if shift + tab is pressed when the first element is foccused", () => {
    fireEvent.mouseDown(screen.getByRole("button", { name: "shift + tab" }));
    fireEvent.mouseDown(screen.getByRole("button", { name: "shift + tab" }));

    expect(screen.getByRole("textbox")).toHaveFocus();
  });

  it("should focus the previous element if shift + tab is pressed", () => {
    fireEvent.mouseDown(screen.getByRole("button", { name: "tab" }));
    fireEvent.mouseDown(screen.getByRole("button", { name: "tab" }));
    fireEvent.mouseDown(screen.getByRole("button", { name: "shift + tab" }));

    expect(screen.getByRole("button", { name: "Button" })).toHaveFocus();
  });

  it("should trigger the keyboard button function when the pretend enter button is pressed", () => {
    fireEvent.mouseDown(screen.getByRole("button", { name: "tab" }));
    fireEvent.mouseDown(screen.getByRole("button", { name: "enter" }));

    expect(activityBtnMock).toBeCalled();
  });

  it("should focus back on the first button if something outside the activity box is clicked and then tab is clicked again", () => {
    fireEvent.mouseDown(screen.getByRole("button", { name: "tab" }));
    fireEvent.mouseDown(screen.getByRole("button", { name: "tab" }));

    fireEvent.click(
      screen.getByRole("button", { name: "Button after activity" })
    );

    fireEvent.mouseDown(screen.getByRole("button", { name: "tab" }));

    expect(screen.getByRole("button", { name: "Button" })).toHaveFocus();
  });
});
