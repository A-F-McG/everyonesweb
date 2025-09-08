import React from "react";
import IonIcon from "@reacticons/ionicons";
import { container, downChevron, treeParent } from "./tree.styles";
import { TreeEndProps } from "./endNode.interface";

export function TreeEnd(props: TreeEndProps) {
  return (
    <div css={container}>
      <div css={treeParent}>
        <IonIcon name={"remove"} css={downChevron} aria-hidden={true} />
        {props.text}
      </div>
    </div>
  );
}
