import Layout from "@/components/layout/Layout";
import { useMounted } from "@/util/useMounted";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import { routes } from "./routes";

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
            <Layout>
              <RouteComponent />
            </Layout>
          }
        />
      ))}
    </Routes>
  );
};

export default App;
