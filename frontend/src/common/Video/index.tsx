import { VideoProps } from "../types";
const Video = ({ autoPlay, loop, muted, src }: VideoProps) => {
  return (
    <video autoPlay={autoPlay} loop={loop} muted={muted}>
      <source src={`/videos/${src}`} type="video/mp4" />
    </video>
  );
};

export default Video;
