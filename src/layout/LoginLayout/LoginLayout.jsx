import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

const LoginLayout = () => {
    return (
        <div className="bg-base-200 font-poppins">
            <title>Authentication page</title>

        <div className="w-10/12 mx-auto ">
            <header>
            <Header></Header>
            <nav><NavBar navBtn={"Register"} navBtnPath={"/auth/register"}></NavBar></nav>
            </header>
            <main className="w-6/12 mx-auto">
            <Outlet></Outlet>
            </main>
            <footer>
            <Footer></Footer>
            </footer>
        </div>
        </div>
    );
};

export default LoginLayout;