import React from "react";
import { useTitle } from "../../hooks/useTitle.component";
import { PageProps } from "./page.interface";
import { innerFlex, mainContent } from "./page.styles";

export function Page(props: PageProps) {
  useTitle(props.title);

  return (
    <>
      <h1>{props.title}</h1>
      <div css={mainContent}>
        <div css={innerFlex}>{props.children}</div>
      </div>
    </>
  );
}
