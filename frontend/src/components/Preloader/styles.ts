import styled from "styled-components";

export const Loading = styled("div")`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--main-color-1);
  z-index: 999999;
  .loading-text {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    text-align: center;
    width: 100%;
    height: 100px;
    line-height: 100px;
  }
  .loading-text span {
    display: inline-block;
    margin: 0 5px;
    color: #fff;
    font-family: "Quattrocento Sans", sans-serif;
  }
  .loading-text span:nth-child(1) {
    filter: blur(0px);
    -webkit-animation: blur-text 1.5s 0s infinite linear alternate;
    animation: blur-text 1.5s 0s infinite linear alternate;
  }
  .loading-text span:nth-child(2) {
    filter: blur(0px);
    -webkit-animation: blur-text 1.5s 0.2s infinite linear alternate;
    animation: blur-text 1.5s 0.2s infinite linear alternate;
  }
  .loading-text span:nth-child(3) {
    filter: blur(0px);
    -webkit-animation: blur-text 1.5s 0.4s infinite linear alternate;
    animation: blur-text 1.5s 0.4s infinite linear alternate;
  }
  .loading-text span:nth-child(4) {
    filter: blur(0px);
    -webkit-animation: blur-text 1.5s 0.6s infinite linear alternate;
    animation: blur-text 1.5s 0.6s infinite linear alternate;
  }
  .loading-text span:nth-child(5) {
    filter: blur(0px);
    -webkit-animation: blur-text 1.5s 0.8s infinite linear alternate;
    animation: blur-text 1.5s 0.8s infinite linear alternate;
  }
  .loading-text span:nth-child(6) {
    filter: blur(0px);
    -webkit-animation: blur-text 1.5s 1s infinite linear alternate;
    animation: blur-text 1.5s 1s infinite linear alternate;
  }
  .loading-text span:nth-child(7) {
    filter: blur(0px);
    -webkit-animation: blur-text 1.5s 1.2s infinite linear alternate;
    animation: blur-text 1.5s 1.2s infinite linear alternate;
  }
  .loading-text span:nth-child(8) {
    filter: blur(0px);
    -webkit-animation: blur-text 1.5s 1.3s infinite linear alternate;
    animation: blur-text 1.5s 1.3s infinite linear alternate;
  }
  .loading-text span:nth-child(9) {
    filter: blur(0px);
    -webkit-animation: blur-text 1.5s 1.4s infinite linear alternate;
    animation: blur-text 1.5s 1.4s infinite linear alternate;
  }
  .loading-text span:nth-child(10) {
    filter: blur(0px);
    -webkit-animation: blur-text 1.5s 1.5s infinite linear alternate;
    animation: blur-text 1.5s 1.5s infinite linear alternate;
  }

  @-webkit-keyframes blur-text {
    0% {
      filter: blur(0px);
    }
    100% {
      filter: blur(4px);
    }
  }

  @keyframes blur-text {
    0% {
      filter: blur(0px);
    }
    100% {
      filter: blur(4px);
    }
  }
`;
