import React, { useState } from "react";
// import { intro, poster } from "./poster.styles";
import { Page } from "../template/page.component";
// import { image } from "./poster.styles";
import Image from "next/image";
import {
  centerContainer,
  figure,
  fullSizedPosterLink,
  loadingImageText,
  mindMapOrderTip,
  visuallyHidden,
  widthUnset,
} from "./poster.styles";
import { TextAlternative } from "./textAlternative/textAlternative.component";
import Link from "next/link";

export function Poster() {
  const [isPosterLoaded, setIsPosterLoaded] = useState(false);
  const [showLoadedUpdates, setShowLoadedUpdates] = useState(true);

  return (
    <div>
      <Page title="Web Accessibility Poster">
        <p css={[widthUnset, mindMapOrderTip]}>
          FYI convention with mind maps is to start with the branch at 12
          o'clock and read clockwise, though it doesn't really matter.
        </p>

        <>
          {showLoadedUpdates && (
            <div
              aria-live="polite"
              css={[loadingImageText, isPosterLoaded && visuallyHidden]}
            >
              {isPosterLoaded ? "Poster image loaded" : "Loading poster..."}
            </div>
          )}
        </>
        <figure css={figure}>
          <Image
            src="/poster.svg"
            alt="Web accessibility mind map; there's a text alternative a little further down the page"
            width={1189}
            height={841}
            css={figure}
            onLoadingComplete={() => {
              setIsPosterLoaded(true);
              setTimeout(() => {
                setShowLoadedUpdates(false);
              }, 3000);
            }}
          />
          <figcaption>
            Mind map showing the latest version of the web content accessibility
            guidelines (2.2) at Level AA. This level is the middle of 3 and the
            one most websites want to be shooting for, and it includes all of
            the first level (A) guidelines.
          </figcaption>
        </figure>
        <p css={[widthUnset, fullSizedPosterLink]}>
          <a href="/posterTextAsPaths.svg" download="accessibility_mindmap.svg">
            Download poster
          </a>
          <br />
          <a href="/poster.svg" target="_blank">
            View full-sized A0 poster in new tab
          </a>
          <br />
          <span>A0 is the size of 16 A4 sheets :&#41;</span>
        </p>

        <div css={centerContainer}>
          <div>
            <h2>Text alternative</h2>

            <p>
              Here's a bunch of expandable lists that match the mind map
              branches :&#41;
            </p>

            <TextAlternative />

            <h2>About the poster</h2>
            <p>
              Though there's really no such thing as being 'fully accessible'
              because there's so many different ways people use technology,
              there are a set of guidelines that are a minimum starting point.
            </p>
            <p>
              The thing is, those web content accessibility guidelines aren't
              exactly... accessible. At least they didn't feel it when I was
              learning; they're quite technical and a ginormous wall of text.{" "}
              <a href="https://www.w3.org/WAI/WCAG22/quickref/">
                Here's the 'quick' reference version.
              </a>
            </p>
            <p>
              I'd love for more people and companies to take an interest in
              learning these basic guidelines, but I know they can seem
              intimidating and overwhelming; even I struggled to trudge through
              them initially and I'm actually interested the topic.
            </p>
            <p>
              So this poster is for anyone new to accessibility that wants to
              see what it's about a little in plain language, or those who would
              like an <strong>actual</strong> quick reference to all the
              guidelines.
            </p>
            <p>
              I'm not associated with the W3C at all (the people who write the
              guidelines), and the poster has a lot of my own wording. So don't
              quote me if you're doing a technical audit - reference the{" "}
              <a href="https://www.w3.org/TR/WCAG22/">full guidelines</a> that
              have some more nuance :&#41;.
            </p>
            {/* </div> */}

            <h2>Have an issue?</h2>
            <p>
              If you have any problems, or if there's something that would make
              the map easier to access,{" "}
              <Link href="mailto:contact@everyonesweb.com">
                email me and let me know
              </Link>{" "}
              :&#41;
            </p>
          </div>
        </div>
      </Page>
    </div>
  );
}
