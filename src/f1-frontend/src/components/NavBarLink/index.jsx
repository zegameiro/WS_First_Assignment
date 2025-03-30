import { Link } from "react-router";

function NavBarLink({children,to}) {

  return (
    <>
      <li className="hover:bg-amber-50 hover:rounded-sm hover:duration-500 hover:text-black">
        <Link to={to} className="text-xl font-semibold">
          {children}
        </Link>
      </li>
    </>
  )
}

export default NavBarLink;