import Image from "next/image";
import React from "react";
import { BulletedList } from "../../../../../fonts/bulletedList/bulletedList.component";
import { DisabilityCardProps } from "./card.interface";
import { card, heading, eg, list, imageContainer, image } from "./card.styles";

export function DisabilityTypeCard(props: DisabilityCardProps) {
  return (
    <div>
      <div css={imageContainer}>
        <Image
          src={props.imageSrc}
          alt={props.imageAlt}
          height={props.imageHeight ?? 130}
          width={props.imageWidth ?? 130}
          css={image}
        />
      </div>
      <div css={card}>
        <h3 css={heading} style={{ color: props.cardColour }}>
          {props.heading}
        </h3>
        <p css={eg}>e.g.</p>
        <BulletedList
          bullets={props.bullets}
          css={[list, `li::marker { color: ${props.cardColour}; }`]}
        />
      </div>
    </div>
  );
}
