import {createBrowserRouter} from "react-router";
import { Home, Root } from "./pages";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        { index: true, Component: Home },
      ]
    },
  ]);

export default routes;