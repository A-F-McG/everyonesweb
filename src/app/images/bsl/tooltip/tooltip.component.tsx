import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Emphasis } from "../../../../fonts/emphasis/emphasis.component";
import {
  infoBtn,
  justForFun,
  tooltipContainer,
  revealWordBtn,
  revealWordContainer,
  tooltipContent,
  revealWordDetailsNoJs,
  details,
  buttonRevealing,
  word,
} from "./tooltip.styles";

export function Tooltip(props: { word: string }) {
  const [clickedReveal, setClickedReveal] = useState(false);
  const [revealWord, setRevealWord] = useState(false);
  const [isUsingJs, setIsUsingJs] = useState(false);

  useEffect(() => {
    setIsUsingJs(true);
  }, []);

  //TODO - test this
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (clickedReveal) {
      timeoutId = setTimeout(() => {
        setRevealWord(true);
      }, 500);
    }

    return () => clearTimeout(timeoutId);
  }, [clickedReveal]);

  return (
    <>
      <details
        onToggle={() => {
          setRevealWord(false);
          setClickedReveal(false);
        }}
        css={details}
      >
        <div css={tooltipContainer}>
          <span css={justForFun}>Just for fun</span>
          <div css={tooltipContent}>
            <span>
              Can you figure out what this spells in British Sign Language?
            </span>

            {!isUsingJs ? (
              <details>
                <div css={revealWordDetailsNoJs}>{props.word}</div>
                <summary>Reveal the word</summary>
              </details>
            ) : (
              <div css={revealWordContainer}>
                <span aria-live="polite" css={word}>
                  {clickedReveal && <Emphasis>{props.word}</Emphasis>}
                </span>

                {!revealWord && (
                  <button
                    onClick={() => setClickedReveal(true)}
                    css={[revealWordBtn, clickedReveal && buttonRevealing]}
                  >
                    Reveal the word
                  </button>
                )}
              </div>
            )}

            <Link href={"/artWork#bsl"}>See the BSL alphabet</Link>
          </div>
        </div>
        <summary aria-label="Expand sign language tooltip" css={infoBtn}>
          i
        </summary>
      </details>
    </>
  );
}
