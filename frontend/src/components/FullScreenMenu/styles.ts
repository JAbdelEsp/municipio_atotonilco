import { styled } from "styled-components";

export const FullMenuContainer = styled("div")`
  .fullscreen-menu-out {
    z-index: 99999;
    justify-content: space-between;
    align-items: stretch;
    position: fixed;
    top: -100%;
    left: 0%;
    right: 0%;
    overflow: hidden;
    animation: slideOut 0.6s ease-in-out;
  }
  .menu-sesondary-link {
    border-bottom: 2px solid rgba(255, 255, 255, 0);
    color: #040404;
    text-align: left;
    padding-top: 1vh;
    padding-bottom: 1vh;
    font-size: 1em;
    font-weight: 700;
    line-height: 1.1em;
    transition: border-color 0.2s;
  }
  .fullscreen-menu {
    z-index: 99999;
    justify-content: space-between;
    align-items: stretch;
    // display: none;
    position: fixed;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%;
    overflow: hidden;
    animation: slideIn 0.6s ease-in-out;
    .menu-layout {
      z-index: 10;
      flex-direction: row;
      flex: 1;
      justify-content: space-between;
      align-self: stretch;
      align-items: stretch;
      width: 100%;
      display: flex;
      position: relative;

      .menu-socials {
        z-index: 10;
        border-right: 1px solid #eaeaf6;;
        justify-content: center;
        align-items: center;
        width: 10em;
        padding-top: 10vh;
        padding-bottom: 10vh;
        transition: width 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
        display: flex;
        position: relative;

        .menu-social-wrapper {
          z-index: 20;
          .menu-social-list {
            grid-column-gap: 1.5em;
            grid-row-gap: 1.5em;
            flex-flow: column;
            justify-content: center;
            align-items: center;
            display: flex;
            .menu-social-link {
              z-index: 10;
              opacity: 0.6;
              color: rgba(245, 236, 234, 0.7);
              justify-content: center;
              align-items: center;
              width: 1.5em;
              height: 1.5em;
              padding-top: 0.5em;
              padding-bottom: 0.5em;
              transition: opacity 0.2s;
              display: flex;
              position: relative;
              overflow: hidden;
              .icon {
                border-radius: 3px;
              }
            }
          }
        }
          &:hover {
            width: 20em;
          }
        }
      }

      .menu-links-wrapper {
        z-index: 10;
        grid-column-gap: 10vh;
        grid-row-gap: 10vh;
        flex-flow: row;
        flex: 1;
        justify-content: flex-start;
        align-self: stretch;
        align-items: flex-start;
        width: 100%;
        padding: 15vh 5vw;
        display: flex;
        position: relative;
        overflow: auto;

        .secondary-links {
          grid-column-gap: 5vh;
          grid-row-gap: 5vh;
          flex-flow: column;
          justify-content: flex-start;
          align-items: flex-start;
          min-width: 12vw;
          padding-top: 4vh;
          display: flex;

          .secondary-links-block {
            flex-flow: column;
            justify-content: flex-start;
            align-items: flex-start;
            display: flex;

            .menu-small-text {
              opacity: 0.8;
              color:#eaeaf6;;
              letter-spacing: 0.1em;
              text-indent: 0.1em;
              text-transform: uppercase;
              margin-bottom: 2vh;
              font-size: 0.8em;
              font-weight: 700;
              line-height: 1em;
            }
          }
        }

        .menu-main-links {
          flex-flow: column;
          flex: 1;
          align-self: stretch;
          width: 100%;
          display: flex;
          .menu-link {
            border-bottom: 2px solid #eaeaf6;;
            opacity: 0.8;
            color: #eaeaf6;
            text-align: center;
            grid-template-rows: auto auto;
            grid-template-columns: 1fr 1fr;
            grid-auto-columns: 1fr;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            height: 100%;
            padding-top: 2vh;
            padding-bottom: 2vh;
            line-height: 1.1em;
            transition: opacity 0.2s, border-width 0.2s,
              height 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
            display: flex;
            overflow: hidden;
            &:hover {
                opacity: 1;
                border-bottom-width: 5px;
                height: 115%;
            }
          }
          .w--current {
            opacity: 1;
            color: #eaeaf6;;
            border-bottom-width: 5px;
          }
          .menu-link-text {
            font-size: 7vh;
            font-weight: 800;
            line-height: 1em;
          }
        }
      }

      .close-button {
        z-index: 10;
        grid-column-gap: 1.5em;
        grid-row-gap: 1.5em;
        border-left: 1px solid #eaeaf6;;
        cursor: pointer;
        color:#eaeaf6;
        background-image: linear-gradient(
          rgba(0, 0, 0, 0.05),
          rgba(0, 0, 0, 0.05)
        );
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 10em;
        padding-top: 10vh;
        padding-bottom: 10vh;
        line-height: 1.1em;
        transition: all 0.2s;
        display: flex;
        position: relative;
        .close-button-icon {
          z-index: 10;
          object-fit: contain;
          width: 1em;
          height: 1em;
          font-size: 1.5em;
          position: relative;
        }
        .menu-close-text {
            letter-spacing: .3em;
            text-transform: uppercase;
            writing-mode: vertical-rl;
            font-size: 1em;
            font-weight: 800;
        }
      }
      .menu-background-color {
        background-color: #9C202A;
        border-right: 1px solid rgba(201, 155, 143, 0.5);
        position: fixed;
        top: 0%;
        bottom: 0%;
        left: 0%;
        right: 0%;
      }
      .menu-delay-for-animations {
        z-index: 100;
        display: none;
        position: absolute;
        top: 0%;
        bottom: 0%;
        left: 0%;
        right: 0%;
      }
    }
  }

    @keyframes slideIn {
      0% {
        top: -100%;
        // transform: scale(2);
        opacity: 0;
      }
      100% {
          top: 0%;
          // transform:scale(1);
          opacity: 1;
      }
    }

    @keyframes slideOut {
      0% {
        top: 20%;
        // transform: scale(2);
        opacity: 0;
      }
      100% {
          top: 100%;
          // transform:scale(1);
          opacity: 1;
      }
    }
    @media screen and (max-width: 991px) {
      .menu-layout {
        flex-flow: wrap !important;
        overflow: auto !important;
      }
      .menu-socials {
        border-top: 1px solid #eaeaf6; !important;
        border-right-width: 0 !important;;
        width: 100% !important;
        padding-top: 2.5em !important;
        padding-bottom: 2.5em !important;
        .menu-social-list {
          flex-flow: row !important;
          .icon {
             width: 1.5em !important;  
          }
        }
      }
      .menu-links-wrapper {
          grid-column-gap: 4em !important;
          grid-row-gap: 4em !important;;
          flex-flow: column !important;
          order: -1 !important;
          padding: 8em 10vw 4em !important;
          .secondary-links {
            grid-column-gap: 2em !important;
            grid-row-gap: 2em !important;
            width: 100% !important;
            min-width: auto !important;;
            padding-top: 0 !important;
            .secondary-links-block {
              grid-column-gap: 2em !important;
              grid-row-gap: 1em !important;
              flex-flow: wrap !important;
              width: 100% !important;
              .menu-small-text {
                width: 100% !important;
                margin-bottom: 0 !important;
              }
              .menu-sesondary-link {
                padding-top: .3em !important;
                padding-bottom: .3em !important;
              }
            }
          }
          .menu-main-links {
            order: -1 !important;
            .menu-link-text {
              font-size: min(10vw, 36px) !important;
            }
          }
      }
      .close-button {
        grid-column-gap: 1em !imporant;
        grid-row-gap: 1em!important;
        border-bottom: 1px solid #eaeaf6;!important;
        opacity: 1!important;
        border-left-width: 0!important;
        flex-flow: row!important;
        width: 100%!important;
        padding-top: 1.5em!important;
        padding-bottom: 1.5em!important;
        position: absolute!important;
        top: 0%!important;
        bottom: auto!important;
        left: 0%!important;
        right: 0%!important;
        .close-button-icon {
          margin-bottom: 2em;
        }
        .menu-close-text {
          writing-mode: horizontal-tb !important;
          font-size: .8em !important;
        }
      }
    }
`;
