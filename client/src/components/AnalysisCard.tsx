type Props = {
  articles: any[];

  sentimentDistribution: {
    positive: number;
    neutral: number;
    negative: number;
  };

  wordcloudPath: string;
  sentimentChartPath: string;
};

const AnalysisCard = ({
  articles,
  sentimentDistribution,
  wordcloudPath,
  sentimentChartPath
}: Props) => {

  return (

    <div className="analysis-card">

      <h2>NLP Analysis Dashboard</h2>

      {/* sentiment overview */}

      <div className="analysis-grid">

        <div className="sentiment-box">

          <h3>Sentiment Distribution</h3>

          <div className="sentiment-stats">

            <div className="positive-stat">
              Positive: {sentimentDistribution.positive}
            </div>

            <div className="neutral-stat">
              Neutral: {sentimentDistribution.neutral}
            </div>

            <div className="negative-stat">
              Negative: {sentimentDistribution.negative}
            </div>

          </div>

        </div>

        <div className="chart-box">

          <img
            src={`http://localhost:5000/${sentimentChartPath.trim()}`}
            alt="Sentiment Chart"
          />

        </div>

      </div>

      {/* wordcloud */}

      <div className="wordcloud-section">

        <h3>Keyword Relevance</h3>

        <img
          src={`http://localhost:5000/${wordcloudPath.trim()}`}
          alt="Wordcloud"
        />

      </div>

      {/* article list */}

      <div className="article-section">

        <h3>Top Relevant Articles</h3>

        {articles.map((article, index) => (

          <div
            className="article-item"
            key={index}
          >

            <h4>
              {article.title}
            </h4>

            <div className="article-meta">

              <span>
                Sentiment: {article.sentiment}
              </span>

            </div>

            <a
              href={article.link}
              target="_blank"
            >
              Read Article →
            </a>

          </div>

        ))}

      </div>

    </div>

  );
};

export default AnalysisCard;