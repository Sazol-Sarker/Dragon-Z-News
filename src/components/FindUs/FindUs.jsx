import { FaFacebook, FaSquareInstagram, FaTwitter } from "react-icons/fa6";

const FindUs = () => {
  return (
    // *:style-x => set in parent=> all child obeys
    <div className="*:w-full">
      <h2 className="text-[20px] font-bold">Find Us On</h2>
      <div className="join join-vertical *:bg-transparent ">
        <button className="btn join-item justify-start"><FaFacebook></FaFacebook> Facebook</button>
        <button className="btn join-item justify-start"><FaTwitter/>
        Twitter</button>
        <button className="btn join-item justify-start"><FaSquareInstagram />
        Instagram</button>
      </div>
    </div>
  );
};

export default FindUs;
