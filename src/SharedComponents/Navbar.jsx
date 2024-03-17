import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";




const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    const navLinks = <>
        <li><NavLink className="mx-3" to='/'>Home</NavLink></li>
        <li><NavLink className="mx-3" to='/aboutUs'>About Us</NavLink></li>
        <li><NavLink className="mx-3" to='/contactUs'>Contact Us</NavLink></li>
    </>

    return (
        <div>
            <div className=" bg-inherit lg:w-10/12 mx-auto">
                <div className="navbar ">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-md dropdown-content mt-3 z-[1] p-8 bg-base-100 shadow rounded-box w-60">
                                {
                                    navLinks
                                }
                                {
                                    user ? <></> : <li><NavLink className="mx-3" to='/login'>Login</NavLink></li>
                                }

                            </ul>
                        </div>
                        <div className="lg:flex md:flex"><img className="h-[35px] ml-3 pl-r" src="/icon.svg" alt="" />
                            <Link to="/"><a className="btn btn-ghost normal-case text-xl">Travel Mania</a></Link></div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {
                                navLinks
                            }
                            {
                                user ? <></> :
                                    <li><NavLink className="mx-3" to='/login'>Login</NavLink></li>
                            }

                        </ul>
                    </div>
                    <div className="navbar-end">
                        {
                            // <h3 className="text-bold font-2xl mr-5">Username</h3>
                            user && <h3 className="text-bold font-2xl mr-5">{user.displayName}</h3>
                        }
                        {
                            user && <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user.photoURL} />
                                    </div>
                                </div>
                                <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    <Link to={'/dashboard/profile'}><li>
                                        <a>Dashboard</a>
                                    </li></Link>
                                    <li><button onClick={handleSignOut}> Log Out</button></li>
                                </ul>
                            </div>
                        }


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
