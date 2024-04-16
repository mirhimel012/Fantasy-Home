import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const {logout, user} = useAuth()
  const navlinks = <>
        <li><NavLink to="/">HOME</NavLink></li>
        <li><NavLink to="/about">ABOUT</NavLink></li>
        <li><NavLink to="/contact">CONTACT</NavLink></li>
        <li><NavLink to="/profile">UPDATE PROFILE</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100 shadow-lg px-4 sm:px-8 fixed z-10">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navlinks}
      </ul>
    </div>
    <Link to="/" className="btn btn-ghost text-base lg:text-4xl">Fantasy Home</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-xl">
      {navlinks}
    </ul>
  </div>
  <div className="navbar-end gap-3">
    {/* <div>
    <NavLink to="/login"  className="relative rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
<span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
<span className="relative">Login</span>
</NavLink>
    </div>
    <div>
    <NavLink to="/register"  className="relative rounded px-5 py-2.5 overflow-hidden group bg-cyan-500 relative hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-cyan-400 transition-all ease-out duration-300">
<span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
<span className="relative">Register</span>
</NavLink>
    </div> */}

{user ? ( // If user is logged in
            <div className="relative">
              <img src={user.image} alt="User" className="w-8 h-8 rounded-full cursor-pointer" />
              <span className="absolute -right-1 -bottom-1 bg-white text-black text-xs px-2 py-1 rounded">
                {user.name}
              </span>
              <button onClick={logout} className="ml-2 text-white">Logout</button>
            </div>
          ) : ( // If user is not logged in
            <Link to="/login" className="text-white">Login</Link>
          )}
  </div>
</div>
        </div>
    );
};

export default Navbar;