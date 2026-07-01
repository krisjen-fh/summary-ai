type Props = {
  source: string;
  setSource: (value: string) => void;
};

const SourceSelector = ({
  source,
  setSource
}: Props) => {
  return (
    <div className="selector-wrapper">

      <label>
        Pilih Sumber Berita
      </label>
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
    </div>
  );
};

export default SourceSelector;