import { ImagesProps } from "../types";

export const Image = ({ src, alt, cls, location }: ImagesProps) => (
  <img
    src={import.meta.env.VITE_API_URL + `public/uploads/${src}`}
    alt={alt}
    className={cls}
  />
);

export default Image;
