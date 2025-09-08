import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Emphasis } from "../../fonts/emphasis/emphasis.component";
import { useTitle } from "../../hooks/useTitle.component";
import { Page } from "../template/page.component";
import {
  activitiesList,
  caption,
  comingSoon,
  figure,
  intro,
  info,
  mouseImg,
  sectionTitle,
  titleAndDropdown,
  summary,
} from "./experienceItContents.styles";
import MailChimpForm from "./signUpForUpdates/mailChimpForm.component";

export function ExperienceAnInaccessibleWebContents() {
  useTitle("Experience an inaccessible web");

  return (
    <Page title="Experience an inaccessible web">
      <figure css={figure}>
        <Image
          src="/images/hols.png"
          alt="'Oh, you've caught me!' is the expression on this mouse's face as he chills out in a hammock on a sunny beach reading a book"
          width={720}
          height={384}
          css={mouseImg}
          priority
        />
        <figcaption css={caption}>
          I call this masterpiece 'mouse on holiday'.
        </figcaption>
      </figure>

      <div css={intro}>
        <p>
          Below you'll find activities where you can
          <Emphasis>experience</Emphasis> common accessibility issues.
          <br />
          <br />
          Each one has an <Emphasis>explanation</Emphasis> of the HTML blunder
          that caused the issue.
          <br />
          <br />
          There's also <Emphasis>fix it</Emphasis> sections where you can have a
          go at rectifying the HTML (if that's your thing). You'll quickly
          notice that accessibility issues are generally easy fixes!
        </p>
      </div>

      <div css={titleAndDropdown}>
        <h2 css={sectionTitle}>when you don't use a mouse</h2>
        <details>
          <summary css={summary} aria-label="info">
            ?
          </summary>
          <p css={info}>
            Some people with physical disabilities [
            <Link href="/whatIsWebAccessibility#typesOfDisabilities">
              see examples
            </Link>
            ] don't have the dexterity to use a mouse. They might be using the
            keyboard instead, or an assistive tool like a switch device or
            speech recognition.
            <br />
            <br />
            Some blind people might not use a mouse if they can't see the cursor
            on the screen well. FYI: legally blind people usually have some
            level of vision, such as light and colour perception; it's actually
            quite rare to have zero vision.
            <br />
            <br />
            Some people are able to use a mouse but prefer using the keyboard as
            they find it more convenient.
          </p>
        </details>
      </div>

      <ul css={activitiesList}>
        <li>
          <Link href="/activity/justUseAButton">
            Divs in disguise; when a button is not a button
          </Link>
        </li>
        <li>
          {/* todo this just shouldn't be a link */}
          <p>
            The missing link; when a link is not a link{" "}
            <span css={comingSoon}>(coming soon)</span>
          </p>
        </li>
        <li>
          <p>
            Don't lose your focus; invisible focus outlines{" "}
            <span css={comingSoon}>(coming soon)</span>
          </p>
        </li>
      </ul>

      <MailChimpForm />

      <div css={titleAndDropdown}>
        <h2 css={sectionTitle}>when you use a screenreader</h2>
      </div>

      <ul css={activitiesList}>
        <li>
          {/* todo this just shouldn't be a link */}
          <p>
            A picture is worth a thousand words... or at least a couple, surely;
            alt text <span css={comingSoon}>(coming soon)</span>
          </p>
        </li>
      </ul>
    </Page>
  );
}
