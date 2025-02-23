import { Table, TableColumnsType } from "antd";
import DropDown from "../DropDown";
import { DataTableWrapper } from "./styles";
import { DataType } from "../types";
import useFetch from "../../services";
import { useState } from "react";
import { SvgIcon } from "../SvgIcon";

const DataTableTransparency = () => {
  const [article70, setArticle70] = useState<DataType[]>();
  const [article69, setArticle69] = useState<DataType[]>();
  const [selectedYear, setSelectedYear] = useState("");
  const _handleChange = (value: string) => {
    setSelectedYear(value);
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
  const url = import.meta.env.VITE_API_URL + "transparency/records";
  const { data } = useFetch<DataType[]>(url);
  let urlLoc = import.meta.env.VITE_API_URL + "public/files/";
  const columns: TableColumnsType<DataType> = [
    {
      title: "Fracción",
      dataIndex: "fraction",
    },
    {
      title: "Primer Trimestre",
      dataIndex: "firstTrimester",
      render: (dataIndex) => {
        return (
          dataIndex && (
            <a
              href={urlLoc + "69/" + selectedYear + "/" + dataIndex}
              target="_blank"
              download
            >
              <SvgIcon src="excel-svgrepo-com.svg" width="20px" height="" />
            </a>
          )
        );
      },
    },
    {
      title: "Segundo Trimestre",
      dataIndex: "secondTrimester",
      render: (dataIndex) => {
        return (
          dataIndex && (
            <a
              href={urlLoc + "69/" + selectedYear + "/" + dataIndex}
              target="_blank"
              download
            >
              <SvgIcon src="excel-svgrepo-com.svg" width="20px" height="" />
            </a>
          )
        );
      },
    },
    {
      title: "Tercer Trimestre",
      dataIndex: "thirdTrimester",
      render: (dataIndex) => {
        return (
          dataIndex && (
            <a
              href={urlLoc + "69/" + selectedYear + "/" + dataIndex}
              target="_blank"
              download
            >
              <SvgIcon src="excel-svgrepo-com.svg" width="20px" height="" />
            </a>
          )
        );
      },
    },
    {
      title: "Cuarto Trimestre",
      dataIndex: "fourthTrimester",
      render: (dataIndex) => {
        return (
          dataIndex && (
            <a
              href={urlLoc + "69/" + selectedYear + "/" + dataIndex}
              target="_blank"
              download
            >
              <SvgIcon src="excel-svgrepo-com.svg" width="20px" height="" />
            </a>
          )
        );
      },
    },
  ];
  const columnsTwo = [
    {
      title: "Nombre",
      dataIndex: "fraction",
    },
    {
      title: "Primer Trimestre",
      dataIndex: "firstTrimester",
      render: (dataIndex: any) => {
        return (
          dataIndex && (
            <a
              href={urlLoc + "70/" + selectedYear + "/" + dataIndex}
              target="_blank"
              download
            >
              <SvgIcon src="excel-svgrepo-com.svg" width="20px" height="" />
            </a>
          )
        );
      },
    },
    {
      title: "Segundo Trimestre",
      dataIndex: "secondTrimester",
      render: (dataIndex: any) => {
        return (
          dataIndex && (
            <a
              href={urlLoc + "70/" + selectedYear + "/" + dataIndex}
              target="_blank"
              download
            >
              <SvgIcon src="excel-svgrepo-com.svg" width="20px" height="" />
            </a>
          )
        );
      },
    },
    {
      title: "Tercer Trimestre",
      dataIndex: "thirdTrimester",
      render: (dataIndex: any) => {
        return (
          dataIndex && (
            <a
              href={urlLoc + "70/" + selectedYear + "/" + dataIndex}
              target="_blank"
              download
            >
              <SvgIcon src="excel-svgrepo-com.svg" width="20px" height="" />
            </a>
          )
        );
      },
    },
    {
      title: "Cuarto Trimestre",
      dataIndex: "fourthTrimester",
      render: (dataIndex: any) => {
        return (
          dataIndex && (
            <a
              href={urlLoc + "70/" + selectedYear + "/" + dataIndex}
              target="_blank"
              download
            >
              <SvgIcon src="excel-svgrepo-com.svg" width="20px" height="" />
            </a>
          )
        );
      },
    },
  ];
  return (
    <DataTableWrapper id="data">
      <DropDown
        placeholder="Selecciona el Año"
        options={[
          { value: "2018", label: "2018" },
          { value: "2019", label: "2019" },
          { value: "2020", label: "2020" },
          { value: "2021", label: "2021" },
          { value: "2022", label: "2022" },
          { value: "2023", label: "2023" },
          { value: "2024", label: "2024" },
          { value: "2025", label: "2025" },
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
