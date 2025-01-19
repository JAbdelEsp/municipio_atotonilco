import { ImagesProps } from "../types";

export const Image = ({ src, alt, cls, location }: ImagesProps) => (
  <img
    src={`https://k753lncj-9000.usw3.devtunnels.ms/public/uploads/${src}`}
    alt={alt}
    className={cls}
  />
);

export default Image;
