import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FaGithub, FaGoogle } from "react-icons/fa6";
import auth from './../../firebase/firebase.config';
import { GithubAuthProvider } from "firebase/auth";

const SocialLogin = () => {
// Google
    const handleGoogleSignIN=()=>{
        const provider=new GoogleAuthProvider();
        signInWithPopup(auth,provider)
        .then(result=>{
            console.log("Google log in SUCCESS!",result.user);
        }).catch(error=>{
            console.log("ERROR=> ",error.code,error.msg);
        })
    }
// Github
const handleGithubSignIn=()=>{
    const provider=new GithubAuthProvider();
    signInWithPopup(auth,provider)
    .then(result=>{
        console.log("Github login success!",result.user);
    }).catch(error=>{
        console.log("Error=> ",error.code,error.msg);
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