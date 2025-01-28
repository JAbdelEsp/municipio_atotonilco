import { Table, TableColumnsType } from "antd";
import { DataTypeSevac } from "../../common/types";
import { DataTableWrapper } from "./styles";
import DropDown from "../../common/DropDown";
import { useState } from "react";
import { SvgIcon } from "../../common/SvgIcon";

const DataTableSevac = () => {
  const [data, setData] = useState([]);
  const path = "https://k753lncj-9000.usw3.devtunnels.ms/public/files/sevac/";
  const getData = async (param: string) => {
    try {
      await fetch(
        "https://k753lncj-9000.usw3.devtunnels.ms/sevac/records?year=" + param
      )
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
      title: "Año",
      dataIndex: "year",
    },
    {
      title: "Nombre del Archivo",
      dataIndex: "file_name",
    },
    {
      title: "Primer Trimestre",
      dataIndex: "firstTrimester",
      render: (dataIndex) => {
        return (
          dataIndex && (
            <ul style={{ listStyle: "none" }}>
              {dataIndex.map((item: any, key: number) => (
                <li key={key}>
                  <a href={item}>
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

  const _handleChange = (value: string) => {
    getData(value);
  };

  return (
    <DataTableWrapper>
      <DropDown
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
