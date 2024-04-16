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
   {
    user?.email? <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar" >
        <div className="w-12 rounded-full">
            <img src={user.photoURL} alt="" />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <button className="btn btn-sm btn-ghost">{user.displayName}</button>
        </li>
        <li>
          <button onClick={logout} className="btn btn-sm btn-ghost">Logout</button>
        </li>
      </ul>
      </div>
      :
        <Link to='/login'>
          <button className="btn btn-sm btn-ghost">Login</button>
        </Link>
   }
  </div>
</div>
        </div>
    );
};

export default Navbar;