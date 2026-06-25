type Props = {
  summary: string;
  articleCount: number;
  source: string;
};

import { parseSummary } from "../utils/summaryParser";

const SummaryCard = ({
  summary,
  articleCount,
  source
}: Props) => {

  const parsed = parseSummary(summary);

  return (
    <div className="summary-card">

      <h2>
        Hasil Ringkasan AI
      </h2>

      <div className="summary-meta">

        <p>
            Sumber berita: {source}
        </p>

        <span>
          Artikel: {articleCount}
        </span>

      </div>

      <p>
        {parsed.mainSummary}
      </p>

      <h3>
        Topik Utama
      </h3>

      <ul>

        {
          parsed.topics.map((topic, index) => (

            <li key={index}>
              {topic}
            </li>

          ))
        }

      </ul>

      <h3>
        Kesimpulan
      </h3>

      <p>
        {parsed.conclusion}
      </p>

    </div>
  );
};

export default SummaryCard;