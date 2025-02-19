import { Table, TableColumnsType } from "antd";
import HeroCms from "../../components/HeroCms";
import NavBarC from "../../components/NavBar";
import {
  BgForAnimation,
  CustomList,
  CustomListContent,
  CustomListItem,
  DataTableWrapper,
  FormBlock,
  FormImage,
  FormLayout,
  ListLine,
  ListTitle,
  RevealImageTrigger,
  Section,
  WLayout,
} from "./styles";
import { SvgIcon } from "../../common/SvgIcon";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import OrnamentVertical from "../../common/OrnamentVertical";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { getComptroller, getPublicInfo } from "../../slices/comptrollerSlice";
import ComplaintsMailBox from "../../components/ComplaintsMail";

const Comptroller = () => {
  const dispatch = useAppDispatch();
  const comptroller = useAppSelector((state) => state.comptroller.comptroller);
  const publicInfo = useAppSelector((state) => state.comptroller.publicInfo);
  const ScrollDown = () => {
    const element = document.getElementById("data") as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };
  const optionsSlide = {
    arrowPrev: false,
    arrowNext: false,
    zoom: false,
    close: false,
    counter: false,
    bgOpacity: 0.2,
    padding: { top: 20, bottom: 40, left: 100, right: 100 },
  };
  const columns: TableColumnsType = [
    {
      title: "Indicadores",
      dataIndex: "file_name",
    },
    {
      title: "Primer Trimestre",
      dataIndex: "firstTrimester",
      render: (dataIndex) => {
        return (
          dataIndex && (
            <a
              href={import.meta.env.VITE_API_URL + JSON.parse(dataIndex)[0]}
              target="_blank"
              download
            >
              <SvgIcon src="excel-svgrepo-com.svg" width="20px" height="" />
            </a>
          )
        );
      },
    },
    {
      title: "Segundo Trimestre",
      dataIndex: "secondTrimester",
      render: (dataIndex) => {
        return (
          dataIndex && (
            <a
              href={import.meta.env.VITE_API_URL + JSON.parse(dataIndex)[0]}
              target="_blank"
              download
            >
              <SvgIcon src="excel-svgrepo-com.svg" width="20px" height="" />
            </a>
          )
        );
      },
    },
    {
      title: "Tercer Trimestre",
      dataIndex: "thirdTrimester",
      render: (dataIndex) => {
        return (
          dataIndex && (
            <a
              href={import.meta.env.VITE_API_URL + JSON.parse(dataIndex)[0]}
              target="_blank"
              download
            >
              <SvgIcon src="excel-svgrepo-com.svg" width="20px" height="" />
            </a>
          )
        );
      },
    },
    {
      title: "Cuarto Trimestre",
      dataIndex: "fourthTrimester",
      render: (dataIndex) => {
        return (
          dataIndex && (
            <a
              href={import.meta.env.VITE_API_URL + JSON.parse(dataIndex)[0]}
              target="_blank"
              download
            >
              <SvgIcon src="excel-svgrepo-com.svg" width="20px" height="" />
            </a>
          )
        );
      },
    },
  ];

  useEffect(() => {
    dispatch(getComptroller());
    dispatch(getPublicInfo());
  }, [dispatch]);

  return (
    <>
      <HeroCms scrollDown={ScrollDown} title="Contraloría" description="" />
      <NavBarC />
      <Section className="with-gradient-bg" id="noticias">
        <WLayout className="form-grid">
          <FormBlock>
            <FormLayout>
              <FormImage>
                <RevealImageTrigger>
                  <img
                    src="/images/contraloria/LINEAMIENTOS QUEJAS Y SUGERENCIAS pagina.jpg"
                    alt=""
                    className="cover-image fit-top cover"
                  />
                  <BgForAnimation />
                </RevealImageTrigger>
              </FormImage>
            </FormLayout>
            <ComplaintsMailBox />
          </FormBlock>
          <FormBlock className="is-2nd">
            <CustomList>
              {publicInfo.length > 0 &&
                publicInfo.map((item: any) => (
                  <CustomListItem>
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
                ))}
            </CustomList>
            <OrnamentVertical />
          </FormBlock>
        </WLayout>
      </Section>

      <DataTableWrapper id="data">
        <Gallery options={optionsSlide}>
          <div className="photoswip">
            <Item
              original="/images/contraloria/CÓDIGO DE CONDUCTA GENERAL.jpg"
              thumbnail=""
              width="1340"
              height="768"
            >
              {({ ref, open }) => (
                <img
                  style={{
                    width: "100%",
                    height: "220px",
                    objectFit: "cover",
                  }}
                  ref={ref}
                  onClick={open}
                  src="/images/contraloria/CÓDIGO DE CONDUCTA GENERAL.jpg"
                />
              )}
            </Item>
            <Item
              original="/images/contraloria/CÓDIGO DE ÉTICA GENERAL.jpg"
              thumbnail=""
              width="1340"
              height="768"
            >
              {({ ref, open }) => (
                <img
                  style={{
                    width: "100%",
                    height: "220px",
                    objectFit: "cover",
                  }}
                  ref={ref}
                  onClick={open}
                  src="/images/contraloria/CÓDIGO DE ÉTICA GENERAL.jpg"
                />
              )}
            </Item>
          </div>
        </Gallery>
        {comptroller.length > 0 && (
          <Table
            columns={columns}
            dataSource={comptroller ? comptroller : []}
          />
        )}
      </DataTableWrapper>
    </>
  );
};

export default Comptroller;
