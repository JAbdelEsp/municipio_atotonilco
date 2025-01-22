import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { Navigate } from "react-router-dom";
import AccessDenied from "../pages/AccessDenied";
import ModalContainer from "../modals/ModalContainer";
import NavBar from "../components/nav/NavBar";

type ProtectedLayoutType = {
  allowedRoles: string[];
};

const ProtectedLayout = ({ allowedRoles }: ProtectedLayoutType) => {
  const basicUserInfo = useAppSelector((state) => state.auth.basicUserInfo);
  if (!basicUserInfo) {
    return <Navigate replace to={"/login"} />;
  }
  const rol = basicUserInfo.roles;
  if (!basicUserInfo.roles || !allowedRoles.includes(rol.toString())) {
    return <AccessDenied />;
  }

  return (
    <>
      <NavBar />
      <ModalContainer />
      <Outlet />
    </>
  );
};

export default ProtectedLayout;
