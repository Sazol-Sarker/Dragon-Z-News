import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../firebase/firebase.config";
import { toast } from "react-toastify";

const UserLogin = () => {
  const navigate = useNavigate();

  // handleLoginForm
  const handleLoginForm = (e) => {
    e.preventDefault();
    const userEmail = e.target.userEmail.value;
    const userPassword = e.target.userPassword.value;
    console.log("Sign in data:=> ", userEmail, userPassword);

    //  sign in data validation

    // send data to firebase sdk for validation & LOGIN
    signInWithEmailAndPassword(auth, userEmail, userPassword)
      .then((result) => {
        toast("Welcome Adventurer! SuccessFully Logged In!");
        console.log("Success! Logged in! User details: ", result.user);
        navigate("userDashboard");
      })
      .catch((error) => {
        console.log("Error=>", error.code, error.msg);
      });

    // Reset the form
    e.target.reset();
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
                {/* <label className="label">
                  <Link to="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label> */}
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
                  >  &nbsp;Register
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
