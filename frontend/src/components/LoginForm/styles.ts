import styled from "styled-components";
export const LoginPageWrapper = styled("div")`
  width: 100%;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 5% 100px;
  position: relative;
  .w-input,
  .w-select {
    width: 100%;
    height: 38px;
    color: #333;
    vertical-align: middle;
    background-color: #fff;
    border: 1px solid #ccc;
    margin-bottom: 10px;
    padding: 8px 12px;
    font-size: 14px;
    line-height: 1.42857;
    display: block;
  }
`;
export const LoginContainer = styled("div")`
  z-index: 10;
  width: 100%;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 50px;
  display: block;
  position: relative;
`;
export const LoginHead = styled("h1")`
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 28px;
  font-weight: 700;
  line-height: 1.3em;
`;
export const MemberStackForm = styled("form")`
  padding-top: 10px;
  position: relative;
`;
export const FieldWrapper = styled("div")`
  width: 100%;
  min-height: 30px;
  position: relative;
  text-align: left;
`;
export const SignUpLabel = styled("label")`
  z-index: -1;
  width: 100%;
  opacity: 0.6;
  color: #000;
  text-align: left;
  margin-bottom: 5px;
  padding-left: 2px;
  font-size: 15px;
  font-weight: 400;
`;
export const SignUpField = styled("input")`
  height: 54px;
  text-align: left;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  align-items: center;
  margin-bottom: 15px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 14px;
  font-size: 16px;
  transition: border-color 0.2s, box-shadow 0.2s, background-color 0.2s;
  display: flex;
  position: relative;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.06);
`;
