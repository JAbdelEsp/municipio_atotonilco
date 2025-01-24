import ButtonComponent from "../../common/Button";
import FormField from "../../common/FormField";
import Image from "../../common/Image";
import OrnamentVertical from "../../common/OrnamentVertical";
import { SvgIcon } from "../../common/SvgIcon";
import TextArea from "../../common/TextArea";
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
                <Image src="" alt="" location="" cls="cover-image fit-top" />
                <BgForAnimation />
              </RevealImageTrigger>
            </FormImage>
            <Form>
              <FormInner>
                <Heading className="is-contact-form-title">GET A </Heading>
                <ContactFormParagraph>Paragraph</ContactFormParagraph>
                <FormField
                  name="Name"
                  placeholder="Nombre"
                  type="text"
                  value=""
                  onChange={() => {}}
                />
                <FormField
                  name="email"
                  placeholder="Correo Electronico"
                  type="email"
                  value=""
                  onChange={() => {}}
                />
                <FormField
                  name="phone"
                  placeholder="Telefono"
                  type="phone"
                  value=""
                  onChange={() => {}}
                />
                <TextArea
                  name="message"
                  value=""
                  onChange={() => {}}
                  placeholder="Mensaje"
                />
                <ButtonComponent type="submit" onClick={() => {}}>
                  Enviar
                </ButtonComponent>
              </FormInner>
            </Form>
          </FormLayout>
        </FormBlock>
        <FormBlock className="is-2nd">
          <CustomList>
            <CustomListItem>
              <CustomListContent>
                <ListTitle>Title</ListTitle>
                <ListParagraph>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
                  enim reiciendis accusantium eos, et nesciunt quasi dolorem
                  mollitia quidem consequatur fugit voluptas eligendi officia
                  obcaecati sint inventore quos perspiciatis veniam.
                </ListParagraph>
              </CustomListContent>
              <ListLine />
            </CustomListItem>
            <CustomListItem>
              <CustomListContent>
                <ListTitle>Title</ListTitle>
                <ListParagraph>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
                  enim reiciendis accusantium eos, et nesciunt quasi dolorem
                  mollitia quidem consequatur fugit voluptas eligendi officia
                  obcaecati sint inventore quos perspiciatis veniam.
                </ListParagraph>
              </CustomListContent>
              <ListLine />
            </CustomListItem>
            <CustomListItem>
              <CustomListContent>
                <ListTitle>Title</ListTitle>
                <ListParagraph>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
                  enim reiciendis accusantium eos, et nesciunt quasi dolorem
                  mollitia quidem consequatur fugit voluptas eligendi officia
                  obcaecati sint inventore quos perspiciatis veniam.
                </ListParagraph>
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
