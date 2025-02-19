type ButtonProps = {
  onClick: any;
};
const OnlineButton = ({ onClick }: ButtonProps) => {
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
