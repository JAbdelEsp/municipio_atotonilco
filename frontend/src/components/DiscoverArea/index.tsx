import Image from "../../common/Image";
import OrnamentVertical from "../../common/OrnamentVertical";
import { SvgIcon } from "../../common/SvgIcon";
import {
  BgForAnimation,
  ContactFormParagraph,
  CustomList,
  CustomListContent,
  CustomListIconBg,
  CustomListIconBlock,
  CustomListItem,
  Form,
  FormBlock,
  FormImage,
  FormInner,
  FormLayout,
  Heading,
  ListLine,
  ListParagraph,
  ListTitle,
  RevealImageTrigger,
  Section,
  WLayout,
} from "./styles";

const DiscoverArea = () => {
  return (
    <Section className="with-gradient-bg" id="noticias">
      <WLayout className="form-grid">
        <FormBlock>
          <FormLayout>
            <FormImage>
              <RevealImageTrigger>
                <img
                  src="/images/planeacion/ORGANIGRAMA_PLANEACIÓN.jpg"
                  alt=""
                  className="cover-image fit-top cover"
                />
                <BgForAnimation />
              </RevealImageTrigger>
            </FormImage>
          </FormLayout>
        </FormBlock>
        <FormBlock className="is-2nd">
          <CustomList>
            <CustomListItem>
              <CustomListContent>
                <ListTitle>
                  Términos de Referencia para Evaluación a Programas
                  <SvgIcon
                    src="download-square-svgrepo-com.svg"
                    width="40px"
                    height=""
                  />
                </ListTitle>
              </CustomListContent>
              <ListLine />
            </CustomListItem>
            <CustomListItem>
              <CustomListContent>
                <ListTitle>
                  Programa Anual de Evaluación Ejercicio 2024
                </ListTitle>
                <SvgIcon
                  src="download-square-svgrepo-com.svg"
                  width="40px"
                  height=""
                />
              </CustomListContent>
              <ListLine />
            </CustomListItem>
            <CustomListItem>
              <CustomListContent>
                <ListTitle>
                  Programa de Evaluación Actualizado
                  <SvgIcon
                    src="download-square-svgrepo-com.svg"
                    width="40px"
                    height=""
                  />
                </ListTitle>
              </CustomListContent>
              <ListLine />
            </CustomListItem>
          </CustomList>
          <OrnamentVertical />
        </FormBlock>
      </WLayout>
    </Section>
  );
};
export default DiscoverArea;
