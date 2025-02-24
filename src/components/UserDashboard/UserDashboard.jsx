import { useContext } from "react";
import userLogo  from "../../assets/user.png";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const UserDashboard = () => {
    const {user}=useContext(AuthContext);
    const {uid,displayName, email,photoURL}=user

    

    return (
        <div className="my-10 border-2 border-teal-500 rounded-lg ">
            <h3 className="text-center">User Dashboard</h3>
            <ul className="flex flex-col items-center">
                <li>{uid}</li>
                <img src={photoURL|| userLogo} className="w-10" alt="" />
                <li>{displayName||email.split('@')[0]}</li>
                <li>{email}</li>
                {/* <li></li> */}
                {/* <li></li> */}
            </ul>
        </div>
    );
};

export default UserDashboard;