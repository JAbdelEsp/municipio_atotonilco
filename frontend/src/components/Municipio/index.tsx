import Image from "../../common/Image";
import { SvgIcon } from "../../common/SvgIcon";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import {
  BlogRichDetails,
  BlogSingleContentWrap,
  BlogSingleDivider,
  BlogSingleSocialBox,
  BlogSingleWrap,
  Container,
  DateBoxWrap,
  HeroDivider,
  InnerCardTopBox,
  InnerDateBox,
  InnerTitle,
  MailBoxWrap,
  MinDesPara,
  MinimumDescription,
  ReadBox,
  ReadyContent,
  RecentContentBox,
  RecentContentDesc,
  RecentContentTitle,
  RecentFromBlock,
  RecentMailFromWrap,
  RegularPara,
  Section,
  SectionTitleBox,
  SingleLeftBox,
  SingleRightBox,
  SingleSocialIcon,
  SocialIconBoxWrap,
  StayConnected,
  WFormDone,
  WFormFail,
  WriterTitleBoxWrap,
} from "./styles";

const Municipio = () => {
  const optionsSlide = {
    arrowPrev: false,
    arrowNext: false,
    zoom: false,
    close: false,
    counter: false,
    bgOpacity: 0.2,
    padding: { top: 20, bottom: 40, left: 100, right: 100 },
  };

  return (
    <Section id="data">
      <Container>
        <BlogSingleWrap>
          <SectionTitleBox>
            <InnerTitle>Conoce tú Municipio</InnerTitle>
          </SectionTitleBox>
          <DateBoxWrap>
            <InnerCardTopBox>
              <InnerDateBox>
                <RegularPara>Febrero, 4 2025</RegularPara>
              </InnerDateBox>
              <ReadBox>
                <MinDesPara>5 Minutos de Lectura</MinDesPara>
              </ReadBox>
            </InnerCardTopBox>
            <WriterTitleBoxWrap>
              <MinimumDescription>Escrita por: Cultura</MinimumDescription>
              <ReadyContent></ReadyContent>
            </WriterTitleBoxWrap>
          </DateBoxWrap>
          <BlogSingleDivider />
          <Image src="" location="" cls="blog-single-image" alt="" />
        </BlogSingleWrap>
        <BlogSingleContentWrap>
          <SingleLeftBox>
            <BlogSingleSocialBox>
              <StayConnected>
                ¡Síguenos en Nuestras Redes Sociales!
              </StayConnected>
              <SocialIconBoxWrap>
                <SingleSocialIcon
                  href="https://web.facebook.com/AyuntamientoAtotonilcoElGrande"
                  target="_blank"
                >
                  <SvgIcon src="facebook.svg" width="40px" height="" />
                </SingleSocialIcon>
              </SocialIconBoxWrap>
            </BlogSingleSocialBox>
            <RecentContentBox>
              <RecentContentTitle>Mantente Informado!</RecentContentTitle>
              <RecentContentDesc>
                Suscríbete para tener lo último del Municipio!
              </RecentContentDesc>
            </RecentContentBox>
            <MailBoxWrap>
              <RecentFromBlock>
                <form action="">
                  <RecentMailFromWrap>
                    <input className="input-field w-input" type="email" />
                    <input
                      className="subscribe-button"
                      type="submit"
                      value="Suscribete!"
                    />
                  </RecentMailFromWrap>
                </form>
                <WFormDone>
                  <div>Gracias, hemos recibido tu suscripcion!</div>
                </WFormDone>
                <WFormFail>Ooopss! Algo inesperado ha ocurrido!</WFormFail>
              </RecentFromBlock>
            </MailBoxWrap>
          </SingleLeftBox>
          <SingleRightBox>
            <BlogRichDetails>
              <h1>Atotonilco el Grande</h1>
              <p>
                El municipio tiene una extensión territorial de 426 km2 y es
                vecino de los municipios de Metztitlán, Metzquititlán, Huasca de
                Ocampo, Mineral del Chico, Omitlán de Juárez y una pequeña parte
                con el Estado de Veracruz. Está integrado por 119 comunidades,
                barrios, colonias y ramales.{" "}
              </p>
              <p>
                Podemos observar cuatro grandes regiones: la planicie de
                Vaquerías, la barranca del río de Venados, la meseta de
                Atotonilco y la cuenca del Rio Amajac. El Rio de Venados cruza
                el municipio por el norte y el Amajac o Moctezuma por el sur;
                por lo que se tiene una variedad de climas, dominando un
                agradable clima templado con lluvias en verano.
              </p>
              <p>
                Nuestra flora es muy variada y está conformada por árboles de
                ornato y frutales, arbustos, cactáceas, plantas silvestres
                comestibles y medicinales. La fauna se compone de una gran
                variedad de mamíferos, aves, batracios, reptiles e insectos,
                algunos de estos comestibles.
              </p>
              <p>
                Aunque existen antecedente prehistóricos en la región, la
                primera civilización en la región surgió bajo influencia
                teotihuacana y dejó restos arqueológicos en el municipio. Más
                adelante la región se vio bajo control chichimeca y más tarde
                mexica.
              </p>
              <p>
                Al iniciarse la conquista espiritual del territorio se
                construyeron las principales partes del templo y el claustro que
                datan de los años entre1542 y 1562, terminándose la construcción
                hacia 1586.
              </p>
              <p>
                Nuestra economía está sustentada desde la época colonial en la
                agricultura y la cría de ganado; además, somos un proveedor
                importante de alimentos, materiales y mano de obra. Actualmente,
                el comercio se suma a las principales actividades económicas:
                puedes visitar el tianguis ganadero los días miércoles y jueves
                en las instalaciones del rastro municipal o la plaza tradicional
                de los jueves y domingos en el centro.
              </p>
              <p>
                Atotonilco es desde hace tiempo un centro turístico importante,
                ya que contamos con el balneario de aguas termales de Santa
                María Amajac a cuyas aguas se le atribuyen propiedades curativas
                y la presa “El Comalillo”, donde se puede practicar la pesca y
                dar paseos en lancha. Se pueden visitar modestas construcciones
                religiosas de la época colonial en Santa María Amajac, San
                Martín, Santa Catarina, Los Reyes y San Nicolás Xhate.
              </p>
              <p>
                Algunos personajes destacados de nuestro municipio son el doctor
                Antonio Peñafiel Barranco, el general Serapio López Barrios, el
                licenciado Isaac Piña Pérez, el profesor Antonio palacios, el
                licenciado Jorge Viesca Palma, el C. José Ángeles Soberanes, el
                licenciado Pablo Téllez y nuestro historiador el doctor Víctor
                Manuel Ballesteros García.
              </p>
              <p>
                En la fiesta del Señor de Tezoquipan, celebrada el primer
                viernes de cuaresma, destaca la realización de la Feria del
                Mole; mientras que en la celebración patronal de San Agustín, el
                28 de agosto, se lleva a cabo el festival del cocol.
              </p>
              <p>
                El beisbol, el basquetbol y el futbol destacan entre los
                deportes que se practican en el municipio; además, recientemente
                cobra relevancia la práctica del ciclismo, que junto con el
                beisbol otorga al municipio reconocimiento nacional e
                internacional. La charrería, deporte nacional, también tiene un
                lugar importante en la población atotonilquense.
              </p>
              <p>
                Nuestros artesanos en la comunidad de Sanctorum producen piezas
                de palma como petates y sombreros y en El Contadero, diferentes
                productos de vara. En diferentes comunidades se elaboran prendas
                tejidas y con diferentes estilos de bordado; destacando
                recientemente la elaboración de bordados tipo Tenango.
              </p>
            </BlogRichDetails>
            <Gallery options={optionsSlide}>
              <div className="photoswip">
                <Item original="" thumbnail="" width="1340" height="768">
                  {({ ref, open }) => (
                    <img
                      style={{
                        width: "100%",
                        height: "220px",
                        objectFit: "cover",
                      }}
                      ref={ref}
                      onClick={open}
                      src=""
                    />
                  )}
                </Item>
              </div>
            </Gallery>
          </SingleRightBox>
          <HeroDivider />
        </BlogSingleContentWrap>
      </Container>
    </Section>
  );
};

export default Municipio;
