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
      {routes.map(({ component: RouteComponent, path }) => (
        <Route
          key={path}
          path={path}
          element={
            <Layout routesManager={routesManager}>
              <RouteComponent />
            </Layout>
          }
        />
      ))}
    </Routes>
  );
};

export default App;
