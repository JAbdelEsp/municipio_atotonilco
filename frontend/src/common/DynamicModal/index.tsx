import { Col, Row } from "antd";
import { SvgIcon } from "../SvgIcon";
import {
  ButtonIconMain,
  ButtonIconSvg,
  Container,
  FormGroup,
  Label,
  ModalContent,
  ModalOverlay,
  StyledInput,
  SubscribeModal,
  SubscribeModalWrapper,
} from "./styles";
import { useEffect, useState } from "react";
import FormField from "../FormField";

const DynamicModal = ({ show, set, query, onSubmit, onHandleChange }: any) => {
  const [email, setEmail] = useState("");
  const [uid, setUid] = useState("");
  useEffect(() => {
    setEmail("");
    setUid("");
  }, [show]);

  function uniqueId(prefix: string) {
    var id = +new Date() + "-" + Math.floor(Math.random() * 1000);
    return prefix ? prefix + id : id;
  }
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
        <img
          className="subrcribe-image"
          src="public/images/main/IMG_0372.jpg"
          alt="Atotonilco el Grande"
        />
        <ModalContent>
          <Row justify="space-between" align="middle">
            <Col lg={24} md={11} sm={24} xs={24}>
              <h2>Trámite: {query !== undefined && query.description}</h2>
            </Col>
            <Col lg={24} md={12} sm={24} xs={24}>
              <FormGroup
                onSubmit={onSubmit}
                autoComplete="off"
                encType="multipart/form-data"
              >
                <input
                  type="text"
                  name="resource"
                  value={query !== undefined && query.description}
                  hidden
                />
                <input type="text" name="register_number" hidden value={uid} />
                <input type="text" name="sent_email" value="" hidden />
                <FormField
                  name="user_email"
                  type="email"
                  value={email}
                  placeholder="Introduce tu Correo electrónico"
                  required={true}
                  onChange={(e: any) => {
                    setEmail(e.target.value);
                    setUid(uniqueId("MAG"));
                  }}
                />
                {query !== undefined &&
                  JSON.parse(query.requeriment).map(
                    (item: any, key: number) => (
                      <Col span={24} key={key}>
                        <Container>
                          <Label>{item}</Label>
                          <StyledInput
                            required
                            placeholder=""
                            name="files"
                            id="files"
                            type="file"
                            onChange={(e: any) => {
                              onHandleChange(e);
                            }}
                          />
                        </Container>
                      </Col>
                    )
                  )}
                <button type="submit">Enviar</button>
              </FormGroup>
            </Col>
          </Row>
          <p style={{ marginTop: "30px", color: "red" }}>
            Nota: Solo son aceptados archivos que cumplan estos criterios: PDF,
            JPG, JPEG
          </p>
        </ModalContent>
      </SubscribeModal>
      <ModalOverlay />
    </SubscribeModalWrapper>
  );
};

export default DynamicModal;
