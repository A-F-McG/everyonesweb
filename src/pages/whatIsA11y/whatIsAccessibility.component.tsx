import React from "react";
import { Page } from "../template/page.component";
import {
  anchorMenu,
  stickyAnchorMenuContainer,
  heroImage,
  centerContainer,
  pageContent,
  visibleOnDesktop,
  visibleOnMobile,
  webringDescription,
  webringLinks,
  webringTitle,
} from "./whatIsAccessibility.styles";
import { Bsl } from "../../app/images/bsl/bsl.component";
import { WhatIsWebAccessibility } from "./sections/whatIsIt/whatIsWebAccessibility.component";
import { WhoDoesItBenefit } from "./sections/whoDoesItBenefit/whoDoesItBenefit.component";
import { ClickAwayPound } from "./sections/clickAwayPound/clickAwayPound.component";
import { TheLaw } from "./sections/theLaw/theLaw.component";
import { Pour } from "./sections/pour/pour.component";
import { SuperwomanBtn } from "./superwomanBtn/superwomanBtn.component";
import { TypesOfDisability } from "./sections/typesOfDisability/typesOfDisability.component";
import { useTitle } from "../../hooks/useTitle.component";
import Image from "next/image";

export function WhatIsA11y() {
  useTitle("What is web accessibility?");

  const disabilitiesId = "typesOfDisabilities";
  const pourId = "theFourPrinciples";
  const whoId = "whoDoesItBenefit";
  const clickAwayId = "moneyDownTheDrain";
  const lawId = "theLaw";

  const disabilitiesTitle = "Types of disabilities";
  const pourTitle = "The four principles";
  const whoTitle = "Who does it benefit?";
  const clickAwayTitle = "Money down the drain";
  const lawTitle = "The law";

  const menu = (
    <nav aria-label="Page section anchors">
      <ul css={anchorMenu} data-testid="anchorLinks">
        <li>
          <a href={"#" + disabilitiesId}>{disabilitiesTitle}</a>
        </li>
        <li>
          <a href={"#" + pourId}>{pourTitle}</a>
        </li>
        <li>
          <a href={"#" + whoId}>{whoTitle}</a>
        </li>
        <li>
          <a href={"#" + clickAwayId}>{clickAwayTitle}</a>
        </li>
        <li>
          <a href={"#" + lawId}>{lawTitle}</a>
        </li>
      </ul>
    </nav>
  );

  return (
    <Page title="What is web accessibility?">
      <div css={centerContainer}>
        <Image
          src={"/images/purpleWebSquare.png"}
          alt="A wwheelchair gazes ahead at a tunnel made out of a spider's web. The path through it is foggy and unclear."
          width={512}
          height={512}
          css={[heroImage, visibleOnMobile]}
          priority
        />
        <Image
          src={"/images/purpleWebRectangle.png"}
          alt="A wwheelchair gazes ahead at a tunnel made out of a spider's web. The path through it is foggy and unclear."
          width={1024}
          height={700}
          css={[heroImage, visibleOnDesktop]}
          priority
        />
      </div>

      <div css={pageContent}>
        <WhatIsWebAccessibility />

        <div css={stickyAnchorMenuContainer}>{menu}</div>

        <TypesOfDisability
          headingId={disabilitiesId}
          heading={disabilitiesTitle}
        />

        <Bsl word="DEAF" />

        <Pour headingId={pourId} heading={pourTitle} />

        <Bsl word="POUR" />

        <WhoDoesItBenefit headingId={whoId} heading={whoTitle} />

        <Bsl word="EVERYONE" />

        <ClickAwayPound headingId={clickAwayId} heading={clickAwayTitle} />

        <Bsl word="MONEY" />

        <TheLaw headingId={lawId} heading={lawTitle} />

        <Bsl word="LAW" />

        <SuperwomanBtn />
      </div>

      <nav aria-labelledby="a11y-webring-club">
        <h2 id="a11y-webring-club" css={webringTitle}>
          a11y-webring.club
        </h2>
        <p css={webringDescription}>
          This site is a member of the{" "}
          <a rel="external" href="https://a11y-webring.club/">
            a11y-webring.club
          </a>
          . The webring is a collection of different sites belonging to people
          in the accessibility space, including both experts and people new to
          the topic.
        </p>
        <ul css={webringLinks}>
          <li>
            <a
              rel="external"
              referrerPolicy="strict-origin"
              href="https://a11y-webring.club/prev"
            >
              Previous website
            </a>
          </li>
          <li>
            <a
              rel="external"
              referrerPolicy="strict-origin"
              href="https://a11y-webring.club/random"
            >
              Random website
            </a>
          </li>
          <li>
            <a
              rel="external"
              referrerPolicy="strict-origin"
              href="https://a11y-webring.club/next"
            >
              Next website
            </a>
          </li>
        </ul>
      </nav>
    </Page>
  );
}
