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
const OrgChart = () => {
  return (
    <Container id="data">
      <TeamGrid>
        <PrincipalTeamWrapper>
          <TeamImageWrapper>
            <ImageWrap>
              <img
                src="/public/images/main/PHOTO-2024-11-16-13-29-34.jpg"
                alt=""
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
        <TeamWrapper>
          <TeamImageWrapper>
            <ImageWrap>
              <img src="/public/images/direcciones/sin-perfil.jpg" alt="" />
            </ImageWrap>
            <TeamImageOverlay />
          </TeamImageWrapper>
          <TeamNameWrapper>
            <ThirdTitle>
              Erika
              <LightText> Pérez Gress</LightText>
            </ThirdTitle>
            <ThirdTitle>
              Órgano Interno
              <LightText> de Control</LightText>
            </ThirdTitle>
          </TeamNameWrapper>
        </TeamWrapper>
        <TeamWrapper>
          <TeamImageWrapper>
            <ImageWrap>
              <img src="/public/images/direcciones/SrioGral.jpg" alt="" />
            </ImageWrap>
            <TeamImageOverlay />
          </TeamImageWrapper>
          <TeamNameWrapper>
            <ThirdTitle>
              Lic. Juan Ignacio
              <LightText> Hernández Calva</LightText>
            </ThirdTitle>
            <ThirdTitle>
              Secretario
              <LightText> Municipal</LightText>
            </ThirdTitle>
          </TeamNameWrapper>
        </TeamWrapper>
        <TeamWrapper>
          <TeamImageWrapper>
            <ImageWrap>
              <img src="/public/images/direcciones/PresDIF.jpg" alt="" />
            </ImageWrap>
            <TeamImageOverlay />
          </TeamImageWrapper>
          <TeamNameWrapper>
            <ThirdTitle>
              Lic. Oscar Vázquez
              <LightText> Cervantes</LightText>
            </ThirdTitle>
            <ThirdTitle>
              Sistema DIF
              <LightText> Municipal</LightText>
            </ThirdTitle>
          </TeamNameWrapper>
        </TeamWrapper>
        <TeamWrapper>
          <TeamImageWrapper>
            <ImageWrap>
              <img src="/public/images/direcciones/SegPub.jpg" alt="" />
            </ImageWrap>
            <TeamImageOverlay />
          </TeamImageWrapper>
          <TeamNameWrapper>
            <ThirdTitle>
              Cmdte. Cesar
              <LightText> Lara Hernández</LightText>
            </ThirdTitle>
            <ThirdTitle>
              Seguridad Pública y<LightText> Tránsito Municipal</LightText>
            </ThirdTitle>
          </TeamNameWrapper>
        </TeamWrapper>
        <TeamWrapper>
          <TeamImageWrapper>
            <ImageWrap>
              <img src="/public/images/direcciones/tesorero.jpg" alt="" />
            </ImageWrap>
            <TeamImageOverlay />
          </TeamImageWrapper>
          <TeamNameWrapper>
            <ThirdTitle>
              C.P. Martín
              <LightText> Jiménez Sánchez</LightText>
            </ThirdTitle>
            <ThirdTitle>
              Tesorería<LightText> Municipal</LightText>
            </ThirdTitle>
          </TeamNameWrapper>
        </TeamWrapper>
        <TeamWrapper>
          <TeamImageWrapper>
            <ImageWrap>
              <img
                src="/public/images/direcciones/Obras-publicas-1.jpg"
                alt=""
              />
            </ImageWrap>
            <TeamImageOverlay />
          </TeamImageWrapper>
          <TeamNameWrapper>
            <ThirdTitle>
              Arq. Edgar
              <LightText> Guzmán Montiel</LightText>
            </ThirdTitle>
            <ThirdTitle>
              Obras<LightText> Públicas</LightText>
            </ThirdTitle>
          </TeamNameWrapper>
        </TeamWrapper>
        <TeamWrapper>
          <TeamImageWrapper>
            <ImageWrap>
              <img src="/public/images/direcciones/sin-perfil.jpg" alt="" />
            </ImageWrap>
            <TeamImageOverlay />
          </TeamImageWrapper>
          <TeamNameWrapper>
            <ThirdTitle>
              C. Azucena
              <LightText> Serrano Cabrera</LightText>
            </ThirdTitle>
            <ThirdTitle>
              Oficialía<LightText> Mayor</LightText>
            </ThirdTitle>
          </TeamNameWrapper>
        </TeamWrapper>
        <TeamWrapper>
          <TeamImageWrapper>
            <ImageWrap>
              <img src="/public/images/direcciones/Agua-Potable.jpg" alt="" />
            </ImageWrap>
            <TeamImageOverlay />
          </TeamImageWrapper>
          <TeamNameWrapper>
            <ThirdTitle>
              C. José Antonio
              <LightText> Vergara Acuña</LightText>
            </ThirdTitle>
            <ThirdTitle>
              Servicios<LightText> Públicos</LightText>
            </ThirdTitle>
          </TeamNameWrapper>
        </TeamWrapper>
        <TeamWrapper>
          <TeamImageWrapper>
            <ImageWrap>
              <img src="/public/images/direcciones/Agua.jpg" alt="" />
            </ImageWrap>
            <TeamImageOverlay />
          </TeamImageWrapper>
          <TeamNameWrapper>
            <ThirdTitle>
              Ing. Oscar
              <LightText> López Cerón</LightText>
            </ThirdTitle>
            <ThirdTitle>
              Agua Potable y<LightText> Alcantarillado</LightText>
            </ThirdTitle>
          </TeamNameWrapper>
        </TeamWrapper>
        <TeamWrapper>
          <TeamImageWrapper>
            <ImageWrap>
              <img src="/public/images/direcciones/Planeacion.jpg" alt="" />
            </ImageWrap>
            <TeamImageOverlay />
          </TeamImageWrapper>
          <TeamNameWrapper>
            <ThirdTitle>
              L.D. Salvador
              <LightText> Licona Ramírez</LightText>
            </ThirdTitle>
            <ThirdTitle>
              Dirección de<LightText> Planeación</LightText>
            </ThirdTitle>
          </TeamNameWrapper>
        </TeamWrapper>
        <TeamWrapper>
          <TeamImageWrapper>
            <ImageWrap>
              <img src="/public/images/direcciones/Planeacion.jpg" alt="" />
            </ImageWrap>
            <TeamImageOverlay />
          </TeamImageWrapper>
          <TeamNameWrapper>
            <ThirdTitle>
              M.V.Z. José de Jésus
              <LightText> Hernández Melo</LightText>
            </ThirdTitle>
            <ThirdTitle>
              Desarrollo<LightText> Rural</LightText>
            </ThirdTitle>
          </TeamNameWrapper>
        </TeamWrapper>
      </TeamGrid>
    </Container>
  );
};

export default OrgChart;
