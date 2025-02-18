import ButtonComponent from "../../common/Button";
import {
  ContactGrid,
  Container,
  FieldGrid,
  InquiryDivider,
  InquiryFlex,
  InquiryGrid,
  Lighter,
  LightText,
  MainTitle,
  Section,
  TextArea,
  TextField,
  ThirdTitle,
  Wform,
} from "./styles";

const MailBox = () => {
  return (
    <main>
      <Section>
        <Container>
          <div>
            <MainTitle>
              Contac
              <Lighter>tanos</Lighter>
            </MainTitle>
          </div>
        </Container>
      </Section>
      <Section className="add-top">
        <div>
          <ContactGrid>
            <InquiryGrid>
              <InquiryFlex>
                <div>
                  <ThirdTitle>
                    Comunicacion
                    <LightText>Efectiva</LightText>
                  </ThirdTitle>
                </div>
              </InquiryFlex>
              <InquiryDivider />
            </InquiryGrid>
            <div style={{ marginTop: "7em" }}>
              <div>
                <Wform>
                  <form action="" autoComplete="off">
                    <FieldGrid>
                      <TextField
                        name="name"
                        placeholder="Nombre"
                        type="text"
                        required
                      />
                      <TextField
                        name="email"
                        placeholder="Email"
                        type="email"
                        required
                      />
                      <TextArea placeholder="Escribe tu mensaje" required />
                    </FieldGrid>
                    <div style={{ marginTop: "2em" }}>
                      <ButtonComponent
                        onClick={function (): void {
                          throw new Error("Function not implemented.");
                        }}
                        type={"button"}
                      >
                        Enviar
                      </ButtonComponent>
                    </div>
                  </form>
                </Wform>
              </div>
            </div>
          </ContactGrid>
        </div>
      </Section>
    </main>
  );
};

export default MailBox;
