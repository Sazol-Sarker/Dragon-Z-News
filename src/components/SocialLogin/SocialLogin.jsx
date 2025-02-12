import { FaGithub, FaGoogle } from "react-icons/fa6";

const SocialLogin = () => {
    return (
        <div className="space-y-2 *:w-full">
            <h2 className="font-semibold text-[20px] mb-3">Login with</h2>
            <button className="btn text-cyan-600"><FaGoogle />
            Login with Google</button>
            <button className="btn"><FaGithub></FaGithub> Login with Github</button>
        </div>
    );
};

export default SocialLogin;