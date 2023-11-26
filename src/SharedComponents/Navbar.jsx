import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";




const Navbar = () => {
    // const { logOut } = useContext(AuthContext)
    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    const navLinks = <>
        <li><NavLink className="mx-3" to='/'>Home</NavLink></li>
        <li><NavLink className="mx-3" to='/services'>Services</NavLink></li>
    </>

    return (
        <div>
            <div className="bg-inherit lg:w-10/12 mx-auto">
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
                                    // user ?
                                        <li className="">
                                            <a>Dashboard</a>
                                            <ul className="p-2">
                                                <li><Link to='/myServices'><a>My Services</a></Link></li>
                                                <li><Link to='/addService'><a>Add Services</a></Link></li>
                                                <li><Link to='/mySchedules'><a>My Schedules</a></Link></li>
                                            </ul>
                                            <NavLink className="mx-3" to='/login'>Login</NavLink>
                                        </li> 
                                        // : <li><NavLink className="mx-3" to='/login'>Login</NavLink></li>
                                }

                            </ul>
                        </div>
                        <div className="lg:flex md:flex"><img className="h-[35px] ml-3" src="/icon.svg" alt="" />
                        <Link to="/"><a className="btn btn-ghost normal-case text-xl">Travel Mania</a></Link></div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {
                                navLinks
                            }
                            {
                                // user ?
                                    <li tabIndex={0}>
                                        <details>
                                            <summary>Dashboard</summary>
                                            <ul className="p-2">
                                                <li><Link to='/myServices'><a>My Services</a></Link></li>
                                                <li><Link to='/addService'><a>Add Services</a></Link></li>
                                                <li><Link to='/mySchedules'><a>My Schedules</a></Link></li>

                                            </ul>
                                        </details>
                                        <NavLink className="mx-3" to='/login'>Login</NavLink>
                                    </li> 
                                    // : <li><NavLink className="mx-3" to='/login'>Login</NavLink></li>
                            }

                        </ul>
                    </div>
                    {/* <div className="navbar-end">
                        {
                            // <h3 className="text-bold font-2xl mr-5">Username</h3>
                            user && <h3 className="text-bold font-2xl mr-5">{user.displayName}</h3>
                        }
                        {
                            user && <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} />
                                </div>
                            </label>
                        }
                        {
                            user && <button onClick={handleSignOut} className="btn bg-red-300 ml"> Log Out</button>
                        }

                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;