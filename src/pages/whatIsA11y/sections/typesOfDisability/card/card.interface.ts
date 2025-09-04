import { ImageCreditProps } from "../../../../../imageCredits/imageCredit/imageCredit.interface";

export interface DisabilityCardProps {
  heading: string;
  bullets: string[];
  imageSrc: string;
  imageAlt: string;
  imageWidth?: number;
  imageHeight?: number;
  cardColour: string;
}
