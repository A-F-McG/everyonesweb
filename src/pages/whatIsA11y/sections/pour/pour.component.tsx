import Image from "next/image";
import React from "react";
import { Emphasis } from "../../../../fonts/emphasis/emphasis.component";
import { SectionWithAnchorLinkInterface } from "../sectionInterface";
import * as styles from "./pour.styles";
import { PourSection } from "./section/section.component";

export function Pour(props: SectionWithAnchorLinkInterface) {
  return (
    <>
      <h2 css={styles.heading} id={props.headingId}>
        {props.heading}
      </h2>

      <div css={styles.introContainer}>
        <p css={styles.singleLine}>
          Because it's not always understood nor prioritised, web accessibility
          is often poor.
        </p>
        <p css={styles.singleLine}>
          But it should be <Emphasis>POUR</Emphasis>: perceivable, operable,
          understandable and robust.
        </p>
      </div>

      <div css={styles.pourContainer}>
        <PourSection
          title={
            <>
              Can everyone <strong>perceive</strong> the information on the
              site, even if one of their senses is impaired?
            </>
          }
          examples={[
            "Do videos have captions?",
            "Is everything on the page read aloud properly by screen readers to blind users?",
          ]}
        />

        <PourSection
          title={
            <>
              Can everyone <strong>operate</strong> the site?
            </>
          }
          examples={[
            "Can you get to buttons by pressing tab?",
            "When using speech recognition software, will saying 'click start' click a start button?",
          ]}
        />

        <PourSection
          title={
            <>
              Can everyone <strong>understand</strong> the contents of the site?
            </>
          }
          examples={[
            "Is complicated language used unnecessarily?",
            "Does the menu layout change unexpectedly between pages?",
          ]}
        />

        <PourSection
          title={
            <>
              <strong>Robust:</strong> can everyone view the site, no matter
              what they're viewing it with?
            </>
          }
          examples={[
            "Does the site work on different browsers?",
            "Does the site work on different types of phones?",
          ]}
        />
      </div>
    </>
  );
}
