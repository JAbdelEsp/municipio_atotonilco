import OrnamentVertical from "../../common/OrnamentVertical";
import { SvgIcon } from "../../common/SvgIcon";
import {
  BgForAnimation,
  CustomList,
  CustomListContent,
  CustomListItem,
  FormBlock,
  FormImage,
  FormLayout,
  ListLine,
  ListTitle,
  RevealImageTrigger,
  Section,
  WLayout,
} from "./styles";

const DiscoverArea = (data: any) => {
  return (
    <Section className="with-gradient-bg" id="noticias">
      <WLayout className="form-grid">
        <FormBlock>
          <FormLayout>
            <FormImage>
              <RevealImageTrigger>
                <img
                  src="/images/planeacion/ORGANIGRAMA_PLANEACION.jpg"
                  alt="organigrama planeacion atotonilco el grande"
                  className="cover-image fit-top cover"
                />
                <BgForAnimation />
              </RevealImageTrigger>
            </FormImage>
          </FormLayout>
        </FormBlock>
        <FormBlock className="is-2nd">
          <CustomList>
            {data.data.error ? (
              <>No Hay Información Disponible</>
            ) : (
              data.data.map((item: any, key: number) => (
                <CustomListItem key={key}>
                  <CustomListContent>
                    <ListTitle>
                      {item.description}
                      <a
                        href={import.meta.env.VITE_API_URL + item.file}
                        target="_blank"
                        download
                      >
                        <SvgIcon
                          src="download-square-svgrepo-com.svg"
                          width="40px"
                          height=""
                        />
                      </a>
                    </ListTitle>
                  </CustomListContent>
                  <ListLine />
                </CustomListItem>
              ))
            )}
          </CustomList>
          <OrnamentVertical />
        </FormBlock>
      </WLayout>
    </Section>
  );
};
export default DiscoverArea;
