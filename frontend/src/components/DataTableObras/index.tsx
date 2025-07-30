import { Table, TableColumnsType } from "antd";
import { ObraDataType } from "../../common/types";
import { DataTableWrapper } from "./styles";
import Preloader from "../Preloader";
import { useEffect } from "react";
import useFetch from "../../services";
import { SvgIcon } from "../../common/SvgIcon";
const DataTableObras = () => {
  const baseUrl = "https://api.creativadevelopmentsolutions.com/";
  useEffect(() => {
    setTimeout(() => {
      <Preloader />;
    }, 6000);
  }, []);
  const url = import.meta.env.VITE_API_URL + "obras/records";
  const { data } = useFetch<ObraDataType[]>(url);

  let urlLoc = baseUrl + "public/files/obras";
  const columns: TableColumnsType<ObraDataType> = [
    {
      title: "No Obra",
      dataIndex: "no_obra",
    },
    {
      title: "Nombre",
      dataIndex: "nombre",
    },
    {
      title: "Convocatoria",
      dataIndex: "convocatoria",
    },
    {
      title: "Contrato",
      dataIndex: "contrato",
      render: (dataIndex, row) => {
        return (
          dataIndex && (
            <a
              target="_blank"
              href={
                urlLoc +
                "/" +
                row.no_obra +
                "/" +
                dataIndex
              }
              download={dataIndex}
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
      <h1>Obras Públicas </h1>
      <Table columns={columns} dataSource={Array.isArray(data) ? data : []} />
    </DataTableWrapper>
  );
};

export default DataTableObras;


