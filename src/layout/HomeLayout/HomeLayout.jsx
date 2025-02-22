import { Outlet, useLoaderData } from "react-router-dom";
import Header from "../../components/Header/Header";
import LeftNavbar from "../../components/layout-components/LeftNavbar";
import RightNavbar from "../../components/layout-components/RightNavbar";
import LatestNews from "./../../components/LatestNews/LatestNews";
import NavBar from "./../../components/NavBar/NavBar";
import HomeNewsMiddleContainer from "../../components/layout-components/HomeNewsMiddleContainer";
import Footer from "../../components/Footer/Footer";

const HomeLayout = () => {
  // receive all news data (26)
  const NewsData=useLoaderData();
  const allNewsData=NewsData.data
  // console.log("allNewsData",allNewsData);
  // console.log(typeof allNewsData[0].others_info.is_trending);
  // filter news data which are trending news
  // pass the data to marquee bar
  // console.log(allNewsData.data[0]);
  const trendingNews=allNewsData.filter(singleNews=> singleNews.others_info.is_trending);
  // console.log("trendingNews",trendingNews);
  return (
    <div className="font-poppins">
      <title>Dragon-Z-News | Homepage</title>
      {/* <h2>home layout</h2> */}
      <header>
        <Header></Header>
        {/* Marquee section */}
        <section className="w-10/12 mx-auto">
          <LatestNews trendingNews={trendingNews}></LatestNews>
        </section>
      </header>
      {/* navbar */}
      <nav className="w-10/12 mx-auto">
        <NavBar></NavBar>
      </nav>
      {/* main body of home layout */}
      <main className="w-10/12 mx-auto mt-4 grid gap-4 md:grid-cols-12">
        <div className="left-container left col-span-3 ">
          {/* <h2>left container</h2> */}
          <LeftNavbar ></LeftNavbar>
        </div>
        <div className="middle-container col-span-6 ">
         <HomeNewsMiddleContainer></HomeNewsMiddleContainer>
        <Outlet></Outlet>
        </div>

        {/* right sided layout */}
        <div className="right-container right col-span-3 ">
          {/* <h2>right container</h2> */}
          <RightNavbar></RightNavbar>
        </div>
      </main>
      <footer className="w-10/12 mx-auto mt-2 rounded-sm">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
