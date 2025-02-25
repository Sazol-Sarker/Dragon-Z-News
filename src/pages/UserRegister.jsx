import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import ErrorList from "../ErrorList/ErrorList";
const UserRegister = () => {
  // Password validation state hook for  error
  const [registrationPwdError,setRegistrationPwdError]=useState([])
  const [checkBoxCLicked,setCheckBoxCLicked]=useState(false)
  // get data+func from context api
  const {
    createUserByEmailAndPasswordFromAuthProvider,
    // validateSignupPasswordByFirebase,
    verifyUserEmail,updateUserInfo
  } = useContext(AuthContext);

  // page navigate hook
  const navigate = useNavigate();

  // handleRegisterForm
  const handleRegisterForm = (e) => {
    e.preventDefault();
    // console.log("logging=> ",e.target);
    const userName = e.target.userName.value;
    const userPhotoUrl = e.target.photoUrl.value;
    const userEmail = e.target.userEmail.value;
    const userPassword = e.target.userPassword.value;

   
    // console.log(userName,userPhotoUrl,userEmail,userPassword);
    // sign up data validation

    // Firebase validation
    // validateSignupPasswordByFirebase()
    // await validatePassword(auth, passwordFromUser)

    //***Custom sign up form validation***//
    // len >=6
    // let haltReg=false
    // if(userEmail.length<6)
    // {
    //   const newRegistrationPwdError=[...registrationPwdError,{"passwordLenError":"Password must be >=6"}]
    //   setRegistrationPwdError(newRegistrationPwdError)
    //   haltReg=true
    // }
    // // check lowercase letter [a-z] existence
    // if(!/[a-z]/.test(userEmail)){
    //   const newRegistrationPwdError=[...registrationPwdError,{"passwordLowerCaseMissingError":"Password must have a lowercase letter"}]
    //   setRegistrationPwdError(newRegistrationPwdError)
    //   haltReg=true
    // }

    // if(haltReg)
    //   return

    if(!checkBoxCLicked)
    {
      toast('Please accept Terms & Conditions!')
      return
    }
    // user data sending to firebase db
    // creating user...
    createUserByEmailAndPasswordFromAuthProvider(userEmail, userPassword)
      .then((result) => {
        toast(`User: ${userName} Created successfully! `);
        e.target.reset();
        const updateUserData={userName,userPhotoUrl}
        // update user info
        updateUserInfo(updateUserData)
        .then(()=>{
          toast('Profile updated')
        })
        .catch(error=>{
          alert('Profile update failed')
        })


        // tell user to verify email
        // verifyUserEmail()
        // .then(()=>{
        //   toast(`Verify User Email! Email Sent to! ${userEmail}`)

        // })
        navigate("/auth");
        // console.log("Success! User created!");
        // clear the form
      })
      .catch((error) => {
        toast(`Error! ${error.code}:${error.msg} `);
        // console.log("Error=>",error.code,error.msg);
      });
  };
  return (
    <div className="hero my-6 bg-white mt-10 rounded-md">
      <div className="hero-content flex-col gap-0 w-full ">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-bold">Register your account</h1>
        </div>
        <div className="divider w-4/5 mx-auto"></div>
        {/* <div className="card   w-[600px] h-[600px] "> */}
        <div className="card   w-4/5 ">
          <form onSubmit={handleRegisterForm} className="card-body py-0">
            <div className="form-control ">
              <label className="label">
                <span className="label-text font-semibold text-[#403F3F]">
                  Your Name
                </span>
              </label>
              <input
                type="text"
                name="userName"
                placeholder="Enter your Name"
                className="input input-bordered bg-[#F3F3F3] w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-[#403F3F]">
                  Photo URL
                </span>
              </label>
              <input
                type="text"
                name="photoUrl"
                placeholder="Enter photo url"
                className="input input-bordered bg-[#F3F3F3] w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-[#403F3F]">
                  Email
                </span>
              </label>
              <input
                type="email"
                name="userEmail"
                placeholder="Enter your email address"
                className="input input-bordered bg-[#F3F3F3] w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-[#403F3F]">
                  Password
                </span>
              </label>
              <input
                type="password"
                name="userPassword"
                placeholder="Enter your password"
                className="input input-bordered bg-[#F3F3F3] w-full"
                required
              />
            </div>
            <div className="form-control  term-condition">
              <label className="label cursor-pointer justify-start space-x-1">
                <input onClick={()=>setCheckBoxCLicked(!checkBoxCLicked)}  type="checkbox" className="checkbox" />
                <span className="label-text">
                  Accept &nbsp;
                  <span className="font-semibold">Term & Conditions</span>
                </span>
              </label>
            </div>
            <div className="form-control mt-3">
              <button className="btn btn-neutral text-white">Register</button>
            </div>
          </form>
          <div className="error-list">
            {registrationPwdError&&<ErrorList registrationPwdError={registrationPwdError}></ErrorList>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserRegister;
