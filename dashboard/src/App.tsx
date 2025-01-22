import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserSettings from "./pages/UserSettings";
import NotFound from "./pages/NotFound";
import DefaultLayout from "./layouts/DefaultLayout";
import ProtectedLayout from "./layouts/ProtectedLayout";
import NotificationBar from "./components/notification/NotificationBar";
import { Roles } from "./constants";
import ViewTask from "./pages/ViewTask";
import ViewProject from "./pages/ViewProject";
import Dashboards from "./pages/Dashboards";
import Dashboard from "./pages/Dashboard";
import { useAppDispatch, useAppSelector } from "./hooks/redux-hooks";
import { getUsers } from "./slices/userSlice";
import { getProjects } from "./slices/projectSlice";
import News from "./pages/News";
import Transparency from "./pages/Transparency";

function App() {
  const dispatch = useAppDispatch();

  const basicUserInfo = useAppSelector((state) => state.auth.basicUserInfo);
  console.log(basicUserInfo);
  useEffect(() => {
    if (basicUserInfo) {
      // dispatch(getUsers());
      // dispatch(getProjects());
    }
  }, [basicUserInfo]);

  return (
    <>
      <NotificationBar />
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route
          element={
            <ProtectedLayout allowedRoles={[Roles.Editor, Roles.Admin]} />
          }
        >
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<ProtectedLayout allowedRoles={[Roles.Admin]} />}>
          <Route path="/user-settings" element={<UserSettings />} />
          <Route path="/noticias" element={<News />} />
          <Route path="/transparencia" element={<Transparency />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
