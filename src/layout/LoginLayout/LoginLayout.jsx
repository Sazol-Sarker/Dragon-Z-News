import { Outlet, useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

const LoginLayout = () => {
    const location = useLocation();  // Get the current location route
    // console.log("location=>",location);
    const isDashboard = location.pathname.includes('/auth/userDashboard');
    return (
        <div className="bg-base-200 min-h-screen font-poppins flex flex-col">
            <title>Authentication page</title>

        <div className="w-10/12 mx-auto flex flex-col flex-grow  ">
            <header>
            <Header></Header>
            <nav><NavBar navBtn={"Register"} navBtnPath={"/auth/register"}></NavBar></nav>
            </header>
            <main className={`mx-auto flex-grow ${isDashboard?"w-full":"w-6/12"}`}>
            <Outlet></Outlet>
            </main>
            <footer className="mt-auto mb-5 w-full ">
            <Footer></Footer>
            </footer>
        </div>
        </div>

        //STUDY THIS: to get sticky footer idea
        // Places to Add:
        // Wrapper <div> → min-h-screen flex flex-col
        // Main <main> → flex-grow
        // Footer <footer> → w-full
        // <div className="bg-base-200 font-poppins min-h-screen flex flex-col">
        //     <title>Authentication page</title>

        //     {/* Wrapper with flex-grow to push footer down */}
        //     <div className="w-10/12 mx-auto flex flex-col flex-grow">
        //         <header>
        //         <Header />
        //         <nav>
        //             <NavBar navBtn={"Register"} navBtnPath={"/auth/register"} />
        //         </nav>
        //         </header>

        //         {/* Main Content (Flex-grow ensures it takes available space) */}
        //         <main className="w-6/12 mx-auto flex-grow">
        //         <Outlet />
        //         </main>
        //     </div>

        //     {/* Footer - Sticks to bottom when content is short */}
        //     <footer className="bg-gray-800 text-white py-4 text-center w-full">
        //         <Footer />
        //     </footer>
        //     </div>

    );
};

export default LoginLayout;