import { useNavigate } from "react-router-dom";
import ButtonComponent from "../../common/Button";
import {
  FieldWrapper,
  LoginContainer,
  LoginHead,
  LoginPageWrapper,
  MemberStackForm,
  SignUpField,
  SignUpLabel,
} from "./styles";

const LoginForm = () => {
  const navigate = useNavigate();
  const Login = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    const data = {
      email: email,
      password: password,
    };
    await fetch("https://k753lncj-9000.usw3.devtunnels.ms/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.userId) {
          localStorage.setItem("token", data.token);
          navigate("/admin/dashboard");
        }
      });
  };
  return (
    <LoginPageWrapper>
      <LoginContainer>
        <LoginHead>Administrador</LoginHead>
        <MemberStackForm onSubmit={Login} method="POST">
          <FieldWrapper>
            <SignUpLabel>Correo Electrónico</SignUpLabel>
            <SignUpField
              className="w-input"
              type="email"
              id="email"
              name="email"
            />
          </FieldWrapper>
          <FieldWrapper>
            <SignUpLabel>Contraseña</SignUpLabel>
            <SignUpField
              className="w-input"
              type="password"
              id="password"
              name="password"
            />
          </FieldWrapper>
          <ButtonComponent
            onClick={() => {}}
            type="submit"
            children={"Iniciar sesión"}
          />
        </MemberStackForm>
      </LoginContainer>
    </LoginPageWrapper>
  );
};

export default LoginForm;
