import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const ForgotPassword = ({ modalRef }) => {
const {handlePassResetEmail}=useContext(AuthContext)


const handleNewPassReqForm=(e)=>{
    e.preventDefault()
    // get data from form
    const form=e.target 
    const email=form.email.value
    // const pass
    handlePassResetEmail(email)
    .then(() => {
        // Password reset email sent!
        toast('Password reset email sent!')

        // Close the modal after success
        modalRef.current.close();
        
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode,errorMessage);
    });
}

  return (
    <dialog ref={modalRef} className="modal">
      <div className="modal-box w-2/3 h-1/3 mx-auto overflow-hidden">
        <form method="dialog ">
          {/* if there is a button in form, it will close the modal */}
          {/* page reloader */}
          {/* onClick={(e)=>e.preventDefault()} */}
          <button className="btn btn-md btn-circle btn-ghost border-2 border-teal-200 absolute right-2 top-2">
            ✕
          </button>
        </form>
        <form onSubmit={handleNewPassReqForm}>
          <h3 className="font-bold text-lg">Enter Email</h3>
          <input
            type="email"
            name="email"
            className="text w-3/4 border-2 border-teal-500 p-2 rounded-md"
            placeholder="johndoe@gmail.com"
          />
          {/* <h3 className="font-bold text-lg mt-4">Enter New Password</h3>
          <input
            type="text"
            name="password"
            className="text w-3/4 border-2 border-teal-500 p-2 rounded-md"
            placeholder="New Strong Password..."
          /> */}
          <button className="btn-outline">Reset Password</button>
        </form>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
      </div>
    </dialog>
  );
};

export default ForgotPassword;
