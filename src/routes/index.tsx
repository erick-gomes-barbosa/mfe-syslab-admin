import AcessesPages from "../pages/acesses-page";
import AssociationPage from "../pages/association-page";
import LaboratoriesPage from "../pages/laboratories-page";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LogsPages from "../pages/logs-page";

export default function RoutesApp() {
  const router = [
    { path: "/", component: LaboratoriesPage, exact: true },
    { path: "/association", component: AssociationPage },
    { path: "/acesses", component: AcessesPages },
    { path: "/logs", component: LogsPages },
  ];

  return (
    <BrowserRouter basename="/admin">
      <Switch>
        {router.map((route) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          );
        })}
      </Switch>
    </BrowserRouter>
  );
}
