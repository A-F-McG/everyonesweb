/* eslint-disable jsx-a11y/no-redundant-roles */

import React, { useEffect, useState } from "react";
import { expandBtn, textAlternative } from "./textAlternative.styles";
import { Tree } from "../tree/tree.component";
import { TreeEnd } from "../tree/endNode.component";

export function TextAlternative() {
  const [allExpanded, setAllExpanded] = useState(true);

  useEffect(() => {
    setAllExpanded(false);
  }, []);

  return (
    <>
      <div css={expandBtn}>
        <button
          onClick={() => {
            setAllExpanded(false);

            setTimeout(() => {
              setAllExpanded(true);
            }, 5);
          }}
        >
          Expand all
        </button>
      </div>
      <button
        onClick={() => {
          setAllExpanded(true);

          setTimeout(() => {
            setAllExpanded(false);
          }, 5);
        }}
      >
        Collapse all
      </button>
      <ul css={textAlternative}>
        <Tree
          text="Web accessibility; WCAG Level AA"
          showChildren={allExpanded}
        >
          <ul role="list">
            <Tree
              text="Perceivable; I can consume all of the content when one of my senses is impaired (1)"
              showChildren={allExpanded}
            >
              <ul role="list">
                <Tree
                  text="Text alternatives; Write me what you're showing that I can't see or hear (1.1)"
                  showChildren={allExpanded}
                >
                  <ul role="list">
                    <TreeEnd
                      text="Images, icons, charts and any other non-text content has alt text,
              an accessible name or another text alternative (1.1.1 A)"
                    />
                  </ul>
                </Tree>
                <Tree
                  text="Media has alternatives (1.2)"
                  showChildren={allExpanded}
                >
                  <ul role="list">
                    <TreeEnd text="Any audio (without images or video) has a transcript and silent videos have audio or text alternatives (1.2.1 A)" />
                    <Tree text="Captions" showChildren={allExpanded}>
                      <ul role="list">
                        <TreeEnd text="For pre-recorded videos (1.2.2 A)" />

                        <TreeEnd text="For live videos (1.2.4 A)" />
                      </ul>
                    </Tree>

                    <Tree text="Videos" showChildren={allExpanded}>
                      <ul role="list">
                        <TreeEnd text="Have audio descriptions or text alternatives (1.2.3 A)" />

                        <TreeEnd text="Have audio descriptions (1.2.5. A)" />
                      </ul>
                    </Tree>
                  </ul>
                </Tree>
                <Tree
                  showChildren={allExpanded}
                  text="Adaptable; I can change the way content is presented, e.g. listening with a screen reader (1.3)"
                >
                  <ul role="list">
                    <TreeEnd text="Visually obvious information, structure and relationships, e.g. headings and lists, are conveyed in the code or text (1.3.1 A)" />
                    <TreeEnd text="Sensible reading order in the DOM (1.3.2 A)" />
                    <TreeEnd text="Instuctions don't rely on shape, colour, size, location, orientation or sound (1.3.3 A)" />
                    <TreeEnd text="Orientation isn't fixed (1.3.4 AA new)" />
                    <TreeEnd text="Common fields have autocomplete (1.3.5 AA new)" />
                  </ul>
                </Tree>
                <Tree
                  showChildren={allExpanded}
                  text="Distinguishable; I can make out what's written and shown (1.4)"
                >
                  <ul role="list">
                    <TreeEnd text="When it conveys meaning, colour has a partner: text, pattern or contrast (3:1 to what the colour is differentiating from, e.g. surrounding text) (1.4.1 A)" />
                    <TreeEnd text="I can pause or mute audio that's longer than 3 seconds (1.4.2 A)" />
                    <TreeEnd text="I can see the text against the background. Small text contrast > 4.5:1, Large text (18pt or bold 14pt) contrast > 3:1 (1.4.3 AA)" />
                    <TreeEnd text="I can increase the text to 200% on a 1280px x 1024px screen using text-only and/or page zoom and still read and use everything fine (1.4.4 AA)" />
                    <TreeEnd text="Text is real text, not images of text, unless it's a logo (1.4.5 AA)" />
                    <TreeEnd text="Zoomed in to 400% on a 1280px x 1024px screen, (same as a 320px x 256px screen), I can read and use everything and there's maximum 1 scroll bar (1.4.10 AA)" />
                    <TreeEnd text="I can see interactive elements, their different states and any important graphics. Contrast > 3:1 (1.4.11  AA)" />
                    <TreeEnd text="I can see and use everything when I change the text spacing to these multiples of the font size: line height 1.5, letter 0.12, paragraph 2, word 0.16 (1.4.12 AA)" />
                    <TreeEnd text="Content on hover and focus: When I mouse over, it should stay;It won't disppear before I say; But I can make it go away (1.4.13 AA)" />
                  </ul>
                </Tree>
              </ul>
            </Tree>
            <Tree
              showChildren={allExpanded}
              text="Operable; I can interact with any navigation and functionality, inclusing when I'm using assistive tech (2)"
            >
              <ul role="list">
                <Tree
                  showChildren={allExpanded}
                  text="Keyboard accessible (2.1)"
                >
                  <ul role="list">
                    <TreeEnd text="I can do everything using the keyboard (2.1.1 A)" />
                    <TreeEnd text="I can always move focus by pressing tab or other standard keys and don't get trapped anywhere (2.1.2 A)" />
                    <TreeEnd text="Single key shortcuts can be turned off, remapped or only active when something's focused (2.1.4 A)" />
                  </ul>
                </Tree>
                <Tree
                  showChildren={allExpanded}
                  text="Give me enough time (2.2)"
                >
                  <ul role="list">
                    <TreeEnd text="For time limits less than 20 hours, I can turn it off, adjust it to least 10x the default length or extend it with a simple action just before time runs out at least 10 times (2.2.1 A)" />
                    <TreeEnd text="For content that automatically moves for more than 5 seconds or updates, I can pause, stop or hide it or set the frequency of updates (2.2.2 A)" />
                  </ul>
                </Tree>
                <Tree
                  showChildren={allExpanded}
                  text="Try not to cause seizures and physical reactions (2.3)"
                >
                  <ul>
                    <TreeEnd text="Less than three flashes per second (2.3.1 A)" />
                  </ul>
                </Tree>
                <Tree
                  showChildren={allExpanded}
                  text="Navigable; I know where I am and can find what I'm after (2.4)"
                >
                  <ul role="list">
                    <TreeEnd text="I can skip blocks repeated across pages, like menus (2.4.1 A)" />
                    <TreeEnd text="Pages have titles (2.4.2 A)" />
                    <TreeEnd text="The keyboard focus order makes sense (2.4.3 A)" />
                    <TreeEnd text="I know what a link does by the text alone, or by the context in the paragraph, list or cell (2.4.4 A)" />
                    <TreeEnd text="There are multiple ways to get to each page (2.4.5 AA)" />
                    <TreeEnd text="Headings and labels are relevant (2.4.6 AA)" />
                    <TreeEnd text="A focus indicator is visible for everything interactive (2.4.7 AA)" />
                    <TreeEnd text="Focused elements are not completely hidden behind other content (2.4.11 AA new)" />
                  </ul>
                </Tree>
                <Tree
                  showChildren={allExpanded}
                  text="Ways of interacting; I can input with something other than a keyboard, e.g. voice control (2.5)"
                >
                  <ul role="list">
                    <TreeEnd text="Controls that need more than one finger or that depend on me taking a specific path have an alternative that needs neither (2.5.1 A)" />
                    <TreeEnd text="Actions can be prevented by moving my finger or cursor away before releasing or can be undone afterwards (2.5.2 A)" />
                    <TreeEnd text="Visually hidden accessible names start with the visual label (2.5.3 A)" />
                    <TreeEnd text="There's an alternative if I'm supposed to move my device or gesture at it. I can turn off motion if I want to (2.5.4 A)" />
                    <TreeEnd text="I can click or tap instead of dragging (2.5.7 AA new)" />
                    <TreeEnd text="Clickable things are bigger than 24px x 24px, or if they're centered in a 24px x 24px circle, no circles intersect, or they're inline in text (2.5.8 AA new)" />
                  </ul>
                </Tree>
              </ul>
            </Tree>
            <Tree
              showChildren={allExpanded}
              text="Content and functionality is understandable (3)"
            >
              <ul role="list">
                <Tree showChildren={allExpanded} text="Readable (3.1)">
                  <ul role="list">
                    <TreeEnd text="The language is set in the HTML (3.2.1 A)" />
                    <TreeEnd text="The language of every foreign phrase is set in the HTML (3.2.2 AA)" />
                  </ul>
                </Tree>
                <Tree
                  showChildren={allExpanded}
                  text="Predictable; I can expect navigation and functionality to stay the same (3.2)"
                >
                  <ul>
                    <TreeEnd text="Focusing on something doesn't redirect the focus, change page or significantly change page content (3.2.1 A)" />
                    <TreeEnd text="Changing a value doesn't redirect the focus, change page or significantly change page content (3.2.2 A)" />
                    <TreeEnd text="Navigation is in the same relative order on every page (3.2.3 AA)" />
                    <TreeEnd text="Controls repeated on multiple pages have the same labels, names and icons (3.2.4 AA)" />
                    <TreeEnd text="Contact and self-help options are in the same relative order on every page (3.2.6 A new)" />
                  </ul>
                </Tree>
                <Tree
                  showChildren={allExpanded}
                  text="Input assistance; It's easy to avoid and correct mistakes (3.3)"
                >
                  <ul>
                    <TreeEnd text="I'm told where an error is and what the problem is in writing (3.3.1 A)" />
                    <TreeEnd text="There are visible labels or instructions for inputs (3.3.2 A)" />
                    <TreeEnd text="I get suggestions on how to fix the error, if you know the exact problem (3.3.3 AA)" />
                    <TreeEnd text="If an action involves money, changing or deleting a good chunk of answers or data, or is a legal commitment, then either it's reversible ot there's a review, edit and confirm step (3.3.4 AA)" />
                    <TreeEnd text="Repeated fields autofill or I can choose from a previous response (3.3.7 A new)" />
                    <TreeEnd text="Fields in the log in process either autofill or can be copy and pasted into, or there is an alternative, like social media log in. Captchas can be basic object recognition at AA level, but they're still not great. (3.3.8 AA new)" />
                  </ul>
                </Tree>
              </ul>
            </Tree>
            <Tree
              showChildren={allExpanded}
              text="Robust; Works with different devices, browsers and assistive tech (4)"
            >
              <ul>
                <TreeEnd text="Everything interactive has a name, role, and, where applicable, state and value (4.1.2 A)" />
                <TreeEnd text="Any written update messages are also brought to the attention of assistive tech, without stealing my focus (4.1.3 AA new)" />
              </ul>
            </Tree>
          </ul>
        </Tree>
      </ul>
    </>
  );
}
