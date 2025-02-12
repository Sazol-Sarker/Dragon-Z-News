import swimmingKid from "../../assets/swimming.png";
import classKid from "../../assets/class.png";
import playgroundKid from "../../assets/playground.png";
import { Link } from "react-router-dom";

const QZoneGallery = () => {
  return (
    <div className="bg-[#F3F3F3] ">
      <h2 className="text-[20px] font-semibold">Q-Zone</h2>
      <div className="gallery-container flex flex-col items-center">
        <Link to="">
          <img
            src={swimmingKid}
            className="max-w-xs h-[219px] px-1 pb-5"
            alt="swimmingKid"
          />
        </Link>
        <Link to="">
          <img
            src={classKid}
            className="max-w-xs h-[219px] px-1 pb-5"
            alt="classKid"
          />
        </Link>
        <Link to="">
          <img
            src={playgroundKid}
            className="max-w-xs h-[219px] px-1 pb-5"
            alt="playgroundKid"
          />
        </Link>
      </div>
    </div>
  );
};

export default QZoneGallery;
