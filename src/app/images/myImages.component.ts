import { SizedImageProps } from "./sizedImage/image.interface";

//todo probs delete this file
export const MyImages: {
  [key: string]: SizedImageProps;
} = {
  stats: {
    src: "/images/stats.png",
    alt: `Venn diagram of 2018 statistics in the UK. 
              Population was 66.44 million. 
              Of that population there were 48.13 million over sixteens with internet access. 
              Of those over sixteens 10.07 million had a disability. 
              Of those with a disability 7.15 million needed a website to be accessible to use it easily or use it at all.`,
    width: 2512,
    height: 2482,
  },
  a11y: {
    src: "/images/a11y.png",
    alt: "The A11y abbreviation is so because accessibility has an 'A' followed by 11 letters followed by a 'Y'",
    width: 599,
    height: 416,
  },
  turtle: {
    src: "/images/turtle.png",
    alt: "Cute turtle with big blue eyes looking straight at you",
    width: 512,
    height: 512,
  },
};
