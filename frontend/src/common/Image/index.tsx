import { ImagesProps } from "../types";

export const Image = ({ src, alt, cls, location }: ImagesProps) => (
  <img src={`/images/${location}/${src}`} alt={alt} className={cls} />
);

export default Image;
