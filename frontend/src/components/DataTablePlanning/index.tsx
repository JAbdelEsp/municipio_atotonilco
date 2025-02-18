import { Table, TableColumnsType } from "antd";
import { DataTableWrapper } from "./styles";
import { DataType } from "../../common/types";
import { SvgIcon } from "../../common/SvgIcon";
import { useEffect, useState } from "react";
const DataTablePlanning = (data: any) => {
  const [pbr, setPbr] = useState([]);
  const [aseh, setAseh] = useState([]);
  const [eto, setEto] = useState([]);
  const [fismdf, setFismdf] = useState([]);
  const [pae, setPae] = useState([]);
  const [inv, setInv] = useState([]);
  const [faism, setFaism] = useState([]);
  useEffect(() => {
    letFilterData(data.data);
  }, [data]);
  const letFilterData = (data: any) => {
    if (!data.error) {
      const pbr_data = data.filter((item: any) => item.table === "PBR");
      pbr_data.length > 0 && setPbr(pbr_data);
      const aseh_data = data.filter(
        (item: any) => item.table === "Informes_ASEH"
      );
      aseh_data.length > 0 && setAseh(aseh_data);
      const eto_data = data.filter(
        (item: any) => item.table === "Expedientes_tecnicos_obras"
      );
      eto_data.length > 0 && setEto(eto_data);
      const faism_data = data.filter(
        (item: any) => item.table === "Fondo_aportacion_FAISM"
      );
      faism_data.length > 0 && setFaism(faism_data);
      const fismdf_data = data.filter(
        (item: any) => item.table === "Proyectos_FISMDF"
      );
      fismdf_data.length > 0 && setFismdf(fismdf_data);
      const pae_data = data.filter(
        (item: any) => item.table === "Programas_evaluacion_PAE"
      );
      pae_data.length > 0 && setPae(pae_data);
      const inv_data = data.filter((item: any) => item.table === "Inventarios");
      inv_data.length > 0 && setInv(inv_data);
    }
  };

  const columns: TableColumnsType<DataType> = [
    {
      title: "Nombre",
      dataIndex: "file_name",
    },
    {
      title: "Año",
      dataIndex: "year",
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
                      width="30px"
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
                      width="30px"
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
                      width="30px"
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
                      width="30px"
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
  return (
    <DataTableWrapper>
      <h3>PBR</h3>
      <Table columns={columns} dataSource={pbr} />
      <h3 className="pd-1">Informes ASEH Entregas Trimestrales</h3>
      <Table columns={columns} dataSource={aseh} />
      <h3 className="pd-1">Expedientes Técnicos de Obras</h3>
      <Table columns={columns} dataSource={eto} />
      <h3 className="pd-1">Proyectos FISMDF</h3>
      <Table columns={columns} dataSource={fismdf} />
      <h3 className="pd-1">
        Fondo de Aportaciones para La Infrestructura Social (FAISM)
      </h3>
      <Table columns={columns} dataSource={faism} />
      <h3 className="pd-1">Programas de Evaluación PAE</h3>
      <Table columns={columns} dataSource={pae} />
      <h3 className="pd-1">Inventarios</h3>
      <Table columns={columns} dataSource={inv} />
      <h3 className="pd-1">Planeación</h3>
      <Table columns={columns} dataSource={[]} />
      <h3 className="pd-1">Programación</h3>
      <Table columns={columns} dataSource={[]} />
      <h3 className="pd-1">Presupuestación</h3>
      <Table columns={columns} dataSource={[]} />
      <h3 className="pd-1">Ejercicio del Gasto</h3>
      <Table columns={columns} dataSource={[]} />
      <h3 className="pd-1">Evaluación</h3>
      <Table columns={columns} dataSource={[]} />
      <h3 className="pd-1">Rendición de Cuentas</h3>
      <Table columns={columns} dataSource={[]} />
      <h3 className="pd-1">Mejores Prácticas</h3>
      <Table columns={columns} dataSource={[]} />
    </DataTableWrapper>
  );
};

export default DataTablePlanning;
