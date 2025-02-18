import { Component } from "react";

const routes = [
  {
    path: "/",
    component: "Home",
  },
  {
    path: "/vermas",
    component: "Read",
  },
  {
    path: "/areas",
    component: "Areas",
  },
  {
    path: "/noticias",
    component: "Articles",
  },
  {
    path: "/sevac",
    component: "Sevac",
  },
  {
    path: "/transparencia",
    component: "Transparency",
  },
  {
    path: "/transparencia/contraloria",
    component: "Comptroller",
  },
  {
    path: "/transparencia/obras",
    component: "Obras",
  },
  {
    path: "/transparencia/tesoreria",
    component: "Theasure",
  },
  {
    path: "/transparencia/archivo",
    component: "Archivo",
  },
  {
    path: "/direcciones",
    component: "Planning",
  },
  {
    path: "/tramites",
    component: "Resources",
  },
  {
    path: "/municipio",
    component: "Municipio",
  },
  {
    path: "/contacto",
    component: "MailBox",
  },
  {
    path: "*",
    component: "404",
  },
];

export default routes;
