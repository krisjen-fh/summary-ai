type Props = {
    onClick: () => void;
    loading: boolean;
};

const GenerateButton = ({
    onClick,
    loading
}: Props) => {
    return (
        <button
            onClick={onClick}
            disabled={loading}
            className="generate-btn"
        >
            {
                loading
                ? "Generating...."
                : "Generate Summary"
            }
        </button>
    )
}

export default GenerateButton;