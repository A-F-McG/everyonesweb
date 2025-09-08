import React from "react";
import { SectionWithAnchorLinkInterface } from "../sectionInterface";
import { DisabilityTypeCard } from "./card/card.component";
import { cardsContainer, heading, twoCards } from "./typesOfDisability.styles";

export function TypesOfDisability(props: SectionWithAnchorLinkInterface) {
  return (
    <>
      <h2 css={heading} id={props.headingId}>
        {props.heading}
      </h2>
      <div css={cardsContainer}>
        <div css={twoCards}>
          <DisabilityTypeCard
            heading="Physical"
            bullets={[
              "Paralysis",
              "Parkinsons",
              "Limb difference",
              "Cerebral palsy",
              "Multiple sclerosis",
              "Muscular dystrophy",
            ]}
            imageSrc="/images/physical.png"
            imageAlt="A muscular man standing confidently on a prosthetic leg"
            imageWidth={85}
            imageHeight={208}
            cardColour="rgb(193 96 196)"
          />
          <DisabilityTypeCard
            heading="Cognitive"
            bullets={[
              "Dyslexia",
              "ADHD",
              "Autism",
              "Discalculia",
              "Learning disabilities",
              "Down's syndrome",
            ]}
            imageSrc="/images/brain.png"
            imageAlt="A brain illumated in different shades of purple, pink and orange"
            cardColour="rgb(252 105 191)"
          />
        </div>
        <div css={twoCards}>
          <DisabilityTypeCard
            heading="Auditory"
            bullets={[
              "Deafness",
              "Hard of hearing",
              "Hypersensitivity to sound",
              "Auditory processing disorders",
            ]}
            imageSrc="/images/ear.png"
            imageAlt="An ear"
            cardColour="rgb(252 105 191)"
            imageHeight={100}
            imageWidth={80}
          />
          <DisabilityTypeCard
            heading="Visual"
            bullets={[
              "Partial sight loss",
              "Severe sight loss",
              "Colour blindness",
              "Light sensitivity",
            ]}
            imageSrc="/images/eye.png"
            imageAlt="An eye"
            cardColour="rgb(193 96 196)"
            imageHeight={90}
            imageWidth={90}
          />
        </div>
      </div>
    </>
  );
}
