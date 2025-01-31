import { Table, TableColumnsType } from "antd";
import { DataTableWrapper, FormBlock, WLayout } from "./styles";
import { DataType } from "../../common/types";
import OrnamentVertical from "../../common/OrnamentVertical";
import { SvgIcon } from "../../common/SvgIcon";
const DataTablePlanning = () => {
  const columns: TableColumnsType<DataType> = [
    {
      title: "Nombre",
      dataIndex: "fraction",
    },
    {
      title: "Primer Trimestre",
      dataIndex: "firstTrimester",
      render: (dataIndex) => {
        return (
          dataIndex && (
            <a target="_blank" download>
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
            <a target="_blank" download>
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
            <a target="_blank" download>
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
            <a target="_blank" download>
              <SvgIcon src="excel-svgrepo-com.svg" width="20px" height="" />
            </a>
          )
        );
      },
    },
  ];
  return (
    <DataTableWrapper>
      <h3>PBR</h3>
      <Table columns={columns} dataSource={[]} />
      <h3 className="pd-1">Informes ASEH Entregas Trimestrales</h3>
      <Table columns={columns} dataSource={[]} />
      <h3 className="pd-1">Expedientes Técnicos de Obras</h3>
      <Table columns={columns} dataSource={[]} />
      <h3 className="pd-1">Proyectos FISMDF</h3>
      <Table columns={columns} dataSource={[]} />
      <h3 className="pd-1">Programas de Evaluación PAE</h3>
      <Table columns={columns} dataSource={[]} />
      <h3 className="pd-1">Inventarios</h3>
      <Table columns={columns} dataSource={[]} />
      <WLayout className="form-grid">
        <FormBlock>
          <h3 className="pd-1">Planeación</h3>
          <Table columns={columns} dataSource={[]} />
          <h3 className="pd-1">Programación</h3>
          <Table columns={columns} dataSource={[]} />
          <h3 className="pd-1">Presupuestación</h3>
          <Table columns={columns} dataSource={[]} />
        </FormBlock>
        <FormBlock className="is-2nd">
          <h3 className="pd-1">Ejercicio del Gasto</h3>
          <Table columns={columns} dataSource={[]} />
          <h3 className="pd-1">Evaluación</h3>
          <Table columns={columns} dataSource={[]} />
          <h3 className="pd-1">Rendición de Cuentas</h3>
          <Table columns={columns} dataSource={[]} />
          <h3 className="pd-1">Mejores Prácticas</h3>
          <Table columns={columns} dataSource={[]} />
        </FormBlock>
      </WLayout>
    </DataTableWrapper>
  );
};

export default DataTablePlanning;
