import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import ForgotPassword from "../components/ForgotPassword/ForgotPassword";

const UserLogin = () => {
  // state hooks for log in error
  const [loginError, setLoginError] = useState({});
  // ref hooks for forgot pass modal
  const modalRef = useRef(null);
  // hook for page navigating
  const navigate = useNavigate();
  // context data using: sign in func
  const { logInUserByEmailAndPasswordFromAuthProvider } =
    useContext(AuthContext);

  // handleLoginForm
  const handleLoginForm = (e) => {
    e.preventDefault();
    const userEmail = e.target.userEmail.value;
    const userPassword = e.target.userPassword.value;
    // console.log("Sign in data:=> ", userEmail, userPassword);

    //  sign in data validation

    // send data to firebase sdk for validation & LOGIN
    logInUserByEmailAndPasswordFromAuthProvider(userEmail, userPassword)
      .then((result) => {
        toast(`Welcome back ${userEmail}! SuccessFully Logged In!`);
        // console.log("Success! Logged in! User details: ", result.user);
        // Reset the form
        e.target.reset();
        navigate("userDashboard");
      })
      .catch((error) => {
        // console.log("Error=>", error.code, error.msg);
      });
  };

  // handle password reset + email deliver alert
  const handlePasswordReset = () => {
    setOpenPassResetModal(!openPassResetModal);
  };

  return (
    <div className="my-6  mx-auto mt-14  bg-white  rounded-md">
      {/* daisy ui login form */}
      <div className="hero  w-full  flex flex-col">
        <h3 className="text-center font-semibold text-[30px] text-[#403F3F] my-4">
          Log in to your account
        </h3>
        <div className="divider text-[#E7E7E7] w-4/5 mx-auto mb-2"></div>
        {/* form body */}
        <div className="hero-content w-full ">
          <div className="card  w-full max-w-lg shrink-0 ">
            <form onSubmit={handleLoginForm} className="card-body p-2">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-xl">
                    Email address
                  </span>
                </label>
                <input
                  type="email"
                  name="userEmail"
                  placeholder="Enter your email address"
                  className="input input-bordered text-[#9F9F9F] bg-[#F3F3F3] w-full "
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-xl">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  name="userPassword"
                  placeholder="Enter your password"
                  className="input input-bordered text-[#9F9F9F] bg-[#F3F3F3] rounded-md w-full"
                  required
                />
                <label className="label">
                  <Link
                    onClick={() => modalRef.current.showModal()}
                    to="#"
                    className="label-text-alt link link-hover text-teal-600 font-semibold"
                  >
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-neutral text-white font-semibold text-xl">
                  Login
                </button>
              </div>
              <div className="have-to-register">
                <p className="text-center font-semibold">
                  Don't Have An Account?
                  <Link
                    to="/auth/register"
                    className="text-[#F75B5F] font-semibold text-[16px] "
                  >
                    {" "}
                    &nbsp;Register
                  </Link>
                </p>
              </div>
            </form>
            {/* PASSING useref: modalRef to ForgotPAss component */}
            <ForgotPassword modalRef={modalRef}></ForgotPassword>
           {/* MODAL
            
            <dialog ref={modalRef} className="modal">
              <div className="modal-box">
                <form method="dialog">
                 if there is a button in form, it will close the modal
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">
                  Press ESC key or click on ✕ button to close
                </p>
              </div>
            </dialog> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
