import { Table, TableColumnsType } from "antd";
import { DataType } from "../../common/types";
import { DataTableWrapper } from "./styles";
import Preloader from "../Preloader";
import { useEffect } from "react";
import DropDown from "../../common/DropDown";
const DataTableResources = () => {
  useEffect(() => {
    setTimeout(() => {
      <Preloader />;
    }, 6000);
  }, []);
  const columns: TableColumnsType<DataType> = [
    {
      title: "Trámite o Servicio",
      dataIndex: "no_obra",
    },
    {
      title: "Requisitos",
      dataIndex: "requeriments",
    },
    {
      title: "Trámite en Línea",
      dataIndex: "on_line",
    },
  ];
  const _handleChange = (value: string) => {};
  return (
    <DataTableWrapper id="data">
      <h1>Tramites y Servicios </h1>
      <DropDown
        placeholder="Selecciona el Área"
        onChange={_handleChange}
        options={[]}
      />
      <DropDown
        placeholder="Selecciona el Trámite a Realizar"
        onChange={_handleChange}
        options={[]}
      />
      <Table columns={columns} dataSource={[]} />
    </DataTableWrapper>
  );
};

export default DataTableResources;
