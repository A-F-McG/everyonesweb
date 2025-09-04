import Link from "next/link";
import React from "react";
import { footer } from "./footer.styles";

export function Footer() {
  return (
    <>
      {/* todo - this doesn't need to be a list anymore */}
      <ul css={footer}>
        <li>
          <Link href="mailto:contact@everyonesweb.com">
            Contact me at contact@everyonesweb.com
          </Link>
        </li>
        <li>
          <Link href="https://www.linkedin.com/in/alice-mcgregor-615000108/">
            Find me on LinkedIn
          </Link>
        </li>
      </ul>
    </>
  );
}
