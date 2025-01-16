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
