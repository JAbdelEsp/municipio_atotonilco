import styled from "styled-components";
export const Section = styled("section")`
  padding-top: 110px;
  padding-bottom: 40px;
  h4 {
    font-size: 36px;
  }
  .blog-single-image,
  .blog-single-image-box {
    border-radius: 12px;
  }
  .input-field {
    border: 0.5px solid var(--supporting);
    background-color: var(--supporting);
    color: var(--primary_color);
    border-radius: 8px;
    min-height: 48px;
    margin-bottom: 0;
    padding-top: 13px;
    padding-bottom: 13px;
    padding-left: 16px;
  }
  .subscribe-button {
    background-color: var(--primary_color);
    color: var(--backgorund);
    border-radius: 8px;
    min-height: 48px;
    padding: 13px 16px;
  }
  .w-input,
  .w-select {
    color: #333;
    vertical-align: middle;
    background-color: #fff;
    border: 1px solid #ccc;
    width: 100%;
    height: 38px;
    margin-bottom: 0px;
    padding: 8px 12px;
    font-size: 14px;
    line-height: 1.42857;
    display: block;
  }
  .content-image {
    width: 40em;
    height: 25em;
    object-fit: cover;
    border-radius: 12px;
  }

  .photoswip {
    display: grid;
    grid-template-columns: 340px 340px;
    grid-template-rows: minmax(50px, 220px);
    gap: 10px;
    > img {
      border-radius: 10px;
    }
  }
  @media screen and (max-width: 991px) {
    padding-top: 100px;
  }
  @media screen and (max-width: 767px) {
    .content-image {
      width: 40em;
      height: 25em;
      object-fit: cover;
      border-radius: 12px;
    }
  }
  @media screen and (max-width: 479px) {
    .content-image {
      width: 100%;
      height: 18em;
      object-fit: cover;
      border-radius: 12px;
    }
    .photoswip {
      grid-template-columns: 2fr;
    }
    h2 {
      font-size: min(30px, 3em);
    }
    h4 {
      font-size: min(26px, 3em);
    }
  }
`;
export const Container = styled("div")`
  max-width: 1410px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
`;
export const BlogSingleWrap = styled("div")`
  grid-column-gap: 40px;
  grid-row-gap: 40px;
  flex-flow: column;
  margin-bottom: 25px;
  display: flex;
  @media screen and (max-width: 991px) {
    grid-column-gap: 30px;
    grid-row-gap: 30px;
  }
`;
export const SectionTitleBox = styled("div")`
  padding-bottom: 5px;
  position: relative;
  overflow: hidden;
`;
export const InnerTitle = styled("h2")`
  color: var(--dark);
  margin-top: 0;
  margin-bottom: 0;
  font-size: min(160px, 7em);
  font-weight: 400;
  line-height: 100%;
`;
export const DateBoxWrap = styled("div")`
  justify-content: space-between;
  display: flex;
  @media screen and (max-width: 767px) {
    grid-column-gap: 15px;
    grid-row-gap: 15px;
    flex-flow: column;
  }
`;
export const InnerCardTopBox = styled("div")`
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  justify-content: flex-start;
  align-items: center;
  display: flex;
`;
export const InnerDateBox = styled("div")``;
export const RegularPara = styled("p")`
  color: var(--dark);
`;
export const ReadBox = styled("div")``;
export const MinDesPara = styled("p")`
  color: var(--dark);
  font-size: 16px;
  position: static;
  top: 13px;
`;
export const WriterTitleBoxWrap = styled("div")`
  grid-column-gap: 12px;
  grid-row-gap: 12px;
  justify-content: flex-start;
  align-items: center;
  display: flex;
`;
export const MinimumDescription = styled("div")`
  color: var(--dark);
  font-size: 16px;
  position: static;
  top: 13px;
`;
export const ReadyContent = styled("div")`
  font-weight: 500;
`;
export const BlogSingleDivider = styled("div")`
  background-color: var(--gray);
  height: 0.5px;
`;
export const BlogSingleImageBox = styled("div")`
  border-radius: 12px;
`;
export const BlogSingleContentWrap = styled("div")`
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1146px;
  display: flex;
  @media screen and (max-width: 991px) {
    flex-flow: column;
  }
`;
export const SingleLeftBox = styled("div")`
  max-width: 327px;
  position: sticky;
  top: 140px;
  @media screen and (max-width: 991px) {
    order: 1;
    max-width: 100%;
  }
`;
export const BlogSingleSocialBox = styled("div")`
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  flex-flow: column;
  margin-bottom: 60px;
  display: flex;
`;
export const StayConnected = styled("div")``;
export const SocialIconBoxWrap = styled("div")`
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  justify-content: flex-start;
  align-items: center;
  display: flex;
`;
export const SingleSocialIcon = styled("a")`
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  width: 34px;
  height: 34px;
  transition: background-color 0.3s ease-in-out;
  display: flex;
`;
export const RecentContentBox = styled("div")`
  grid-column-gap: 12px;
  grid-row-gap: 12px;
  flex-flow: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 24px;
  display: flex;
`;
export const RecentContentTitle = styled("h4")`
  color: var(--dark);
  margin-top: 0;
  margin-bottom: 0;
  font-size: 32px;
  font-weight: 400;
  line-height: 120%;
`;
export const RecentContentDesc = styled("div")`
  color: var(--dark);
`;
export const MailBoxWrap = styled("div")`
  margin-bottom: 32px;
`;
export const RecentFromBlock = styled("div")`
  margin-bottom: 0;
`;
export const RecentMailFromWrap = styled("div")`
  grid-column-gap: 8px;
  grid-row-gap: 8px;
  justify-content: flex-start;
  align-items: center;
  display: flex;
`;
export const WFormDone = styled("div")`
  text-align: center;
  background-color: #ddd;
  padding: 20px;
  display: none;
`;
export const WFormFail = styled("div")`
  background-color: #ffdede;
  margin-top: 10px;
  padding: 10px;
  display: none;
`;
export const SingleRightBox = styled("div")`
  max-width: 678px;
  @media screen and (max-width: 991px) {
    max-width: 100%;
  }
`;
export const BlogRichDetails = styled("div")`
  &:before {
    content: " ";
    grid-area: 1 / 1 / 2 / 2;
    display: table;
  }
  p {
    text-align: justify;
  }
`;
export const HeroDivider = styled("div")`
  background-color: var(--main-color-1);
  height: 0.5px;
  margin-top: 40px;
`;
