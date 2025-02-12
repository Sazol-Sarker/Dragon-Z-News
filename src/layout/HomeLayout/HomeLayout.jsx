import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import LeftNavbar from "../../components/layout-components/LeftNavbar";
import RightNavbar from "../../components/layout-components/RightNavbar";
import LatestNews from "./../../components/LatestNews/LatestNews";
import NavBar from "./../../components/NavBar/NavBar";

const HomeLayout = () => {
  return (
    <div className="font-poppins">
      {/* <h2>home layout</h2> */}
      <header>
        <Header></Header>
        <section className="w-10/12 mx-auto">
          <LatestNews></LatestNews>
        </section>
      </header>
      {/* navbar */}
      <nav className="w-10/12 mx-auto">
        <NavBar></NavBar>
      </nav>
      {/* main body of home layout */}
      <main className="w-10/12 mx-auto mt-4 grid gap-4 md:grid-cols-12">
        <div className="left-container left col-span-3  border-2 border-gray-200">
          {/* <h2>left container</h2> */}
          <LeftNavbar></LeftNavbar>
        </div>
        <div className="middle-container col-span-6 border-2 border-gray-200">
          {/* <h2>Middle container</h2> */}
          <h2 className="font-semibold  text-[#403F3F] mb-5 text-[20px] pl-5">Dragon News Home </h2>
          <Outlet></Outlet>
        </div>
        {/* right sided layout */}
        <div className="right-container right col-span-3 border-2 border-gray-200">
          {/* <h2>right container</h2> */}
          <RightNavbar></RightNavbar>
        </div>
      </main>
    </div>
  );
};

export default HomeLayout;
