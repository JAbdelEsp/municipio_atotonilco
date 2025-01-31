import React, { useEffect } from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { getUser, logout } from "../slices/authSlice";
import { useNavigate } from "react-router-dom";
import { LockOutlined } from "@mui/icons-material";
import { userInfo } from "os";
import PageHeader from "../components/headers/PageHeader";
import AddButton from "../components/buttons/AddButton";

const Home = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  let basicUserInfo = useAppSelector((state) => state.auth.basicUserInfo);
  const userProfileInfo = useAppSelector((state) => state.auth.userProfileData);

  useEffect(() => {
    console.log("enter here");
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) basicUserInfo = JSON.parse(userInfo);
  }, [basicUserInfo]);

  const handleLogout = async () => {
    await dispatch(logout());
    navigate("/login");
  };

  return (
    <Grid container justifyContent="space-between">
      <Grid item>
        <PageHeader title="Panel de Administración" />
      </Grid>
      <Grid item xl={12} mt={1}>
        Bienvenido: {basicUserInfo?.name}
      </Grid>
    </Grid>
  );
};

export default Home;
