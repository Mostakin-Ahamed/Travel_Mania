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

      ]
    },
  ]);