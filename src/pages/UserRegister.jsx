import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from './../firebase/firebase.config';
const UserRegister = () => {

  // handleRegisterForm
  const handleRegisterForm=(e)=>{
    e.preventDefault();
    console.log("logging=> ",e.target);
      const userName=e.target.userName.value ;
      const userPhotoUrl=e.target.photoUrl.value ;
      const userEmail=e.target.userEmail.value ;
      const userPassword=e.target.userPassword.value ;
      console.log(userName,userPhotoUrl,userEmail,userPassword);
      // sign up data validation

      // user data sending to firebase db
      // creating user...
      createUserWithEmailAndPassword(auth,userEmail,userPassword)
      .then(result=>{
        console.log("Success! User created!");
      }).catch(error=>{
        console.log("Error=<>",error.code,error.msg);
      })

      // clear the form 
      e.target.reset();

  }
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-bold">Register your account</h1>
       
        </div>
        <div className="card   w-[600px] h-[600px] ">
          <form onSubmit={handleRegisterForm} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                name="userName"
                placeholder="Enter your Name"
                className="input input-bordered bg-[#F3F3F3]"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo url</span>
              </label>
              <input
                type="text"
                name="photoUrl"
                placeholder="Enter photo url"
                className="input input-bordered bg-[#F3F3F3]"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="userEmail"
                placeholder="Enter your email address"
                className="input input-bordered bg-[#F3F3F3]"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="userPassword"
                placeholder="Enter your password"
                className="input input-bordered bg-[#F3F3F3]"
                required
              />
            </div>
            <div className="form-control  term-condition">
            
                <label className="label cursor-pointer justify-start space-x-1">
                  <input type="checkbox" className="checkbox" />
                  <span className="label-text">Remember me</span>
                </label>
              
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-neutral text-white">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserRegister;
