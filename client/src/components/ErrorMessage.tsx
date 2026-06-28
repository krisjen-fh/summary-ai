type Props = {
    message: string;
};

const ErrorMessage = ({ 
    message 
}: Props) => {
    return (
        <div className="error-box">
            {message}
        </div>
    );
};

export default ErrorMessage;