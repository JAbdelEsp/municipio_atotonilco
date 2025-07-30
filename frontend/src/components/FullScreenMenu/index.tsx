import { FullMenuContainer } from "./styles";
import { SvgIcon } from "../../common/SvgIcon";
import { useNavigate } from "react-router-dom";
const FullScreenMenu = ({
  toggleMenu,
  visible,
}: {
  toggleMenu: () => void;
  visible: boolean;
}) => {
  const history = useNavigate();
  const goTo = (path: string) => {
    history(path);
    visible = false;
  };

  return (
    <FullMenuContainer>
      <div
        className={visible ? "fullscreen-menu" : "fullscreen-menu-out"}
        style={{ display: visible ? "flex" : "none" }}
      >
        <div className="menu-layout">
          <div className="menu-socials" style={{ opacity: visible ? 1 : 0 }}>
            <div className="menu-social-wrapper w-dyn-list">
              <div role="list" className="menu-social-list w-dyn-items">
                <div role="listitem" className="menu-social-item w-dyn-item">
                  <a
                    href="https://www.facebook.com/AyuntamientoAtotonilcoElGrande"
                    target="_blank"
                    className="menu-social-link w-inline-block"
                  >
                    <SvgIcon src="facebook.svg" width="40px" height="" />
                  </a>
                </div>
                <div role="listitem" className="menu-social-item w-dyn-item">
                  <a
                    href="https://www.instagram.com/atotonilcoelgrandeayuntamiento?igsh=MW9jMWZoYmk4N2E2dw%3D%3D&utm_source=qr"
                    target="_blank"
                    className="menu-social-link w-inline-block"
                  >
                    <SvgIcon src="instagram.svg" width="26px" height="" />
                  </a>
                </div>
                <div role="listitem" className="menu-social-item w-dyn-item">
                  <a
                    href="https://whatsapp.com/channel/0029Vb4KJO5Fsn0bZHR76T47"
                    target="_blank"
                    className="menu-social-link w-inline-block"
                  >
                    <SvgIcon src="whatsapp.svg" width="26px" height="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="menu-links-wrapper"
            style={{ opacity: visible ? 1 : 0 }}
          >
            <div
              className="secondary-links"
              style={{
                opacity: visible ? 1 : 0,
                transform:
                  "translate3d(0px, 3em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
            >
              <div className="secondary-links-block">
                <p className="menu-small-text">Contacto</p>
                <a href="tel:7747430040" className="menu-sesondary-link">
                  774 7430040
                </a>
                <a
                  href="mailto:secretaria.municipal@atotonilcoelgrande.gob.mx"
                  className="menu-sesondary-link"
                >
                  Secretaria Municipal
                </a>
              </div>
              <div className="secondary-links-block">
                <p className="menu-small-text">Números de Emergencia</p>
                <a href="tel:7747432002" className="menu-sesondary-link">
                  Seguridad Pública Municipal y Protección Civil
                </a>
                <a href="tel:911" className="menu-sesondary-link">
                  Emergencias
                </a>
              </div>
              <div className="secondary-links-block">
                <p className="menu-small-text">Plan Municipal de Desarrollo</p>
                <a
                  href="https://atotonilcoelgrande.gob.mx/public/files/PMD.pdf"
                  target="_blank"
                  className="menu-sesondary-link"
                >
                  <SvgIcon src="read-svgrepo-com.svg" width="30px" height="" />
                </a>
              </div>
            </div>
            <div className="menu-main-links">
              <a
                data-w-id="6dce1659-1f78-7d00-7eed-5d600171ac2e"
                onClick={() => {
                  goTo("/");
                  toggleMenu();
                }}
                aria-current="page"
                className="menu-link w-inline-block w--current"
              >
                <div
                  className="menu-link-text"
                  style={{
                    transform:
                      "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  Inicio
                </div>
                <img
                  src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668bd563537f10fdc41ac01e_arrow_forward_24dp_FILL0_wght600_GRAD0_opsz24.svg"
                  loading="lazy"
                  alt=""
                  className="icon is-menu-link-icon"
                />
              </a>
              <a
                data-w-id="6dce1659-1f78-7d00-7eed-5d600171ac2e"
                onClick={() => {
                  goTo("/gobierno");
                  toggleMenu();
                }}
                aria-current="page"
                className="menu-link w-inline-block"
              >
                <div
                  className="menu-link-text"
                  style={{
                    transform:
                      "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  Gobierno 2024-2027
                </div>
                <img
                  src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668bd563537f10fdc41ac01e_arrow_forward_24dp_FILL0_wght600_GRAD0_opsz24.svg"
                  loading="lazy"
                  alt=""
                  className="icon is-menu-link-icon"
                />
              </a>
              <a
                data-w-id="9119eb55-b515-23ab-3ca6-d7a893b67ca0"
                onClick={() => {
                  goTo("/transparencia");
                  toggleMenu();
                }}
                className="menu-link w-inline-block"
              >
                <div
                  className="menu-link-text"
                  style={{
                    transform:
                      "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  Transparencia
                </div>
                <img
                  src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668bd563537f10fdc41ac01e_arrow_forward_24dp_FILL0_wght600_GRAD0_opsz24.svg"
                  loading="lazy"
                  alt=""
                  className="icon is-menu-link-icon"
                />
              </a>
              <a
                data-w-id="9119eb55-b515-23ab-3ca6-d7a893b67ca0"
                onClick={() => {
                  goTo("/direcciones/#PlaneacionInfoPub");
                  toggleMenu();
                }}
                className="menu-link w-inline-block"
              >
                <div
                  className="menu-link-text"
                  style={{
                    transform:
                      "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  Planeación
                </div>
                <img
                  src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668bd563537f10fdc41ac01e_arrow_forward_24dp_FILL0_wght600_GRAD0_opsz24.svg"
                  loading="lazy"
                  alt=""
                  className="icon is-menu-link-icon"
                />
              </a>
              <a
                data-w-id="bdd489b8-8031-113b-2ffa-b5e1c5758ce0"
                onClick={() => {
                  goTo("/tramites");
                  toggleMenu();
                }}
                className="menu-link w-inline-block"
              >
                <div
                  className="menu-link-text"
                  style={{
                    transform:
                      "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  Trámites y Servicios
                </div>
                <img
                  src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668bd563537f10fdc41ac01e_arrow_forward_24dp_FILL0_wght600_GRAD0_opsz24.svg"
                  loading="lazy"
                  alt=""
                  className="icon is-menu-link-icon"
                />
              </a>
              <a
                data-w-id="bdd489b8-8031-113b-2ffa-b5e1c5758ce0"
                onClick={() => {
                  goTo("/transparencia/tesoreria");
                  toggleMenu();
                }}
                className="menu-link w-inline-block"
              >
                <div
                  className="menu-link-text"
                  style={{
                    transform:
                      "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  Tesorería
                </div>
                <img
                  src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668bd563537f10fdc41ac01e_arrow_forward_24dp_FILL0_wght600_GRAD0_opsz24.svg"
                  loading="lazy"
                  alt=""
                  className="icon is-menu-link-icon"
                />
              </a>
              <a
                data-w-id="bdd489b8-8031-113b-2ffa-b5e1c5758ce0"
                onClick={() => {
                  goTo("/noticias");
                  toggleMenu();
                }}
                className="menu-link w-inline-block"
              >
                <div
                  className="menu-link-text"
                  style={{
                    transform:
                      "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  Noticias
                </div>
                <img
                  src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668bd563537f10fdc41ac01e_arrow_forward_24dp_FILL0_wght600_GRAD0_opsz24.svg"
                  loading="lazy"
                  alt=""
                  className="icon is-menu-link-icon"
                />
              </a>
              <a
                data-w-id="bdd489b8-8031-113b-2ffa-b5e1c5758ce0"
                onClick={() => {
                  goTo("/municipio");
                  toggleMenu();
                }}
                className="menu-link w-inline-block"
              >
                <div
                  className="menu-link-text"
                  style={{
                    transform:
                      "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  Tu Municipio
                </div>
                <img
                  src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/668bd563537f10fdc41ac01e_arrow_forward_24dp_FILL0_wght600_GRAD0_opsz24.svg"
                  loading="lazy"
                  alt=""
                  className="icon is-menu-link-icon"
                />
              </a>
            </div>
          </div>
          <div
            data-w-id="b1ec2d20-05dc-077d-da18-86120beceaae"
            className="close-button"
            style={{ opacity: visible ? 1 : 0 }}
            onClick={() => toggleMenu()}
          >
            <img
              src="https://cdn.prod.website-files.com/668bd563537f10fdc41abec9/6697fb309b7a20920ffdcdb1_close_24dp_181720_FILL0_wght500_GRAD0_opsz24.svg"
              loading="lazy"
              alt=""
              className="close-button-icon"
              style={{
                transform:
                  "translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
            />
            <div className="menu-close-text">Cerrar</div>
          </div>
          <div
            className="menu-background-color"
            style={
              visible
                ? {
                    transform:
                      "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                  }
                : {
                    transform:
                      "translate3d(0px, -101%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                  }
            }
          ></div>
          <div
            className="menu-delay-for-animations"
            style={{ display: visible ? "none" : "block" }}
          ></div>
        </div>
      </div>
    </FullMenuContainer>
  );
};
export default FullScreenMenu;
