import { Col, Row, Table, TableColumnsType } from "antd";
import HeroCms from "../../components/HeroCms";
import NavBarC from "../../components/NavBar";
import {
  CustomList,
  CustomListContent,
  CustomListItem,
  DataTableWrapper,
  FormBlock,
  FormLayout,
  ListLine,
  ListTitle,
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
      <HeroCms
        scrollDown={ScrollDown}
        title="Órgano Interno de Control"
        description="Tiene por objeto la vigilancia y evaluación del desempeño de las distintas áreas de la administración municipal, así como el cumplimiento de la Ley de Responsabilidades Administrativas del Estado de Hidalgo."
      />
      <NavBarC />
      <Section className="with-gradient-bg" id="data">
        <WLayout className="form-grid">
          <FormBlock>
            <FormLayout>
              <h2 style={{ color: "white" }}>Mensaje</h2>
              <p
                style={{
                  color: "#fff",
                  textAlign: "justify",
                  fontWeight: "200",
                }}
              >
                En el desarrollo de mis labores como Titular del Órgano de
                Control Interno, se cuenta con la participación social, para que
                no se subvaloren principios como el de rendición de cuentas;
                ante la existencia de áreas de oportunidad y de mejora en la
                actual administración, se propone que a las funciones señaladas
                en el artículo 106 de la Ley Orgánica Municipal, también se
                contemplen métodos como el optimizar al tiempo de gestión, la
                reducción del gasto corriente, la adopción de nuevas prácticas
                administrativas, el cómo deben conducirse los servidores
                públicos, el establecimiento de un esquema de control interno
                institucional que optimice la función y las actividades de las
                unidades administrativas del sector público municipal, y con la
                figura de organismos de participación ciudadana involucrados, se
                logre transparentar y brindar mayor certidumbre a la sociedad
                sobre el actuar en las instituciones públicas municipales.
              </p>
              <Row gutter={14}>
                <Col xs={24} sm={24} md={12} lg={12}>
                  <h2 style={{ color: "white" }}>Misión</h2>
                  <p
                    style={{
                      color: "#fff",
                      textAlign: "justify",
                      fontWeight: "200",
                    }}
                  >
                    Este Órgano de Control Interno tiene como propósito,
                    fomentar la participación ciudadana, ante todo la
                    transparencia y la rendición de cuentas, así como el cuidado
                    y protección del medio ambiente, acercando a la gente
                    mejores oportunidades económicas y desarrollando valores
                    sociales, como sujeto obligado, documenta todo acto que
                    derive del ejercicio de sus facultades, competencias o
                    funciones, así como transparenta y permite el acceso a la
                    información generada, obtenida, adquirida o en su posesión,
                    permitiendo el libre ejercicio de los derechos de acceso a
                    la información pública, con la sola limitante de la
                    protección de datos personales de una forma veraz, oportuna
                    y actualizada, impulsando un gobierno social, abierto,
                    participativo e incluyente, comprometido con la seguridad,
                    la eficiente prestación de los servicios públicos y el
                    aprovechamiento de los recursos para impulsar el bienestar
                    social de los Atotonilquenses.
                  </p>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12}>
                  <h2 style={{ color: "white" }}>Visión</h2>
                  <p
                    style={{
                      color: "#fff",
                      textAlign: "justify",
                      fontWeight: "200",
                    }}
                  >
                    Buscar y mantener la mejora continua, a través de resultados
                    de la administración pública, garantizando la transparencia
                    y combatiendo la corrupción, rendición de cuentas, con
                    acciones y estrategias tendentes a contribuir con un
                    gobierno municipal humano y transparente que garantiza el
                    respeto de los derechos humanos, en el que se salvaguarden
                    los principios de legalidad, honradez, lealtad,
                    imparcialidad y eficiencia, pendientes siempre de la
                    seguridad de sus habitantes y del desarrollo comunitario,
                    favoreciendo la participación de todos los grupos sociales,
                    mediante un gobierno honesto, políticas públicas de
                    bienestar social, incluyentes y equitativas que detonen el
                    desarrollo social, económico, cultural y político del
                    municipio.
                  </p>
                </Col>
              </Row>
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
                          height: "250px",
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
                          height: "250px",
                          objectFit: "cover",
                        }}
                        ref={ref}
                        onClick={open}
                        src="/images/contraloria/CÓDIGO DE ÉTICA GENERAL.jpg"
                      />
                    )}
                  </Item>
                  <Item
                    original="/images/contraloria/iNFOGRAFIA FEBRERO 2025.jpg"
                    thumbnail=""
                    width="1340"
                    height="768"
                  >
                    {({ ref, open }) => (
                      <img
                        style={{
                          width: "100%",
                          height: "250px",
                          objectFit: "cover",
                        }}
                        ref={ref}
                        onClick={open}
                        src="/images/contraloria/iNFOGRAFIA FEBRERO 2025.jpg"
                      />
                    )}
                  </Item>
                  <Item
                    original="/images/contraloria/LINEAMIENTOS QUEJAS Y SUGERENCIAS pagina.jpg"
                    thumbnail=""
                    width="1340"
                    height="768"
                  >
                    {({ ref, open }) => (
                      <img
                        style={{
                          width: "100%",
                          height: "250px",
                          objectFit: "cover",
                        }}
                        ref={ref}
                        onClick={open}
                        src="/images/contraloria/LINEAMIENTOS QUEJAS Y SUGERENCIAS pagina.jpg"
                      />
                    )}
                  </Item>
                </div>
              </Gallery>
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

      <DataTableWrapper>
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
