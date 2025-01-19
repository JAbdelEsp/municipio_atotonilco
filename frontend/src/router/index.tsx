import { lazy, Suspense, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import routes from "./config";
import { Styles } from "../styles/styles";
import Header from "../components/Header";
import FooterComponent from "../components/Footer";
import React from "react";
const Router = () => {
  return (
    <Suspense fallback={null}>
      <Styles />

      <Routes>
        {routes.map((routeItem) => {
          return (
            <Route
              key={routeItem.component}
              path={routeItem.path}
              element={
                <Suspense fallback={null}>
                  {routeItem.path !== "/admin" &&
                    routeItem.path !== "/admin/dashboard" && <Header />}
                  {React.createElement(
                    lazy(() => import(`../pages/${routeItem.component}`))
                  )}
                  {routeItem.path !== "/admin" &&
                    routeItem.path !== "/admin/dashboard" && (
                      <FooterComponent />
                    )}
                </Suspense>
              }
            />
          );
        })}
      </Routes>
    </Suspense>
  );
};

export default Router;
