import {
    createBrowserRouter
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Community from "../Pages/Community/Community";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Blogs from "../Pages/Blogs/Blogs";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Wildlife from "../Pages/Tour Pages/Wildlife/Wildlife";
import Walking from "../Pages/Tour Pages/Walking/Walking";
import Hiking from "../Pages/Tour Pages/Hiking/Hiking";
import AirRides from "../Pages/Tour Pages/Air Rides/AirRides";
import Sports from "../Pages/Tour Pages/Sports/Sports";
import AllTour from "../Pages/All Tour/AllTour";

import ServiceDetail from "../Pages/Service Details/ServiceDetail";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import MyProfile from "../Pages/Dashboard/User Dashboard/My Profile/MyProfile";
import MyBookings from "../Pages/Dashboard/User Dashboard/My Bookings/MyBookings";
import MyWishlist from "../Pages/Dashboard/User Dashboard/MyWishlist/MyWishlist";
import ManageUsers from "../Pages/Dashboard/Admin Dashboard/ManageUsers";
import AddTour from "../Pages/Dashboard/Admin Dashboard/AddTour"
import GuideAssignedTour from "../Pages/Dashboard/Guide Tour/GuideAssignedTour";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/community',
          element:<Community></Community>
        },
        {
          path:'/contactUs',
          element:<ContactUs></ContactUs>
        },
        {
          path:'/blogs',
          element:<Blogs></Blogs>
        },
        {
          path:'/aboutUs',
          element:<AboutUs></AboutUs>
        },
        {
          path:'/tours/wildlife',
          element:<Wildlife></Wildlife>
        }
        ,
        {
          path:'/tours/walking',
          element:<Walking></Walking>
        } 
        ,
        {
          path:'/tours/hiking',
          element:<Hiking></Hiking>
        } 
        ,
        {
          path:'/tours/airRides',
          element:<AirRides></AirRides>
        } 
        ,
        {
          path:'/tours/sports',
          element:<Sports></Sports>
        },
        {
          path:'/allTours',
          element:<AllTour></AllTour>
        },
        {
          path:`/details/:id`,
          element:<PrivateRoute><ServiceDetail></ServiceDetail></PrivateRoute>,
          loader: ({params})=> fetch(`http://localhost:5000/details/${params.id}`)
        }
        

      ]
    },
    {
      path:'dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path: 'profile',
          element:<MyProfile></MyProfile>
        },
        {
          path: 'myBookings',
          element:<MyBookings></MyBookings>
        },
        {
          path: 'myWishlist',
          element:<MyWishlist></MyWishlist>
        },
        {
          path: 'admin/manageUsers',
          element:<ManageUsers></ManageUsers>
        },
        {
          path: 'admin/addTour',
          element:<AddTour></AddTour>
        },
        {
          path:'myAssignedTour',
          element:<GuideAssignedTour></GuideAssignedTour>
        }
      ]
    }
  ]);