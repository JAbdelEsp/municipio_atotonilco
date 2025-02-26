import { createGlobalStyle } from "styled-components";

export const Styles = createGlobalStyle`
    :root {
        --main-color-1: #BE1622;
        --main-color-2: #706F6F;
        --gray: #9D9D9C;
        --dark: #1D1D1B;
        --sans-font: "Noto Sans Variable",sans-serif;
        --white: #fff;
        --serif-font: "Fraunces Variable",sans-serif;
        --transparent: #fff0;
        --radius: 0px;
        --radius-large: 50em;
    }
    .with-gradient-bg {
        background-image: linear-gradient(180deg, #1a1829, #fff0);
    }
    .paralax-image {
        object-fit: cover;
        width: 100%;
        height: 110%;
        position: absolute;
        bottom: 0;
    }
    .paralax-image-contain {
        object-fit: contain;
        width: 100%;
        height: 110%;
        position: absolute;
        bottom: 0;
    }
    .w-pagination-previous, 
    .w-pagination-next {
        color: #333;
        background-color: #fafafa;
        border: 1px solid #ccc;
        border-radius: 2px;
        font-size: 14px;
        display: block;
    }
    .w-inline-block {
        max-width: 100%;
        display: inline-block;
    }
    .for-pagination {
        background-color: var(--third-color);
        color: var(--dark);
        width: 32px;
        height: 32px;
        position: relative;
        top: 0;
        right: 0;
    }
    .icon-pagination {
        
    }
    .w-embed:before, .w-embed:after {
        content: " ";
        grid-area: 1 / 1 / 2 / 2;
        display: table;
    }
    .previous {
        padding-left: 5px;
        padding-right: 15px;
    }
         .horizontal {
    grid-column-gap: 45px;
    grid-row-gap: 45px;
    justify-content: flex-start;
    align-items: flex-start;
    display: flex;
  }
`;
