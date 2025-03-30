import {createBrowserRouter} from "react-router";
import { Home, Root, Drivers, Races } from "./pages";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        { index: true, Component: Home },
        { path: "drivers", Component: Drivers },
        { path: "races", Component: Races }
      ]
    },
  ]);

export default routes;