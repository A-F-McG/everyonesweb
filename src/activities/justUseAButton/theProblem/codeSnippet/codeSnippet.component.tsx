import React from "react";
import { accented, codeSnippet, symbol } from "./codeSnippet.styles";

interface CodeSnippetProps {
  tag: string;
}

export function CodeSnippet(props: CodeSnippetProps) {
  return (
    <span css={codeSnippet}>
      <span css={[symbol, accented]}>&lt;</span>
      <span css={accented}>{props.tag} </span>
      onClick=
      <span css={symbol}>&#123;</span>
      doSomething
      <span css={symbol}>&#125;&gt; </span>
      Click me
      <span css={[symbol, accented]}> &lt;&#47;</span>
      <span css={accented}>{props.tag}</span>
      <span css={[symbol, accented]}>&gt;</span>
    </span>
  );
}
