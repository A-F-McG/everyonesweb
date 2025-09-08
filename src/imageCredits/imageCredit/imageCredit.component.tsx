import React from "react";
import * as styles from "./imageCredit.styles";
import { ImageCreditProps } from "./imageCredit.interface";
import Image from "next/image";

export function ImageCredit(props: ImageCreditProps) {
  return (
    <figure>
      <Image src={props.src} alt={props.alt} width={96} height={64} />
      <figcaption css={styles.caption}>
        <a
          href={props.link}
          aria-label={
            props.caption.length === 1
              ? "View image of letter " + props.caption + " on Wikimedia"
              : undefined
          }
        >
          {props.caption}
        </a>
      </figcaption>
    </figure>
  );
}
