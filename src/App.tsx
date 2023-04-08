import Layout from "@/components/layout/Layout";
import { RoutesManager } from "@/routes/RoutesManager";
import { Route, Routes } from "react-router-dom";
import { routesConfig } from "../routes.config";
import "./index.css";
import { routes } from "./routes";

const routesManager = new RoutesManager(routes, routesConfig);

const App = () => (
  <Routes>
    {routes.map(route => {
      const { path, component: RouteComponent } = route;
      const Element = () => (
        <Layout routesManager={routesManager}>
          <RouteComponent />
        </Layout>
      );

      return <Route key={path} path={path} element={<Element />} />;
    })}
  </Routes>
);

export default App;
