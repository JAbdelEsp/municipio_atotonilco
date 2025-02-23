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
import Preloader from "../Preloader";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { CreateSubscription } from "../../slices/subscriptionsSlice";
import { useState } from "react";

const Article = ({ values }: { id: string; values: any }) => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("");
  const date = new Date();
  let content: any;
  const options = {
    method: "PUT",
  };
  useFetch(
    import.meta.env.VITE_API_URL +
      `news/views?id_news=${values[0].id_news}&views=${values[0].views + 1}`,
    options
  );
  const optionsSlide = {
    arrowPrev: false,
    arrowNext: false,
    zoom: false,
    close: false,
    counter: false,
    bgOpacity: 0.2,
    padding: { top: 20, bottom: 40, left: 100, right: 100 },
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append("date", date.toLocaleDateString("en-US"));
    await dispatch(CreateSubscription(formData));
    setEmail("");
  };

  const { data, status, error } = useFetch<any>(
    import.meta.env.VITE_API_URL + `news/pictures?id_news=${values[0].id_news}`
  );
  if (status === "loading") {
    content = <Preloader />;
  }
  if (error) {
  }
  if (status === "fetched" && data) {
    content = (
      <Gallery options={optionsSlide}>
        <div className="photoswip">
          {data.map((item: any, key: number) => (
            <Item
              key={key}
              original={
                import.meta.env.VITE_API_URL +
                `public/uploads/${values[0].id_news}/${item.pic}`
              }
              thumbnail={
                import.meta.env.VITE_API_URL +
                `public/uploads/${values[0].id_news}/${item.pic}`
              }
              width="1340"
              height="768"
            >
              {({ ref, open }) => (
                <img
                  style={{ width: "100%", height: "220px", objectFit: "cover" }}
                  ref={ref}
                  onClick={open}
                  src={
                    import.meta.env.VITE_API_URL +
                    `public/uploads/${values[0].id_news}/${item.pic}`
                  }
                />
              )}
            </Item>
          ))}
        </div>
      </Gallery>
    );
  }
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
                  <ReadBox></ReadBox>
                </InnerCardTopBox>
                <WriterTitleBoxWrap>
                  <MinimumDescription>Escrita por:</MinimumDescription>
                  <ReadyContent>{item.author}</ReadyContent>
                </WriterTitleBoxWrap>
              </DateBoxWrap>
              <BlogSingleDivider />
              <Image
                src={item.id_news + "/" + item.image}
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
                    <form onSubmit={onSubmit} autoComplete="off">
                      <RecentMailFromWrap>
                        <input
                          className="input-field w-input"
                          type="email"
                          name="email"
                          value={email}
                          onChange={(e: any) => setEmail(e.target.value)}
                          required
                        />
                        <input
                          className="subscribe-button"
                          type="submit"
                          value="Suscríbete!"
                        />
                      </RecentMailFromWrap>
                    </form>
                    <WFormDone>
                      <div>Gracias, hemos recibido tu suscripción!</div>
                    </WFormDone>
                    <WFormFail>Ooopss! Algo inesperado ha ocurrido!</WFormFail>
                  </RecentFromBlock>
                </MailBoxWrap>
              </SingleLeftBox>
              <SingleRightBox>
                <BlogRichDetails>{parse(item.content)}</BlogRichDetails>
                {content}
              </SingleRightBox>
              <HeroDivider />
            </BlogSingleContentWrap>
          </Container>
        ))}
    </Section>
  );
};

export default Article;
