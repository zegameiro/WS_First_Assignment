import { Outlet } from "react-router";
import { Button, NavBar, NavBarLink } from "../../components";

function Root({}) {

  return (
    <div>
        <NavBar>
            <NavBarLink/>
        </NavBar>
        <Outlet/>
    </div>
  );
}

export default Root;