import React from "react";
import { style } from "./bulletedList.styles";

export function BulletedList(props: { bullets: string[]; className?: string }) {
  return (
    <ul css={style} className={props.className}>
      {props.bullets.map((bullet, index) => (
        <li key={index}>{bullet}</li>
      ))}
    </ul>
  );
}
