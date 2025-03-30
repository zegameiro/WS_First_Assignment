import {createBrowserRouter} from "react-router";
import { Home, Root, Drivers } from "./pages";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        { index: true, Component: Home },
        { path: "drivers", Component: Drivers },
      ]
    },
  ]);

export default routes;