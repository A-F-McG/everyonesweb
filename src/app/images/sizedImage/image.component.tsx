import React from "react";
import Image from "next/image";
import { SizedImageProps } from "./image.interface";

//todo probs delete this too
export function FixedWidthImg(props: SizedImageProps) {
  return (
    <Image
      {...props}
      width={280}
      height={
        props.height && props.width ? (props.height / props.width) * 280 : 280
      }
    />
  );
}
