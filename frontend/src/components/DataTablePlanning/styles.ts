import styled from "styled-components";

export const DataTableWrapper = styled("div")`
  grid-column-gap: 2em;
  grid-row-gap: 2em;
  border-bottom: 1px solid var(--main-color-4);
  text-align: center;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1em 5em 5em;
  display: flex;

  .ant-select {
    width: 240px;
    height: 60px;
  }

  table {
    table-layout: fixed !important;
    width: 100%;
  }

  .pd-1 {
    padding: 1em;
  }

  @media screen and (max-width: 479px) {
    padding: 1em 1em 5em;
    .ant-table-content {
      overflow-x: scroll;
      .ant-table-cell {
        width: 200px;
      }
    }
  }

  nav {
    width: 45em;
    position: relative;
    right: 0;
    ul {
      list-style: none;
    }
    li {
      display: inline;
      padding: 5px 20px 5px 0;
      a {
        text-decoration: none;
        color: var(--gray);
      }
    }
  }
`;

export const WLayout = styled("div")`
  grid-row-gap: 16px;
  grid-column-gap: 16px;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr 1fr;
  grid-auto-columns: 1fr;
  display: grid;
  @media screen and (max-width: 991px) {
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: 479px) {
    grid-template-columns: 1fr;
  }
`;
export const FormBlock = styled("div")`
  justify-self: stretch;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 5em 8vw;
  display: flex;
  position: relative;
`;
