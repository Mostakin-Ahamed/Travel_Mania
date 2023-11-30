import { Link, NavLink, Outlet } from "react-router-dom";
import { FaBook, FaRegUser, FaThList, FaUsers } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
import useAdmin from "../Hooks/useAdmin";
import useGuide from "../Hooks/useGuide";





const Dashboard = () => {

    const [isAdmin] = useAdmin();
    const [isGuide] = useGuide();
    console.log(isGuide);

    return (

        <div className="flex min-h-screen">

            <div className="w-64 min-h-full bg-orange-400 pt-10 pl-10">
                <ul className="menu gap-3">
                    <div className="lg:flex md:flex mb-10" >
                        <Link to="/"><button className="btn btn-ghost normal-case text-xl"> <img className="h-[35px] ml-3 pl-r" src="/icon.svg" alt="" />Travel Mania</button></Link>

                    </div>
                    <li><NavLink to={"/dashboard/profile"}> <FaRegUser /> My Profile</NavLink></li>
                    {
                        isAdmin && <><hr />
                            <li><NavLink to={'/dashboard/admin/addTour'}><IoIosAddCircleOutline /> Add Package</NavLink></li>
                            <hr />
                            <li><NavLink to={"/dashboard/admin/manageUsers"}> <FaUsers />Manage Users</NavLink></li></>

                    }
                    {
                        isGuide && <><hr />
                            <li><NavLink to={'/dashboard/myAssignedTour'}><FaBook /> My Assigned Tour</NavLink></li>
                            <hr />
                        </>
                    }
                    {
                        !isAdmin & !isGuide && <>
                            <hr />
                            <li><NavLink to={'/dashboard/myBookings'}><FaBook /> My Bookings</NavLink></li>
                            <hr />
                            <li><NavLink to={"/dashboard/myWishlist"}> <FaThList />My Wishlist</NavLink></li>
                        </>
                    }
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;