import { Table, TableColumnsType } from "antd";
import { DataType } from "../../common/types";
import { DataTableWrapper } from "./styles";
import Preloader from "../Preloader";
import { useEffect, useState } from "react";
import DropDown from "../../common/DropDown";
import useFetch from "../../services";
import Button from "../../common/Button";
type DataTableProps = {
  dataSource: any[];
};
const DataTableResources = (dataSource: DataTableProps) => {
  const [values, setValues] = useState<any[]>();
  const { data, status, error } = useFetch(
    import.meta.env.VITE_API_URL + "areas/records"
  );

  useEffect(() => {
    setTimeout(() => {
      <Preloader />;
    }, 6000);
  }, []);
  const columns: TableColumnsType<DataType> = [
    {
      title: "Trámite o Servicio",
      dataIndex: "description",
    },
    {
      title: "Requisitos",
      dataIndex: "requeriment",
      render: (dataIndex) => {
        return (
          dataIndex && (
            <ul>
              {JSON.parse(dataIndex).map((item: any, key: number) => (
                <li key={key}>{item}</li>
              ))}
            </ul>
          )
        );
      },
    },
    {
      title: "Trámite en Línea",
      dataIndex: "online",
      render: (dataIndex) => {
        return dataIndex == true ? <></> : <>No Disponible en Línea</>;
      },
    },
  ];
  const _handleChange = (choice: string) => {
    const filtering =
      dataSource &&
      dataSource.dataSource.filter((item) => item.area === choice);
    setValues(filtering);
  };
  return (
    <DataTableWrapper id="data">
      <h1>
        Portal de Trámites y Servicios del Municipio de Atotonilco el Grande
      </h1>
      <DropDown
        placeholder="Selecciona el Área"
        onChange={_handleChange}
        options={Array.isArray(data) ? data : []}
      />
      <Table columns={columns} dataSource={values} />
    </DataTableWrapper>
  );
};

export default DataTableResources;
