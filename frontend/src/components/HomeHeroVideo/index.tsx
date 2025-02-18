import { useEffect } from "react";
import { PropsVideoContainer } from "../../common/types";
import Video from "../../common/Video";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { HomeHeroVideoContainer } from "./styles";
import { getVideo } from "../../slices/bannerSlices";

const HomeHeroVideo = ({ cls }: PropsVideoContainer) => {
  const dispatch = useAppDispatch();
  const video = useAppSelector((state) => state.banners.video);
  useEffect(() => {
    dispatch(getVideo());
  }, [dispatch]);
  return (
    <HomeHeroVideoContainer className={cls ? "overlay" : ""}>
      {video.length > 0 &&
        video.map((item, key) => (
          <Video
            key={key}
            src={
              import.meta.env.VITE_API_URL +
              "public/video/" +
              item.title +
              "/" +
              item.video
            }
            autoPlay={true}
            muted={false}
            loop={true}
            controls={false}
          />
        ))}
    </HomeHeroVideoContainer>
  );
};

export default HomeHeroVideo;
