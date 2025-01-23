import Image from "../../common/Image";
import { SvgIcon } from "../../common/SvgIcon";
import parse from "html-react-parser";
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
import useFetch from "../../services";

const Article = ({ id, values }: { id: string; values: any }) => {
  const options = {
    method: "PUT",
  };
  useFetch(
    `https://k753lncj-9000.usw3.devtunnels.ms/news/views?id_news=${
      values[0].id_news
    }&views=${values[0].views + 1}`,
    options
  );

  return (
    <Section>
      {values &&
        values.map((item: any, key: number) => (
          <Container key={key}>
            <BlogSingleWrap>
              <SectionTitleBox>
                <InnerTitle>{item.title}</InnerTitle>
              </SectionTitleBox>
              <DateBoxWrap>
                <InnerCardTopBox>
                  <InnerDateBox>
                    <RegularPara>{item.date}</RegularPara>
                  </InnerDateBox>
                  <ReadBox>
                    <MinDesPara>{item.time} Lectura</MinDesPara>
                  </ReadBox>
                </InnerCardTopBox>
                <WriterTitleBoxWrap>
                  <MinimumDescription>Escrita por:</MinimumDescription>
                  <ReadyContent>{item.author}</ReadyContent>
                </WriterTitleBoxWrap>
              </DateBoxWrap>
              <BlogSingleDivider />
              <Image
                src={item.title + "/" + item.image}
                location={item.path}
                cls="blog-single-image"
                alt={item.title}
              />
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
                <BlogRichDetails>{parse(item.content)}</BlogRichDetails>
                <Gallery>
                  <Item
                    original="https://placekitten.com/1024/768?image=1"
                    thumbnail="https://placekitten.com/80/60?image=1"
                    width="1024"
                    height="768"
                  >
                    {({ ref, open }) => (
                      <img
                        ref={ref}
                        onClick={open}
                        src="https://placekitten.com/80/60?image=1"
                      />
                    )}
                  </Item>
                  <Item
                    original="https://placekitten.com/1024/768?image=2"
                    thumbnail="https://placekitten.com/80/60?image=2"
                    width="1024"
                    height="768"
                  >
                    {({ ref, open }) => (
                      <img
                        ref={ref}
                        onClick={open}
                        src="https://placekitten.com/80/60?image=2"
                      />
                    )}
                  </Item>
                </Gallery>
              </SingleRightBox>
              <HeroDivider />
            </BlogSingleContentWrap>
          </Container>
        ))}
    </Section>
  );
};

export default Article;
