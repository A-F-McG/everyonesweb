import { SizedImageProps } from "../../app/images/sizedImage/image.interface";

export interface ImageCreditProps extends SizedImageProps {
  link: string;
  caption: string;
}
