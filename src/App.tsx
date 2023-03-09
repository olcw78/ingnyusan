import { Link, Route, Routes } from "react-router-dom";
import { routes } from "./routes";

const App = () => {
  return (
    <>
      <nav>
        <ul>
          {routes.map(route => (
            <li key={route.path}>
              <Link to={route.path}>{route.name}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <Routes>
        {routes.map(route => {
          const { path, component: RouteComponent } = route;
          return <Route key={path} path={path} element={<RouteComponent />} />;
        })}
      </Routes>
    </>
  );
};

export default App;
