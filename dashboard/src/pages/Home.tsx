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
import DashboardsTable from "../components/dashboard/DashboardsTable";
import TextBannerTable from "../components/TextBanners/TextBannerTable";
import { openModal } from "../slices/modalSlice";
import BannerTable from "../components/TextBanners/BannerTable";
import VideoTable from "../components/TextBanners/VideoTable";

const Home = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  let basicUserInfo = useAppSelector((state) => state.auth.basicUserInfo);
  const userProfileInfo = useAppSelector((state) => state.auth.userProfileData);

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) basicUserInfo = JSON.parse(userInfo);
  }, [basicUserInfo]);

  const handleLogout = async () => {
    await dispatch(logout());
    navigate("/login");
  };

  const openModalAddTextBanner = () => {
    dispatch(openModal({ modalName: "addTextBanner", modalProps: {} }));
  };

  const openModalAddBanner = () => {
    dispatch(openModal({ modalName: "addBanner", modalProps: {} }));
  };

  const openModalAddVideo = () => {
    dispatch(openModal({ modalName: "addVideo", modalProps: {} }));
  };

  return (
    <Grid container justifyContent="space-between" spacing={4}>
      <Grid item>
        <PageHeader title="Panel de Administración" />
      </Grid>
      <Grid item xl={12} mt={1}>
        Bienvenido: {basicUserInfo?.name}
      </Grid>
      <Grid item xl={12} mt={10}>
        <PageHeader title="Control de trámites" />
        <DashboardsTable onClickEdit={() => {}} />
      </Grid>
      <Grid item xl={6} mt={10}>
        <PageHeader title="Control de Cintillo de información" />
        <AddButton
          text="Agregar Nuevo"
          onClickAction={() => openModalAddTextBanner()}
        />
        <TextBannerTable onClickUpload={() => {}} />
      </Grid>
      <Grid item xl={6} mt={10}>
        <PageHeader title="Control de Banners" />
        <AddButton
          text="Agregar Nuevo"
          onClickAction={() => openModalAddBanner()}
        />
        <BannerTable onClickUpload={() => {}} />
      </Grid>
      <Grid item xl={6} mt={10}>
        <PageHeader title="Control de Video" />
        <AddButton
          text="Agregar Nuevo"
          onClickAction={() => openModalAddVideo()}
        />
        <VideoTable onClickUpload={() => {}} />
      </Grid>
    </Grid>
  );
};

export default Home;
