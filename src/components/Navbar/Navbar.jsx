
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = ({ updatedSiteInfo }) => {

    const { user, logout } = useContext(AuthContext)

    const { siteName, siteLogo } = updatedSiteInfo

    const handleLogout = () => {
        logout()
    }

    const links = <>
        <li>
            <NavLink to="/" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline" : ""
            }>Home
            </NavLink>
        </li>
        <li>
            <NavLink to="/addProduct" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline" : ""
            }>Add Product
            </NavLink>
        </li>
        <li>
            <NavLink to="/myCart" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline" : ""
            }>My Cart
            </NavLink>
        </li>
        <li>
            <NavLink to="/dashboard" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline" : ""
            }>Dashboard
            </NavLink>
        </li>
    </>
    return (
        <div className="navbar bg-base-100 shadow-lg py-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-lg">
                        {links}
                    </ul>
                </div>
                <div className="flex gap-2">
                    <img className="h-10" src={siteLogo} alt="" />
                    <h2 className="text-3xl font-bold text-sky-500">{siteName}</h2>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <div className="flex gap-4 items-center">
                        <h3>{user.displayName}</h3>
                        <div className="w-10 rounded-full">
                            <img className="rounded-full" src={user.photoURL} />
                        </div>
                        <button onClick={handleLogout} className="btn">Logout</button>

                    </div> :
                        <Link to='/login'>
                            <button className="btn">login</button>
                        </Link>
                }

            </div>
        </div>
    );
};

export default Navbar;