import { PropsVideoContainer } from "../../common/types";
import Video from "../../common/Video";
import { HomeHeroVideoContainer } from "./styles";

const HomeHeroVideo = ({ cls }: PropsVideoContainer) => {
  return (
    <HomeHeroVideoContainer className={cls ? "overlay" : ""}>
      <Video src="atotonilco.mp4" autoPlay={true} muted={false} loop={true} />
    </HomeHeroVideoContainer>
  );
};

export default HomeHeroVideo;
