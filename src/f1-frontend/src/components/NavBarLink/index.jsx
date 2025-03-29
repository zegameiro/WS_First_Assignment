import { Link } from "react-router";

function NavBarLink({name,to}) {

  return (
    <Link to={to}>
        <div className="text-white text-md underline">
            woof
        </div>
    </Link>
  )
}

export default NavBarLink;