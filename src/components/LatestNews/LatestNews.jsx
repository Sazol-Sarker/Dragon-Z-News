import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import marqueeLogo from "../../assets/megaphone.png";
const LatestNews = ({ trendingNews }) => {
  // receive loader data & use
  // console.log(typeof trendingNews);

  return (
    <div className="flex gap-2 bg-gray-200 my-4">
      <div className="bg-[#D72050] marquee-head flex">
        <p className=" text-white text-[20px] p-4 my-2 ml-2">Latest</p>
        <img
          src={marqueeLogo}
          className="w-6 h-6 m-auto mr-4"
          alt="Latest news"
        />
      </div>
      {/* marquee text box */}
      <Marquee
        className="hover:cursor-pointer space-x-10 text-[18px] font-semibold"
        speed={65}
        pauseOnHover={true}
      >
        {/* NEED TO MAKE IT DYNAMIC */}
        {/* <Link to="/news">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Link>
        <span className="p-2 font-bold text-xl text-teal-600">|</span>
        <Link to="/news">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Link>
        <span className="p-2 font-bold text-xl text-teal-600">|</span>
        <Link to="/news">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Link> */}

      {/* dynamic marquee content: only trending 19/26 news */}
        {
        trendingNews.map(singleNews=>{
          // console.log(singleNews.title);
        //  must return because {} used above===> singleNews=>{}
          return <Link key={singleNews._id} to={`/news/${singleNews._id}`}>{singleNews.title}<span className="text-teal-600 p-2 font-extrabold">|</span></Link>
        })
        }
      </Marquee>
    </div>
  );
};

export default LatestNews;
