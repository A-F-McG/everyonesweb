import React from "react";
import { Page } from "../pages/template/page.component";
import { card } from "./blog.styles";

export function Posts() {
  return (
    <Page title="1 minute reads">
      <p>
        My attention span is that of a gnat, so I hope you enjoy these
        gnat-attention-span-long blog posts.
      </p>

      <div css={card}>What is a11y?</div>
      {/* {posts.map(post => <Link href={post} />)} */}
    </Page>
  );
}
