import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="flex gap-2 bg-gray-200 my-4">
      <p className="bg-[#D72050] text-white text-[20px] p-4 my-2 ml-2">Latest</p>
      {/* marquee text box */}
      <Marquee className="hover:cursor-pointer space-x-10 text-[18px] font-semibold" speed={65} pauseOnHover={true}>
        <Link to="/news">
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
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
