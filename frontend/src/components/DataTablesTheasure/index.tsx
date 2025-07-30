import { Table, TableColumnsType } from "antd";
import { DataTableWrapper } from "./styles";
import { useEffect, useState } from "react";
import { SvgIcon } from "../../common/SvgIcon";
import { DataType } from "../../common/types";
import useFetch from "../../services";
const DataTablesTheasure = () => {
  const url = import.meta.env.VITE_API_URL + "theasure/records";
  const { data } = useFetch<DataType[]>(url);
  const [ctaPublica, setCtaPublica] = useState<DataType[]>();
  const [infTrimestral, setInfTrimestral] = useState<DataType[]>();
  const [sevac, setSevac] = useState<DataType[]>();

  useEffect(() => {
    if (data) {
      const Trimestral = data.filter(
        (item: any) =>
          item.table_name === "informacion_trimestral" && item.year === "2025"
      );
      setInfTrimestral(Trimestral);
      const Sevac = data.filter(
        (item: any) => item.table_name === "sevac" && item.year === "2025"
      );
      setSevac(Sevac);
      const cuenta = data.filter(
        (item: any) =>
          item.table_name === "cuenta_publica" && item.year === "2025"
      );
      setCtaPublica(cuenta);
    }
  }, [!data]);

  const columnsCtaPublica: TableColumnsType<DataType> = [
    {
      title: "Ejercicio Fiscal",
      dataIndex: "description",
    },
    {
      title: "Archivos ZIP",
      dataIndex: "file",
      render: (dataIndex) => {
        return (
          dataIndex && (
            <a href={dataIndex} target="_blank">
              <SvgIcon
                src="download-square-svgrepo-com.svg"
                width="30px"
                height=""
              />
            </a>
          )
        );
      },
    },
  ];

  const columnsInfTrimestral: TableColumnsType<DataType> = [
    {
      title: "Tipo de Información",
      dataIndex: "description",
    },
    {
      title: "Primer Trimestre",
      dataIndex: "first_trimester",
      render: (dataIndex) => {
        return (
          dataIndex && (
            <a href={dataIndex} target="_blank">
              <SvgIcon
                src="download-square-svgrepo-com.svg"
                width="30px"
                height=""
              />
            </a>
          )
        );
      },
    },
    {
      title: "Segundo Trimestre",
      dataIndex: "second_trimester",
      render: (dataIndex) => {
        return (
          dataIndex && (
            <a href={dataIndex} target="_blank" download>
              <SvgIcon
                src="download-square-svgrepo-com.svg"
                width="30px"
                height=""
              />
            </a>
          )
        );
      },
    },
    {
      title: "Tercer Trimestre",
      dataIndex: "third_trimester",
      render: (dataIndex) => {
        return (
          dataIndex && (
            <a href={dataIndex} target="_blank">
              <SvgIcon
                src="download-square-svgrepo-com.svg"
                width="30px"
                height=""
              />
            </a>
          )
        );
      },
    },
    {
      title: "Cuarto Trimestre",
      dataIndex: "fourth_trimester",
      render: (dataIndex) => {
        return (
          dataIndex && (
            <a href={dataIndex} target="_blank">
              <SvgIcon
                src="download-square-svgrepo-com.svg"
                width="30px"
                height=""
              />
            </a>
          )
        );
      },
    },
  ];

  const _handleChange = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = event.currentTarget;
    if (data) {
      const Trimestral = data.filter(
        (item: any) =>
          item.table_name === "informacion_trimestral" && item.year === value
      );
      setInfTrimestral(Trimestral);
      const Sevac = data.filter(
        (item: any) => item.table_name === "sevac" && item.year === value
      );
      setSevac(Sevac);
      const cuenta = data.filter(
        (item: any) =>
          item.table_name === "cuenta_publica" && item.year === value
      );
      setCtaPublica(cuenta);
    }
  };
  return (
    <DataTableWrapper id="data">
      <div className="menu">
        <div className="menu-container">
          <button value={2025} onClick={_handleChange}>
            2025
          </button>
          <button value={2024} onClick={_handleChange}>
            2024
          </button>
          <button value={2023} onClick={_handleChange}>
            2023
          </button>
          <button value={2022} onClick={_handleChange}>
            2022
          </button>
          <button value={2021} onClick={_handleChange}>
            2021
          </button>
          <button value={2020} onClick={_handleChange}>
            2020
          </button>
          <button value={2019} onClick={_handleChange}>
            2019
          </button>
        </div>
      </div>
      <h3>Cuenta Pública Anual</h3>
      <Table
        columns={columnsCtaPublica}
        dataSource={ctaPublica}
        pagination={{ pageSize: 10 }}
      />
      <h3>Información Trimestral</h3>
      <Table
        columns={columnsInfTrimestral}
        dataSource={infTrimestral}
        pagination={{ pageSize: 10 }}
      />
      <h3>SEVAC</h3>
      <Table
        columns={columnsInfTrimestral}
        dataSource={sevac}
        pagination={{ pageSize: 10 }}
      />
    </DataTableWrapper>
  );
};

export default DataTablesTheasure;
