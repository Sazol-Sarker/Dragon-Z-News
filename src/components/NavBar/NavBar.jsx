import { Link } from "react-router-dom";
import userLogo from "../../assets/user.png";
const NavBar = () => {
  return (
    <div className="flex justify-between items-center ">
      {/* <h2>Navbar</h2> */}
      <div className="blank-div"></div>
      <div className="nav-div space-x-2   ">
        <Link to="/">
          {" "}
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
        <div className="logo-container">
          <img src={userLogo} alt="User" />
        </div>
        <button className="btn bg-gray-800 px-10 py-3  text-white text-[20px] hover:bg-green-300 )">Login</button>
      </div>
    </div>
  );
};

export default NavBar;
