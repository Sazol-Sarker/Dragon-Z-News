import { FaGithub, FaGoogle } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const SocialLogin = () => {
    
    const {googleSignIn,githubSignIn,setUser}=useContext(AuthContext)
// Google
    const handleGoogleSignIN=()=>{
       
        googleSignIn()
        .then(result=>{
          const  {uid,displayName="Demo User",email,photoURL}=result.user
          setUser({uid,displayName,email,photoURL});
          console.log("done! Google log in SUCCESS!",result.user);
        }).catch(error=>{
            // console.log("ERROR=> ",error.code,error.msg);
        })
    }
// Github
const handleGithubSignIn=()=>{
    
    githubSignIn()
    .then(result=>{
        const  {uid,displayName,email,photoURL}=result.user
          setUser({uid,displayName,email,photoURL});
        console.log("Github login success!",result.user);
    }).catch(error=>{
        // console.log("Error=> ",error.code,error.msg);
    })
}

    return (
        <div className="space-y-2 *:w-full">
            <h2 className="font-semibold text-[20px] mb-3">Login with</h2>
            <button onClick={handleGoogleSignIN} className="btn text-cyan-600"><FaGoogle />
            Login with Google</button>
            <button onClick={handleGithubSignIn} className="btn"><FaGithub></FaGithub> Login with Github</button>
        </div>
    );
};

export default SocialLogin;