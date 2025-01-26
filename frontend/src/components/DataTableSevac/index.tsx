import { Table, TableColumnsType } from "antd";
import { DataType } from "../../common/types";
import { DataTableWrapper } from "./styles";
const DataTableSevac = () => {
  const columns: TableColumnsType<DataType> = [
    {
      title: "Año",
      dataIndex: "year",
    },
    {
      title: "Nombre del Archivo",
      dataIndex: "name",
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
  return (
    <DataTableWrapper>
      <h1>SEVAC </h1>
      <Table columns={columns} dataSource={[]} />
    </DataTableWrapper>
  );
};

export default DataTableSevac;
