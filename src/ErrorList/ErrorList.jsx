
const ErrorList = ({registrationPwdError}) => {
    console.log(registrationPwdError);
    return (
        <div>
            {
                registrationPwdError.map(err=><p>{err}</p>)

            }
        </div>
    );
};

export default ErrorList;