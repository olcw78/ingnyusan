import Layout from "@/components/layout/Layout";
import { RoutesManager } from "@/routes/RoutesManager";
import { useMounted } from "@/util/useMounted";
import { Route, Routes } from "react-router-dom";
import { routesConfig } from "../routes.config";
import "./index.css";
import { routes } from "./routes";

const routesManager = new RoutesManager(routes, routesConfig);

const App = () => {
  // rehydration error 해결.
  const hasMounted = useMounted();
  if (!hasMounted) return null;

  return (
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
};

export default App;
