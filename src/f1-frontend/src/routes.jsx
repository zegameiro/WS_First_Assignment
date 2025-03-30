import {createBrowserRouter} from "react-router";
import { Home, Root, Drivers, Races, Seasons } from "./pages";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        { index: true, Component: Home },
        { path: "drivers", Component: Drivers },
        { path: "races", Component: Races },
        { path: "seasons", Component: Seasons}
      ]
    },
  ]);

export default routes;