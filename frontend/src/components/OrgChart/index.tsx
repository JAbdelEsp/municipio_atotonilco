import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import {
  TeamImageWrapper,
  ImageWrap,
  TeamGrid,
  TeamWrapper,
  TeamImageOverlay,
  LightText,
  TeamNameWrapper,
  ThirdTitle,
  Container,
  PrincipalTeamWrapper,
} from "./styles";
import { DirectionsBasicInfo, getDirections } from "../../slices/bannerSlices";
import ModalDirections from "../../common/ModalDirections";
const OrgChart = () => {
  const [isShow, setIsShow] = useState(false);
  const [data, setData] = useState<DirectionsBasicInfo>();
  const dispatch = useAppDispatch();
  const directions = useAppSelector((state) => state.banners.directions);
  useEffect(() => {
    dispatch(getDirections());
  }, [dispatch]);

  return (
    <Container id="data">
      {data && (
        <ModalDirections
          show={isShow}
          set={setIsShow}
          data={data ? data : []}
        />
      )}
      <TeamGrid>
        <PrincipalTeamWrapper>
          <TeamImageWrapper>
            <ImageWrap>
              <img
                src="/images/main/PHOTO-2024-11-16-13-29-34.jpg"
                alt="Lic. Leticia Chapa Guerrero "
              />
            </ImageWrap>
            <TeamImageOverlay />
          </TeamImageWrapper>
          <TeamNameWrapper>
            <ThirdTitle>
              L.C.P Elba Leticia
              <LightText> Chapa Guerrero</LightText>
            </ThirdTitle>
            <ThirdTitle>
              Presidenta
              <LightText> Municipal</LightText>
            </ThirdTitle>
          </TeamNameWrapper>
        </PrincipalTeamWrapper>
      </TeamGrid>
      {/* secondary */}
      <TeamGrid>
        {directions.length > 0 &&
          directions.map((item) => (
            <TeamWrapper
              onClick={() => {
                setIsShow(true);
                setData(item);
              }}
            >
              <TeamImageWrapper>
                <ImageWrap>
                  {item.picture !== "" ? (
                    <img
                      src={
                        import.meta.env.VITE_API_URL +
                        `/uploads/directions/${item.area}/${item.picture}`
                      }
                      alt={item.name}
                    />
                  ) : (
                    <img src="/images/direcciones/sin-perfil.jpg" alt="" />
                  )}
                </ImageWrap>
                <TeamImageOverlay />
              </TeamImageWrapper>
              <TeamNameWrapper>
                <ThirdTitle>
                  {item.name}
                  <LightText> {item.lastname}</LightText>
                </ThirdTitle>
                <ThirdTitle>{item.area}</ThirdTitle>
              </TeamNameWrapper>
            </TeamWrapper>
          ))}
      </TeamGrid>
    </Container>
  );
};

export default OrgChart;
