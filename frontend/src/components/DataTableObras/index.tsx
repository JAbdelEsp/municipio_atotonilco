import { Table, TableColumnsType } from "antd";
import { DataType } from "../../common/types";
import { DataTableWrapper } from "./styles";
import Preloader from "../Preloader";
import { useEffect } from "react";
const DataTableObras = () => {
  useEffect(() => {
    setTimeout(() => {
      <Preloader />;
    }, 6000);
  }, []);
  const columns: TableColumnsType<DataType> = [
    {
      title: "No Obra",
      dataIndex: "no_obra",
    },
    {
      title: "Nombre",
      dataIndex: "name",
    },
    {
      title: "Convocatoria",
      dataIndex: "official_announcement",
    },
    {
      title: "Contrato",
      dataIndex: "contract",
    },
  ];
  return (
    <DataTableWrapper id="data">
      <h1>Obras Públicas </h1>
      <Table columns={columns} dataSource={[]} />
    </DataTableWrapper>
  );
};

export default DataTableObras;
