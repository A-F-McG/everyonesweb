import React, { useEffect, useRef } from "react";
import { Tooltip } from "./tooltip/tooltip.component";

export function KeyboardButton(props: {
  onClick: () => void;
  text: string;
  className?: string;
}) {
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const triggerClick = () => {
      props.onClick();
    };

    const btnRefCurrent = btnRef.current;

    btnRefCurrent?.addEventListener("triggeredByFakeKeyboard", triggerClick);

    return () =>
      btnRefCurrent?.removeEventListener(
        "triggeredByFakeKeyboard",
        triggerClick
      );
  });

  return (
    <Tooltip>
      <button
        ref={btnRef}
        className={props.className}
        onKeyUp={(event) => {
          (event.key == " " || event.key == "Enter") && props.onClick();
        }}
        onMouseDown={(e) => {
          if (e.detail == 0) {
            props.onClick();
          }
        }}
      >
        {props.text}
      </button>
    </Tooltip>
  );
}
