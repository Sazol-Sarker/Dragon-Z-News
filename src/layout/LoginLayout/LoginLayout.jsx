import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";

const LoginLayout = () => {
    return (
        <div className="w-6/12 mx-auto bg-base-200">
            <header>
            <Header></Header>
            <nav><NavBar></NavBar></nav>
            </header>
            <main>
            <Outlet></Outlet>
            </main>
            <footer>
            <h2>Footer</h2>
            </footer>
        </div>
    );
};

export default LoginLayout;