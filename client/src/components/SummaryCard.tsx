type Props = {
  summary: string;
  articleCount: number;
  source: string;
  keyword: string;
}

import { parseSummary } from "../utils/summaryParser";

const SummaryCard = ({
  summary,
  articleCount,
  source,
  keyword
}: Props) => {
  const parsed = parseSummary(summary);
  console.log("keyword", keyword);
  return (
    <div className="summary-card">
    <h2>AI Summary</h2>
    <div className="summary-meta">
      <span>
        {source}
      </span>
      <span>
        Keyword: {keyword}
      </span>
      <span>
        {articleCount} artikel
      </span>
    </div>

    <div className="summary-section">
      <h3>Ringkasan Utama</h3>
      <p className="main-summary">
        {parsed.mainSummary}
      </p>
    </div>
    <div className="summary-section">
      <h3>Topik Utama</h3>
      <ul>
        {parsed.topics.map((topic, index) => (
          <li key={index}>
            {topic}
          </li>
        ))}
      </ul>
    </div>
    <div className="summary-section">
      <div className="summary-conclusion">
        <h3>Kesimpulan</h3>
        <p>
          {parsed.conclusion}
        </p>
      </div>
    </div>
    </div>
  );
};

export default SummaryCard;