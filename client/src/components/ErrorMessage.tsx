interface Props{
    message:string;
}

const ErrorMessage = ({message}:Props)=>{

    return(
        <div className="error-card">
            <span className="error-icon">
                ⚠️
            </span>
            <div>
                <h4>
                    Terjadi Kesalahan
                </h4>
                <p>{message}</p>
            </div>
        </div>
    );
}

export default ErrorMessage;