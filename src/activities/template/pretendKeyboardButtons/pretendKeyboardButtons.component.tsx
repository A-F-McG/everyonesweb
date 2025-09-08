import React, { useEffect, useState } from "react";
import {
  enterKey,
  keyboardBtn,
  keyboardButtonContainer,
  shiftTabKey,
  tabKey,
} from "./pretendKeyboardButtons.styles";

type interactiveElement =
  | HTMLButtonElement
  | HTMLAnchorElement
  | HTMLInputElement;

export const PretendKeys = React.forwardRef(
  (props, ref: React.RefObject<HTMLDivElement>) => {
    const [indexOfActiveElement, setIndexOfActiveElement] = useState<number>();

    useEffect(() => {
      const clickOutsideActivity = (e: any) => {
        if (ref.current && !ref.current.contains(e.target)) {
          setIndexOfActiveElement(undefined);
        }
      };

      document.addEventListener("click", clickOutsideActivity);

      return () => {
        document.removeEventListener("click", clickOutsideActivity);
      };
    }, [ref]);

    return (
      <div css={keyboardButtonContainer}>
        <div>
          <ShiftTabButton />
          <TabButton />
        </div>
        <EnterButton />
      </div>
    );

    function TabButton() {
      return (
        <button
          onMouseDown={(e) => tab(e)}
          onKeyDown={(e) => {
            if (e.key == " " || e.key == "Enter") tab(e);
          }}
          css={[keyboardBtn, tabKey]}
        >
          tab
        </button>
      );
    }

    function ShiftTabButton() {
      return (
        <button
          onMouseDown={(e) => shiftTab(e)}
          onKeyDown={(e) => {
            if (e.key == " " || e.key == "Enter") shiftTab(e);
          }}
          css={[keyboardBtn, shiftTabKey]}
        >
          shift + tab
        </button>
      );
    }

    function EnterButton() {
      return (
        <button
          onMouseDown={(e) => enter(e)}
          onKeyDown={(e) => {
            if (e.key == " " || e.key == "Enter") enter(e);
          }}
          css={[keyboardBtn, enterKey]}
        >
          enter
        </button>
      );
    }

    function tab(
      e:
        | React.MouseEvent<HTMLButtonElement, MouseEvent>
        | React.KeyboardEvent<HTMLButtonElement>
    ) {
      e.preventDefault();

      const allInteractiveElements = getAllInteractiveElements();

      if (indexOfActiveElement == undefined) {
        setFocus(0, allInteractiveElements);
      } else {
        const nextElementIndex = indexOfActiveElement + 1;

        if (nextElementIndex < allInteractiveElements.length) {
          setFocus(nextElementIndex, allInteractiveElements);
        } else {
          setFocus(0, allInteractiveElements);
        }
      }
    }

    function shiftTab(
      e:
        | React.MouseEvent<HTMLButtonElement, MouseEvent>
        | React.KeyboardEvent<HTMLButtonElement>
    ) {
      e.preventDefault();

      const allInteractiveElements = getAllInteractiveElements();

      if (indexOfActiveElement == undefined) {
        setFocus(0, allInteractiveElements);
      } else {
        const prevElementIndex = indexOfActiveElement - 1;

        if (prevElementIndex >= 0) {
          setFocus(prevElementIndex, allInteractiveElements);
        } else {
          setFocus(allInteractiveElements.length - 1, allInteractiveElements);
        }
      }
    }

    function enter(
      e:
        | React.MouseEvent<HTMLButtonElement, MouseEvent>
        | React.KeyboardEvent<HTMLButtonElement>
    ) {
      e.preventDefault();

      const allInteractiveElements = getAllInteractiveElements();

      if (indexOfActiveElement != undefined) {
        (
          allInteractiveElements[indexOfActiveElement] as interactiveElement
        ).dispatchEvent(new Event("triggeredByFakeKeyboard"));
      }
    }

    function getAllInteractiveElements() {
      return document.querySelectorAll(
        "#activity * button, #activity * a, #activity * input, #activity > button, #activity > a, #activity > input"
      );
    }

    function setFocus(index: number, elements: NodeListOf<Element>) {
      (elements[index] as interactiveElement).focus();
      elements[index].classList.add("focusedViaPretendKeyboard");
      setIndexOfActiveElement(index);
    }
  }
);

PretendKeys.displayName = "PretendKeys";
