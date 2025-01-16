import Image from "../Image";
import { SvgIcon } from "../SvgIcon";
import {
  ButtonIconMain,
  ButtonIconSvg,
  ModalContent,
  ModalOverlay,
  SubscribeModal,
  SubscribeModalWrapper,
} from "./styles";

const Modal = ({ show, set }: any) => {
  return (
    <SubscribeModalWrapper show={show}>
      <SubscribeModal>
        <ButtonIconMain
          onClick={() => {
            set(!show);
          }}
        >
          <ButtonIconSvg>
            <SvgIcon src="close-svgrepo-com.svg" width="20px" height="" />
          </ButtonIconSvg>
        </ButtonIconMain>
        <Image
          src={"PHOTO-2024-11-16-13-29-34.jpg"}
          alt={""}
          cls={"subrcribe-image"}
          location={"main"}
        />
        <ModalContent>
          <div>
            <div className="second">
              <h4>Querido Pueblo Atotonilquense: </h4>
              <p>
                Nuestro Municipio Atotonilco el Grande, esta viviendo una etapa
                historica que sin duda se quedará en la memoria de todas y todos
                ustedes, por primera vez el rumbo de nuestro municipio esta en
                manos de una mujer; Ser la primera mujer presidenta de nuestro
                querido Atotonilco el Grande, es una encomienda que hoy asumo
                con mucho orgullo y responsabilidad, pero sobre todo muy
                consiente que hay retos que debemos enfrentar.
              </p>
              <p>
                Recuperar la confianza de la ciudadania no será tarea fácil, sin
                embargo, somos un gobierno emanado de la voluntad popular y
                electo democraticamente, mi compromiso con el pueblo
                Atotonilquense es gobernar de manera diferente, siendo un
                gobierno honesto, con servicio a la comunidad responsable y
                verdaderamente cercano a la gente.
              </p>
              <p>
                Estar a la altura de las expectativas de nuestros gobernados
                será prioridad en mi gobierno, por lo que estoy convencida que
                la profesionalización de los servicios públicos, aunado a una
                verdadera vocación de los servidores públicos y entrega hacia la
                comunidad, traerán consigo un mejoramiento en las condiciones
                actuales de nuestro municipio, reflejado en el bienestar y el
                desarrollo de cada familia de todas las comunidades de nuestra
                localidad.
              </p>
              <p>
                El inicio de nuestra administración deberá ser planeada y
                ordenada, por lo que apartir de las propuestas recibidas en mi
                recorrido en las comunidades y con la ayuda de la población
                altamente participativa en las mesas de trabajo y la encuesta
                virtual nos permitió la elaboración el Plan Municipal de
                Desarrollo 2024 – 2027, siendo este el documento rector que nos
                permitirá caminar con certeza hacia la construcción de un
                municipio más justo, equitativo y democrático.
              </p>
              <p>
                El presente Plan Municipal de Desarrollo 2024 - 2027 pretende
                observar y atender ciudadosamente las necesidades de la
                ciudadanía, prioritariamente de nuestras mujeres, niñas,
                hombres, niños, adolescentes, adultos mayores y ciudadanos con
                capacidades diferentes, en cada uno de los objetivos,
                estrategias y lineas de acción plasmados.
              </p>
              <p>
                Reconocer que el pueblo me ha otorgado el poder para gobernar,
                me impulsa a hacer las cosas de manera diferente honesta es por
                ello que mi gobierno rendirá cuentas claras sobre los recursos
                públicos, comprometido a ser un gobierno cuidadoso del gasto
                público; la transparencia será una acción permanente y constante
                de nuestra administración.
              </p>
              <p>
                De igual manera para mi gobierno es fundamental promover un
                desarrrollo sostenible, tal como lo establece la Agenda 2030,
                promoviendo el cuidado en todo momento del medio ambiente para
                la generación de proyectos productivos sustentables a corto,
                mediano y largo plazo.
              </p>
              <p>
                Mi objetivo es lograr que nuestro municipio eleve su potencial y
                sea reconocido en la región como destino estratégico con
                crecimiento turístico, cultural, económico y social.
              </p>
              <p>
                Amigas y amigos estoy segura que con la riqueza cultural,
                historica y gastronomica con la que cuenta nuestro municipio,
                juntos caminaremos Sociedad y Gobierno hacia el bienestar común,
                donde todas y todos nos sientamos orgullosos y podamos tener una
                mejor calidad de vida con más y mejores oportunidades, porque
                sabemos quienes somos y de que somos capaces, nos queda el deber
                puntual de construir un futuro acorde a la grandeza de nuestro
                pasado y a las expectativas del presente. Mi compromiso como
                Presidenta Municipal es hacerle honor al nombre que lleva
                nuestro bello municipio ATOTONILCO EL GRANDE juntos lo
                lograremos por amor nuestro pueblo…
              </p>
            </div>
          </div>
        </ModalContent>
      </SubscribeModal>
      <ModalOverlay />
    </SubscribeModalWrapper>
  );
};

export default Modal;
