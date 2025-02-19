import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
// import routes from "./config";
import { Styles } from "../styles/styles";
import FooterComponent from "../components/Footer";
import NotificationBar from "../components/notification/NotificationBar";
import Header from "../components/Header";
import Home from "../pages/Home";
import Read from "../pages/Read";
import Areas from "../pages/Areas";
import Articles from "../pages/Articles";
import Sevac from "../pages/Sevac";
import Transparency from "../pages/Transparency";
import Comptroller from "../pages/Comptroller";
import Obras from "../pages/Obras";
import Theasure from "../pages/Theasure";
import Archivo from "../pages/Archivo";
import Planning from "../pages/Planning";
import Resources from "../pages/Resources";
import Municipio from "../pages/Municipio";
import NotFound from "../pages/Component404";

const Router = () => {
  return (
    <Suspense fallback={<p>Cargando...</p>}>
      <Header />
      <Styles />
      <NotificationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vermas" element={<Read />} />
        <Route path="/areas" element={<Areas />} />
        <Route path="/noticias" element={<Articles />} />
        <Route path="/sevac" element={<Sevac />} />
        <Route path="/transparencia" element={<Transparency />} />
        <Route path="/transparencia/contraloria" element={<Comptroller />} />
        <Route path="/transparencia/obras" element={<Obras />} />
        <Route path="/transparencia/tesoreria" element={<Theasure />} />
        <Route path="/transparencia/archivo" element={<Archivo />} />
        <Route path="/direcciones" element={<Planning />} />
        <Route path="/tramites" element={<Resources />} />
        <Route path="/municipio" element={<Municipio />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <Routes>
        {routes.map((routeItem) => {
          const Component = lazyComponents[routeItem.component];
          return (
            <Route
              key={routeItem.component}
              path={routeItem.path}
              element={
                <Suspense fallback={<p>Loading...</p>}>
                  <Component />
                </Suspense>
              }
            />
          );
        })}
      </Routes> */}
      <FooterComponent />
    </Suspense>
  );
};

export default Router;
