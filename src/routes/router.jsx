import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout/HomeLayout";
import Career from "../components/Career/Career";
import About from "../components/About/About";
import CategoryNews from './../pages/CategoryNews';


const router = createBrowserRouter([
    {
        path:'/',
        element:<HomeLayout></HomeLayout>,
        children:[
            {
                path:'/',
                element:<Navigate to={`/category/01`}></Navigate>
                

            },
            {
                path:'/category/:id',
                element:<CategoryNews></CategoryNews>,
                loader:({params})=>fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }
        ]
    },
    {
        path:'/news',
        element:<div>News layout</div>
    },
    {
        path:'/auth',
        element:<div>Login auth layout</div>
    },
    {
        path:'*',
        // for error page, route not found
        element:<div>Sorry, wrong page!</div>
    },
    {
        path:'/career',
        element:<Career></Career>
    },
    {
        path:'/about',
        element:<About></About>
    }
])

export default router;