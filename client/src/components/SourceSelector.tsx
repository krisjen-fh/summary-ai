type Props = {
    source: string;
    setSource: (value: string) => void;
};

const SourceSelector = ({
    source, 
    setSource
}: Props) => {
    return (
        <select
            value={source}
            onChange={(e) => setSource(e.target.value)}
            className="source-select"
        >
            <option value="batamnews">
                Batam News
            </option>

            <option value="tribunnews">
                Tribun News
            </option>

            <option value="batampos">
                Batam Pos
            </option>

        </select>
    )
}

export default SourceSelector;