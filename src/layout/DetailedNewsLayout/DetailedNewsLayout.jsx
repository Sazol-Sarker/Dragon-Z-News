import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import RightNavbar from "../../components/layout-components/RightNavbar";
import NavBar from "../../components/NavBar/NavBar";
import DetailedNews from "../../components/DetailedNews/DetailedNews";
import Footer from "../../components/Footer/Footer";

const DetailedNewsLayout = () => {
    const navigate=useNavigate();

    const goBackToCategory=()=>{
        navigate(-1);
    }

  return (
    <div className="font-poppins w-9/12 mx-auto">
      <title>Detailed News Page</title>
      <header>
        {/* <h3>Detailed news layout</h3> */}
        <Header></Header>
        <NavBar></NavBar>
      </header>
      <main className="w-7/8 flex mt-8 gap-x-5 pl-10 ">
        <div className="detail-news border-2 border-[#E7E7E7] p-[30px]">
          
          <div className="">

          <DetailedNews></DetailedNews>
          </div>
          <div>

          <button onClick={goBackToCategory} className="btn-neutral text-white bg-red-600 p-4 mt-2">All News in This category</button>
          </div>
        </div>

        <RightNavbar></RightNavbar>

      </main>
      <footer className="w-full mx-auto my-2">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default DetailedNewsLayout;
