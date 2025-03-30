import {createBrowserRouter} from "react-router";
import { Home, Root, Drivers, Races, DriverProfile, Seasons } from "./pages";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        { index: true, Component: Home },
        { path: "driver", Component: Drivers },
        { path: "races", Component: Races },
        { path: "driver/:id", Component: DriverProfile },,
        { path: "seasons", Component: Seasons}
      ]
    },
  ]);

export default routes;