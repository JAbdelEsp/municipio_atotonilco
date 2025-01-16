import { Table, TableColumnsType } from "antd";
import DropDown from "../DropDown";
import { DataTableWrapper } from "./styles";
import { DataType } from "../types";
import useFetch from "../../services";
import { useEffect, useState } from "react";
import Preloader from "../../components/Preloader";

const DataTableTransparency = () => {
  const [article70, setArticle70] = useState<DataType[]>();
  const [article69, setArticle69] = useState<DataType[]>();
  const _handleChange = (value: string) => {
    if (data) {
      const art69 = data.filter(
        (item: any) => item.article === "69" && item.year === value
      );
      setArticle69(art69);
      const art70 = data.filter(
        (item: any) => item.article === "70" && item.year === value
      );
      setArticle70(art70);
    }
  };
  const url = "https://k753lncj-9000.usw3.devtunnels.ms/transparency/records";
  const { data, error, status } = useFetch<DataType[]>(url);
  // "https://k753lncj-9000.usw3.devtunnels.ms/transparency/records"

  const columns: TableColumnsType<DataType> = [
    {
      title: "Fraccion",
      dataIndex: "fraction",
    },
    {
      title: "Primer Trimestre",
      dataIndex: "firstTrimester",
    },
    {
      title: "Segundo Trimestre",
      dataIndex: "secondTrimester",
    },
    {
      title: "Tercer Trimestre",
      dataIndex: "thirdTrimester",
    },
    {
      title: "Cuarto Trimestre",
      dataIndex: "fourthTrimester",
    },
  ];
  const columnsTwo = [
    {
      title: "Nombre",
      dataIndex: "fraction",
    },
    {
      title: "Primer Trimestre",
      dataIndex: "firtsTrimester",
    },
    {
      title: "Segundo Trimestre",
      dataIndex: "secondTrimester",
    },
    {
      title: "Tercer Trimestre",
      dataIndex: "thirdTrimester",
    },
    {
      title: "Cuarto Trimestre",
      dataIndex: "fourthTrimester",
    },
  ];
  return (
    <DataTableWrapper>
      <DropDown
        options={[
          { value: "2018", label: "2018" },
          { value: "2019", label: "2019" },
        ]}
        onChange={_handleChange}
      />
      <h1>Articulo 69</h1>
      <Table columns={columns} dataSource={article69} />
      <h1>Articulo 70</h1>
      <Table columns={columnsTwo} dataSource={article70} />
    </DataTableWrapper>
  );
};

export default DataTableTransparency;
