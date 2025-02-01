import { Table, TableColumnsType } from "antd";
import { DataTypeSevac } from "../../common/types";
import { DataTableWrapper } from "./styles";
import DropDown from "../../common/DropDown";
import { useState } from "react";
import { SvgIcon } from "../../common/SvgIcon";

const DataTableSevac = () => {
  const [data, setData] = useState([]);
  const getData = async (param: string) => {
    try {
      await fetch(import.meta.env.VITE_API_URL + "sevac/records?year=" + param)
        .then((response) => response.json())
        .then((data) => {
          if (data.length > 0) {
            setData(data);
          } else {
            setData([]);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };
  const columns: TableColumnsType<DataTypeSevac> = [
    {
      title: "Sección",
      dataIndex: "section",
    },
    {
      title: "Estados Financieros",
      dataIndex: "financial_states",
    },
    {
      title: "Primer Trimestre",
      dataIndex: "firstTrimester",
      render: (dataIndex) => {
        return (
          dataIndex && (
            <ul style={{ listStyle: "none" }}>
              {JSON.parse(dataIndex).map((item: any, key: number) => (
                <li key={key}>
                  <a
                    href={import.meta.env.VITE_API_URL + item}
                    target="_blank"
                    download
                  >
                    <SvgIcon
                      src="download-square-svgrepo-com.svg"
                      width="20px"
                      height=""
                    />
                  </a>
                </li>
              ))}
            </ul>
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
            <ul style={{ listStyle: "none" }}>
              {JSON.parse(dataIndex).map((item: any, key: number) => (
                <li key={key}>
                  <a
                    href={import.meta.env.VITE_API_URL + item}
                    target="_blank"
                    download
                  >
                    <SvgIcon
                      src="download-square-svgrepo-com.svg"
                      width="20px"
                      height=""
                    />
                  </a>
                </li>
              ))}
            </ul>
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
            <ul style={{ listStyle: "none" }}>
              {JSON.parse(dataIndex).map((item: any, key: number) => (
                <li key={key}>
                  <a
                    href={import.meta.env.VITE_API_URL + item}
                    target="_blank"
                    download
                  >
                    <SvgIcon
                      src="download-square-svgrepo-com.svg"
                      width="20px"
                      height=""
                    />
                  </a>
                </li>
              ))}
            </ul>
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
            <ul style={{ listStyle: "none" }}>
              {JSON.parse(dataIndex).map((item: any, key: number) => (
                <li key={key}>
                  <a
                    href={import.meta.env.VITE_API_URL + item}
                    target="_blank"
                    download
                  >
                    <SvgIcon
                      src="download-square-svgrepo-com.svg"
                      width="20px"
                      height=""
                    />
                  </a>
                </li>
              ))}
            </ul>
          )
        );
      },
    },
  ];

  const _handleChange = (value: string) => {
    getData(value);
  };

  return (
    <DataTableWrapper id="data">
      <DropDown
        placeholder="Selecciona el Año"
        onChange={_handleChange}
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
      />
      <h1>SEVAC </h1>
      <Table columns={columns} dataSource={data} />
    </DataTableWrapper>
  );
};

export default DataTableSevac;
