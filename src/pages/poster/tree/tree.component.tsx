/* eslint-disable jsx-a11y/no-redundant-roles */

import React, { useEffect, useId, useState } from "react";
import { TreeProps } from "./tree.interface";
import IonIcon from "@reacticons/ionicons";
import { container, downChevron, treeParent } from "./tree.styles";

export function Tree(props: TreeProps) {
  const [showTreeItems, setShowTreeItems] = useState(props.showChildren);
  const itemsId = useId();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowTreeItems(props.showChildren);
    }, 20);

    return () => clearTimeout(timeoutId);
  }, [props.showChildren]);

  return (
    <li css={container} role="listitem">
      <button
        aria-expanded={showTreeItems}
        aria-controls={itemsId}
        onClick={() => setShowTreeItems(!showTreeItems)}
        css={treeParent}
      >
        <IonIcon
          name={"arrow-down-circle-outline"}
          css={downChevron}
          aria-hidden={true}
        />
        {props.text}
      </button>

      <>{showTreeItems && <div id={itemsId}>{props.children}</div>}</>
    </li>
  );
}
