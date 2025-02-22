import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout/HomeLayout";

import About from "../components/About/About";
import CategoryNews from "./../pages/CategoryNews";
import UserLogin from "../pages/UserLogin";
import LoginLayout from "../layout/LoginLayout/LoginLayout";
import UserRegister from "../pages/UserRegister";
import UserDashboard from "../components/UserDashboard/UserDashboard";
import DetailedNewsLayout from "../layout/DetailedNewsLayout/DetailedNewsLayout";
import DetailedNews from "../components/DetailedNews/DetailedNews";
import Career from "../pages/Career";

const router = createBrowserRouter([
  {
    path: "/",
    loader:()=>fetch('https://openapi.programming-hero.com/api/news/category/08'),
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <Navigate to={`/category/01`}></Navigate>,
      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/news",
    element: <DetailedNewsLayout></DetailedNewsLayout>,
    children:[
      {
        path:'/news/:id',
        // loader:(params)=>fetch(`https://openapi.programming-hero.com/api/news/${params.id}`),
        element:<DetailedNews></DetailedNews>
      }
    ]
  },
  {
    path: "/auth",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "",
        element: <UserLogin></UserLogin>,
      },
      {
        path: "/auth/register",
        element: <UserRegister></UserRegister>,
      },
      {
        path: "/auth/userDashboard",
        element: <UserDashboard></UserDashboard>,
      },
    ],
  },
  {
    path: "*",
    // for error page, route not found
    element: <div>Sorry, wrong page!</div>,
  },
  {
    path: "/career",
    element: <Career></Career>,
  },
  {
    path: "/about",
    element: <About></About>,
  },
]);

export default router;
