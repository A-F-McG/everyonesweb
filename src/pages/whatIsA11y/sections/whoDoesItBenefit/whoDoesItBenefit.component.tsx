import React from "react";
import { SectionWithAnchorLinkInterface } from "../sectionInterface";
import {
  container,
  everyone,
  listBullets,
  listHeading,
  wrappedFlex,
} from "./whoDoesItBenefit.styles";

export function WhoDoesItBenefit(props: SectionWithAnchorLinkInterface) {
  return (
    <>
      <h2 id={props.headingId}>{props.heading}</h2>
      <div css={container}>
        <span css={everyone}>Everyone!</span>
        <div css={wrappedFlex}>
          <div>
            <h3 css={listHeading}>
              Users
              <span> with a:</span>
            </h3>
            <ul css={listBullets}>
              <li>
                disability
                <span>e.g. paralysis or blindness</span>
              </li>
              <li>
                temporary impairment <span>e.g. a broken limb</span>
              </li>
              <li>
                situational limitation
                <span>e.g. being somewhere with poor lighting</span>
              </li>
              <li>
                desire to have enhanced user experiences
                <span>e.g. using captions to practise a new language</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 css={listHeading}>
              Company owners
              <span>who want their website to have:</span>
            </h3>
            <ul css={listBullets}>
              <li>a positive reputation</li>
              <li>better SEO</li>
              <li>a slick user experience</li>
              <li>more users</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
