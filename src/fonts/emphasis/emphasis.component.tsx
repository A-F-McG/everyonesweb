import React from "react";
import { emphasis } from "./emphasis.styles";

export function Emphasis(props: { children: string }) {
  return <strong css={emphasis}>{props.children}</strong>;
}
