import { Table, TableColumnsType } from "antd";
import { DataType } from "../../common/types";
import { DataTableWrapper } from "./styles";
import Preloader from "../Preloader";
import { useEffect, useState } from "react";
import DropDown from "../../common/DropDown";
import useFetch from "../../services";
import OnlineButton from "../../common/OnlineButton";
import DynamicModal from "../../common/DynamicModal";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { Create, Send } from "../../slices/proceduresSlice";
type DataTableProps = {
  dataSource: any[];
};
const DataTableResources = (dataSource: DataTableProps) => {
  const dispatch = useAppDispatch();
  const [state, setState] = useState(new Map<string, any>());
  const [isShow, setIsShow] = useState(false);
  const [failed, setFailed] = useState<null | boolean>(null);
  const [query, setQuery] = useState<any>();
  const [values, setValues] = useState<any[]>();
  const { data, status, error } = useFetch(
    import.meta.env.VITE_API_URL + "areas/records"
  );
  let content;
  const proceduresStatus = useAppSelector((state) => state.procedures.status);
  const sendStatus = useAppSelector((state) => state.send.status);

  useEffect(() => {
    console.log(proceduresStatus);
    if (proceduresStatus === "failed") {
      setFailed(true);
    }
  }, [proceduresStatus]);

  if (proceduresStatus === "loading") {
    content = <Preloader />;
  }
  useEffect(() => {
    setTimeout(() => {
      <Preloader />;
    }, 6000);
  }, []);
  const onClick = () => {
    setIsShow(true);
  };
  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(new Map(state.set(e.target.name, e.target.files)));
  };
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      await dispatch(Create(formData));
      setIsShow(false);
    } catch (error) {
      console.log(error);
    }
  };
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
      title: "Costo del Trámite o Servicio",
      dataIndex: "price",
      render: (dataIndex) => {
        return dataIndex !== null && <>$ {dataIndex}</>;
      },
    },
    {
      title: "Trámite en Línea",
      dataIndex: "online",
      render: (dataIndex, row) => {
        return dataIndex == true ? (
          <OnlineButton
            onClick={() => {
              onClick();
              setQuery(row);
            }}
            data={row}
          />
        ) : (
          <>No Disponible en Línea</>
        );
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
      {content}
      <DynamicModal
        show={isShow}
        set={setIsShow}
        query={query}
        onSubmit={onSubmit}
        onHandleChange={onHandleChange}
      />
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
