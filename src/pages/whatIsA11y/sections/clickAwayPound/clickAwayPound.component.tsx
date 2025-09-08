import Image from "next/image";
import React from "react";
import { FixedWidthImg } from "../../../../app/images/sizedImage/image.component";
import { Emphasis } from "../../../../fonts/emphasis/emphasis.component";
import { SectionWithAnchorLinkInterface } from "../sectionInterface";
import { graphicText, visual } from "./clickAwayPound.styles";

export function ClickAwayPound(props: SectionWithAnchorLinkInterface) {
  return (
    <div>
      <h2 id={props.headingId}>{props.heading}</h2>
      <p>
        In 2019, the Click-Away Pound survey looked into what it was like for
        disabled people in the UK to do online shopping.
      </p>
      <div css={visual}>
        <Image
          src="/images/stats.png"
          alt="Venn diagram of 2018 statistics in the UK. 
        Population was 66.44 million. 
        Of that population there were 48.13 million over sixteens with internet access. 
        Of those over sixteens 10.07 million had a disability. 
        Of those with a disability 7.15 million needed a website to be accessible to use it easily or use it at all."
          width={314}
          height={310.25}
        />
      </div>
      {/* <a
      // href={article}
      download="Click-Away Pound Report 2019"
      // css={downloadLink}
    >
      Download the 2019 Click-Away Pound research article
    </a> */}
      <div css={graphicText}>
        <p>48 million adults were using the internet.</p>
        <p>
          <Emphasis>7 million</Emphasis> of them had a disability that meant
          they needed websites to be accessible to use them easily, or at all.
        </p>
        <p>
          That's <Emphasis>15% of users!</Emphasis>
        </p>
        <p>
          UK online retailers missed out on roughly{" "}
          <Emphasis>£17 billion</Emphasis> that year because these people were
          leaving their sites without being able to make purchases.
        </p>
      </div>
    </div>
  );
}
