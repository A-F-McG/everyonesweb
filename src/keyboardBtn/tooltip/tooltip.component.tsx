import React, { useState } from "react";
import { container, tooltip } from "./tooltip.styles";
import { isDesktop } from "react-device-detect";

//This tooltip should intentionally only trigger on mouse events to let users know it's a keyboard activity
/* eslint-disable jsx-a11y/no-static-element-interactions */

export function Tooltip(props: { children: JSX.Element }) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      css={container}
      onMouseLeave={() => setShowTooltip(false)}
      data-testid="tooltipAndElementContainer"
      onBlur={() => setShowTooltip(false)}
      onMouseDown={(e) => {
        if (e.detail != 0) setShowTooltip(!showTooltip);
      }}
      onKeyDown={(e) => {
        if (e.key == "Escape") setShowTooltip(false);
      }}
    >
      {props.children}
      <div aria-live="polite">
        {showTooltip && (
          <p role="tooltip" css={tooltip}>
            {isDesktop
              ? "Clicking buttons with your mouse won't work inside this activity because we're simulating how keyboard users interact with the web. Try using tab, shift + tab and enter instead."
              : "Tapping buttons with your finger won't work inside the activity because we're simulating how keyboard users interact with the web. Try using the simulated keyboard at the bottom of the screen instead."}
          </p>
        )}
      </div>
    </div>
  );
}
