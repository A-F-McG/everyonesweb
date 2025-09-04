import React from "react";
import { FixedWidthImg } from "../../app/images/sizedImage/image.component";

export function A11y() {
  return (
    <>
      <h2>What's a11y?</h2>
      <p>It's just a common abbreviation for web accessibility.</p>

      <FixedWidthImg
        width={599}
        height={416}
        src="/images/a11y.png"
        alt="The A11y abbreviation is so because accessibility has an 'A' followed by 11 letters followed by a 'Y'"
      />

      <p>
        To be honest, it doesn't feel like a very accessible abbreviation as
        it's not particularly clear!
      </p>
    </>
  );
}
