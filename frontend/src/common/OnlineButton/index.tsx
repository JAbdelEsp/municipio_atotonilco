type ButtonProps = {
  onClick: any;
  data: any;
};
const OnlineButton = ({ onClick, data }: ButtonProps) => {
  return (
    <input
      className="subscribe-button"
      type="button"
      value={"Iniciar Trámite en Línea"}
      onClick={onClick}
    />
  );
};

export default OnlineButton;
