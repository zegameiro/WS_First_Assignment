import { Outlet } from "react-router";
import { NavBar, NavBarLink } from "../../components";

import { GiFullMotorcycleHelmet, GiF1Car } from "react-icons/gi";
import { FaCalendarDays } from "react-icons/fa6";

function Root({}) {

  return (
    <div>
      <NavBar>
        <NavBarLink to="/driver">
          <span className="flex items-center">
            <GiFullMotorcycleHelmet />
            <span className="ml-2 text-xl font-semibold">Drivers</span>
          </span>
        </NavBarLink>
        <NavBarLink to="/races">
          <span className="flex items-center">
            <GiF1Car className="text-3xl" />
            <span className="ml-2 text-xl font-semibold">Races</span>
          </span>
        </NavBarLink>
        <NavBarLink to="#">
          <span className="flex items-center">
            <FaCalendarDays />
            <span className="ml-2 text-xl font-semibold">Seasons</span>
          </span>
        </NavBarLink>
      </NavBar>
      <Outlet />
    </div>
  );
}

export default Root;