import Image from "next/image";
import React, { useEffect, useState } from "react";
import { MyImages } from "../../../app/images/myImages.component";
import { KeyboardButton } from "../../../keyboardBtn/keyboardBtn.component";
import { Tooltip } from "../../../keyboardBtn/tooltip/tooltip.component";
import { ActivityProps } from "../../activity.interface";
import {
  speechBubble,
  rabbitAndSpeechContainer,
  buttons,
  speechContanier,
  turtle,
  activity,
} from "./activity.styles";

export function UnreachableElementsActivity(props: ActivityProps) {
  const [carrotsEaten, setCarrotsEaten] = useState(1000);

  useEffect(() => {
    setCarrotsEaten(1000);
  }, [props.isAccessible]);

  return (
    <div css={activity}>
      <div css={rabbitAndSpeechContainer}>
        <div aria-live="polite" css={speechContanier}>
          <p css={speechBubble}>{rowansSpeech()}</p>
        </div>

        <Image {...MyImages.turtle} height={132} width={228.5} css={turtle} />
      </div>

      <div css={buttons}>
        <KeyboardButton
          onClick={() => setCarrotsEaten(carrotsEaten - 1)}
          text="Feed 1 carrot"
        />
        {props.isAccessible ? (
          <KeyboardButton
            onClick={() => setCarrotsEaten(carrotsEaten - 250)}
            text="Feed 250 carrots"
          />
        ) : (
          <div>
            <Tooltip>
              <div className="button">Feed 250 carrots</div>
            </Tooltip>
          </div>
        )}
        <KeyboardButton
          onClick={() => setCarrotsEaten(carrotsEaten - 5)}
          text="Feed 5 carrots"
        />
      </div>
    </div>
  );

  function rowansSpeech() {
    if (carrotsEaten <= 0)
      return "Good job! I'm stuffed. I carrot eat even one more carrot!";
    else if (carrotsEaten === 1)
      return "I'm so hungry; I could eat 1 more carrot.";
    else if (carrotsEaten === 1000)
      return "I'm so hungry; I could eat 1000 carrots!";
    else return "I'm so hungry; I could eat " + carrotsEaten + " more carrots!";
  }
}
