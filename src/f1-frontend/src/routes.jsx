import {createBrowserRouter} from "react-router";
import { Home, Root, Drivers, Races, Seasons, Constructors } from "./pages";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        { index: true, Component: Home },
        { path: "drivers", Component: Drivers },
        { path: "races", Component: Races },
        { path: "seasons", Component: Seasons},
        { path: "constructors", Component: Constructors},
      ]
    },
  ]);

export default routes;