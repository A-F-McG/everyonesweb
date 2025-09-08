import React from "react";
import { ImageCredit } from "./imageCredit/imageCredit.component";
import { container, intro } from "./credits.styles";
import { BslAlt } from "../app/images/bsl/bslAlt";
import { Page } from "../pages/template/page.component";

export function ImageCredits() {
  return (
    <Page title="British sign language alphabet">
      <p css={intro}>
        The images below of the BSL letters were modified by{" "}
        <i>Coloringbuddymike</i> under the{" "}
        {/* to do -add external icon to these */}
        <a
          href="https://creativecommons.org/licenses/by-sa/3.0"
          title="Creative Commons Attribution-Share Alike 3.0"
        >
          creative commons license
        </a>
      </p>

      {/* TODO add left handed toggle */}

      <div css={container}>
        {Object.keys(BslAlt).map((letter, index) => {
          return (
            // to do - change this to theme dependent
            <ImageCredit
              src={"/images/bsl/dark/" + letter + ".svg"}
              alt={BslAlt[letter]}
              key={index}
              link={
                "https://commons.wikimedia.org/wiki/File:BSL_letter_" +
                letter +
                ".svg"
              }
              caption={letter}
            />
          );
        })}
      </div>
    </Page>
  );
}
