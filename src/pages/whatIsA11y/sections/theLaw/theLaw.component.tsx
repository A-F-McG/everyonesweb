import React from "react";
import { Emphasis } from "../../../../fonts/emphasis/emphasis.component";
import { SectionWithAnchorLinkInterface } from "../sectionInterface";

export function TheLaw(props: SectionWithAnchorLinkInterface) {
  return (
    <>
      <h2 id={props.headingId}>{props.heading}</h2>
      <p>
        The {/* to do - symbol to new tab */}
        <a href="https://www.w3.org/WAI/WCAG22/quickref/">
          web content accessibility guidelines (<Emphasis>WCAG</Emphasis>)
        </a>{" "}
        are a list of checkpoints to grade how accessible a website is. The
        grades are level A, level AA and level AAA (the best).
      </p>
      <p>
        In many countries, company websites have to be Level AA. If they're not,
        the company could run into legal troubles and be{" "}
        <Emphasis>sued</Emphasis>. If it's not the law where you live yet,
        there's a good chance it will be in coming years.
      </p>
    </>
  );
}
