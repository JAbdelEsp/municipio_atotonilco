import { useState } from "react";
import { FieldGrid, TextArea, TextField, Wform } from "./styles";
import { Radio, RadioChangeEvent } from "antd";
import { createBuzon } from "../../slices/comptrollerSlice";
import { useAppDispatch } from "../../hooks/redux-hooks";
const style: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 8,
};
const ComplaintsMailBox = () => {
  const dispatch = useAppDispatch();
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append("folio", uniqueId("MAG-B"));
    await dispatch(createBuzon(formData));
  };
  function uniqueId(prefix: string) {
    var id = +new Date() + "-" + Math.floor(Math.random() * 1000);
    return prefix ? prefix + id : id;
  }
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

  return (
    <Wform>
      <h1>Buzón de Quejas y Sugerencias</h1>
      <form autoComplete="off" onSubmit={onSubmit} encType="">
        <FieldGrid>
          <Radio.Group
            style={style}
            onChange={onChange}
            name="formulario"
            value={value}
            options={[
              { value: "denuncia", label: "Denuncia" },
              { value: "queja", label: "Queja" },
              { value: "sugerencia", label: "Sugerencia" },
            ]}
          />
          <TextField
            className="large"
            name="date_time"
            placeholder="Fecha y hora de los hechos"
            type="text"
            required
          />
          <TextField
            className="large"
            name="place"
            placeholder="Lugar de los hechos"
            type="text"
            required
          />
          <span className="large">
            Si necesitas que tu mensaje sea <strong>anonimo</strong> escribe
            anonimo en el campo
          </span>
          <TextField name="name" placeholder="Nombre" type="text" required />
          <TextField name="lastname" placeholder="Apellido" type="text" />
          <TextField
            className="large"
            name="address"
            placeholder="Dirección"
            type="text"
          />
          <TextField name="email" placeholder="Email" type="email" required />
          <TextField
            name="phone"
            placeholder="Número de Teléfono"
            type="phone"
          />
          <span className="large">
            Para que tu <strong>Denuncia</strong>/ <strong>Queja</strong> /{" "}
            <strong>Sugerencia</strong> proceda adecuadamente es necesario que
            llenes esta información.
          </span>
          <TextField
            name="public_server"
            placeholder="Nombre del Servidor Público"
            type="text"
            required
          />
          <TextField name="charge" placeholder="Cargo" type="text" required />
          <TextField
            className="large"
            name="area"
            placeholder="Área"
            type="text"
            required
          />
          <TextArea
            placeholder="Descripción de los hechos"
            name="description"
            required
          />
        </FieldGrid>
        <div style={{ marginTop: "2em" }}>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </Wform>
  );
};

export default ComplaintsMailBox;
