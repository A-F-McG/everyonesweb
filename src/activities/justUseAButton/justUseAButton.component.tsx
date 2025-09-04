import React from "react";
import { useTitle } from "../../hooks/useTitle.component";
import { ActivityTemplate } from "../template/template.component";
import { UnreachableElementsActivity } from "./activity/activity.component";
import { FixIt } from "./fixIt/fixIt.component";
import { Issue } from "./theProblem/theProblem.component";

const description = (
  <>
    Some 'buttons' are only pretending to be buttons, but they only pretend well
    enough for mouse users!
  </>
);

const instructions = <>These are the instructions</>;

export function JustUseAButton() {
  useTitle("Divs in disguise; when a button is not a button");

  return (
    <ActivityTemplate
      heading="Divs in disguise; when a button is not a button"
      description={description}
      issue={<Issue />}
      instructions={instructions}
      activity={({ isAccessible }) => (
        <UnreachableElementsActivity isAccessible={isAccessible} />
      )}
      solution={<FixIt />}
    />
  );
}
