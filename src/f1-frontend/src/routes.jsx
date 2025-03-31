import {createBrowserRouter} from "react-router";
import { Home, Root, Drivers, Races, DriverProfile, Seasons, Constructors, RacesYears } from "./pages";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        { index: true, Component: Home },

        { path: "driver", Component: Drivers },
        { path: "driver/:id", Component: DriverProfile },

        { path: "races", Component: Races },
        { path: "races/:name", Component: RacesYears },
        
        { path: "seasons", Component: Seasons},
        { path: "constructors", Component: Constructors},
      ]
    },
  ]);

export default routes;