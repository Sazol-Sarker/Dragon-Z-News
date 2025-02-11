import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout/HomeLayout";

const router = createBrowserRouter([
    {
        path:'/',
        element:<HomeLayout></HomeLayout>
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
        element:<div>Sorry, wrong page!</div>
    }
])

export default router;