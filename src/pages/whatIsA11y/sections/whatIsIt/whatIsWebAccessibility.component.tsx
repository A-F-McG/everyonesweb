import React from "react";
import { Emphasis } from "../../../../fonts/emphasis/emphasis.component";
import { container } from "./whatIsWebAccessibility.styles";

export function WhatIsWebAccessibility() {
  return (
    <div css={container}>
      <p>
        You've probably noticed accommodations for disabled people in the real
        world, like ramps and accessible bathrooms.
        <br />
        <br />
        <Emphasis>
          On the web, disabled people also need accommodations.
        </Emphasis>
        <br />
        <br />
        Captions are one example of web accessibility. Deaf people need them to
        access videos.
        <br />
        <br />
        Have you ever turned captions on because you're in a loud public space?
        Or to help with learning a language? Accessibility is the difference
        between disabled people being able to use something or not, but it isn't
        only for their benefit.
        <br />
        <br />
        <Emphasis>
          Accessible site = better user experience for everyone.
        </Emphasis>
        <br />
        <br />
        And it isn't all that complicated to learn or do :)
      </p>
    </div>
  );
}
