import "./index.css";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import Layout from "@/components/Layout/Layout";

const App = () => (
  <Routes>
    {routes.map(route => {
      const { path, component: RouteComponent } = route;
      const Element = () => (
        <Layout>
          <RouteComponent />
        </Layout>
      );

      return <Route key={path} path={path} element={<Element />} />;
    })}
  </Routes>
);

export default App;
