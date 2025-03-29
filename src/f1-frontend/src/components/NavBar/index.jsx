import logo from "../../../public/f1_logo.png"

function NavBar({children}) {

  return (
    <div className="bg-[#e10600] w-full h-16 px-4 flex items-center gap-5">
      <img src={logo} alt="logo" className="h-16"/>
      {children}
    </div>
  )
}

export default NavBar;