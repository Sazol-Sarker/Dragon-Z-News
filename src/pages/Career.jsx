import { Link } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";

const Career = () => {
  return (
    <div className="w-8/12 mx-auto font-poppins  px-4">
      <NavBar></NavBar>
      <div className="bg-slate-300 dev-career flex flex-col justify-start items-center  my-4 border-2 border-green-300 rounded-md w-1/2 mx-auto mt-20 pb-10">
        <h2 className="text-xl font-semibold">Dev Career details:</h2>
        <h2 className="py-4 text-2xl">Sazol Sarker</h2>
          <p className="text-lg font-bold">LinkedIn</p>
          <Link to="https://www.linkedin.com/in/sazol-sarker-63832818b/" target="_blank">
          <p className="font-semibold text-teal-500">https://www.linkedin.com/in/sazol-sarker-63832818b/</p>
          </Link>
        <p></p>
        <div className="divider w-3/4 mx-auto"></div>
        <div className="">
          <p className="text-lg font-bold text-center">Github Repository</p>
          <Link to="https://github.com/Sazol-Sarker/Dragon-Z-News" target="_blank">
          <p className="font-semibold text-green-500">https://github.com/Sazol-Sarker/Dragon-Z-News</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Career;
