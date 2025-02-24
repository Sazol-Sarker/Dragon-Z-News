import { Link, Navigate, useNavigate } from "react-router-dom";
import userLogo from "../../assets/user.png";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
const NavBar = ({ navBtn = "Login", navBtnPath = "/auth" }) => {
  const navigate = useNavigate();
  const { user, logOutUser, setLoading } = useContext(AuthContext);
  // console.log("In navbar-> user=> ",user.email);
  // const {email,displayName,photoURL}=user||{email:"john@doe.com"}
  console.log("user in NavbAr", user);

  // Safe destructuring with fallback values
  const email = user?.email || "";
  const uid = user?.uid || "xyz";
  const photoURL = user?.photoURL || userLogo;
  
  // Getting nickname from user email
  const nickName=email.split('@')[0]
  const displayName = user?.displayName || nickName;

  // destructuring context data of user
  // const {displayName,email,photoURL}=user

  // console.log("displayName,email,photoURL",displayName,email,photoURL);
  // console.log("user===> ",user);
  // console.log(typeof contextData,contextData);

  // signout
  const handleLogOut = () => {
    logOutUser()
      .then(() => {
        toast("Logout Successfull!");
        // setLoading(false);
        navigate("/auth");
      })
      .catch((error) => {
        console.error("Error during sign out:", error.message);
        setLoading(false); // Ensure loading is turned off in case of error
      });
  };

  return (
    <div className="flex justify-between items-center ">
      {/* <h2>Navbar</h2> */}
      {/* const {displayName,email,photoURL}=user */}
      <div className="blank-div text-lg font-semibold">
        
        <h2>{email}</h2>
      </div>
      {/* Interesting! we can make it dynamic using props
       and handle easily for different webpages */}
      <div className="nav-div space-x-2">
        {/* here***** */}
        <Link to="/">
          <button className="btn-outline m-2 p-2 text-gray-400">Home</button>
        </Link>
        <Link to="/about">
          <button className="btn-outline m-2 p-2 text-gray-400">About</button>
        </Link>
        <Link to="/career">
          <button className="btn-outline m-2 p-2 text-gray-400">Career</button>
        </Link>
      </div>
      <div className="login-div flex gap-2 items-center">
        <div className="logo-container flex flex-col justify-center">
          <Link to={'/auth/userDashboard'}>
          <img
            src={photoURL?photoURL:userLogo}
            alt="User"
            className="rounded-2xl w-10 mx-auto"
            />

          <h2>{displayName ?displayName :nickName }</h2>
            </Link>
        </div>
        {user ? (
          <Link to="/auth">
            <button
              onClick={handleLogOut}
              className="btn bg-gray-800/80 px-10 py-3  text-white text-[20px] hover:bg-pink-600/60 )"
            >
              Log-Out
            </button>
          </Link>
        ) : (
          <Link to={"/auth"}>
            <button className="btn bg-gray-800/80 px-10 py-3  text-white text-[20px] hover:bg-pink-600/60 )">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
