import { useContext } from "react";
import userLogo from "../../assets/user.png";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import BookMarkedNews from "../BookMarkedNews/BookMarkedNews";

const UserDashboard = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const { uid, displayName, email, photoURL } = user;

  return (
    <div className="flex flex-col md:flex-row gap-x-4 my-10  rounded-lg space-y-10  ">
        {/* min-h-fit overflow-hidden */}
      <div className="w-1/3 my-10 border-2  border-teal-500 rounded-lg">
        <h3 className="text-center">User Dashboard</h3>
        <ul className="flex flex-col items-center">
          <img src={photoURL || userLogo} className="w-10" alt="" />
          <li> <b>uid: </b> {uid}</li>
          <li><b>Nickname:</b> {displayName || email.split("@")[0]}</li>
          <li><b>Email:</b> {email}</li>
        </ul>
      </div>
      {/* bookmarked news list */}
        <div className="w-2/3">

      <BookMarkedNews></BookMarkedNews>
        </div>
    </div>
  );
};

export default UserDashboard;
