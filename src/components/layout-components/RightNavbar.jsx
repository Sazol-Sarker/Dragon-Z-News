import Advertise from "../Advertise/Advertise";
import FindUs from "../FindUs/FindUs";
import QZoneGallery from "../QZoneGallery/QZoneGallery";
import SocialLogin from "../SocialLogin/SocialLogin";

const RightNavbar = () => {
  return (
    <div className="pl-2 mb-5 space-y-7">
      
      <SocialLogin></SocialLogin>
      <FindUs></FindUs>
      <QZoneGallery></QZoneGallery>
      <Advertise></Advertise>
    

    </div>
  );
};

export default RightNavbar;
