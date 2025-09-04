import React from "react";
import Image from "next/image";
import { wordContainer } from "./bsl.styles";
import { BslAlt } from "./bslAlt";
import { Tooltip } from "./tooltip/tooltip.component";
import { useTheme } from "@emotion/react";

export function Bsl(props: { word: string }) {
  const word = props.word.toUpperCase();
  const theme = useTheme();

  return (
    <div css={wordContainer}>
      <Tooltip word={props.word} />

      {Array.from(word).map((letter, index) => (
        <Image
          src={"/images/bsl/" + theme.name + "/" + letter + ".svg"}
          alt={BslAlt[letter]}
          key={index}
          width={96}
          height={64}
        />
      ))}
    </div>
  );
}
