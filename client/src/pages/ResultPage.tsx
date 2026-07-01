import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SummaryCard from "../components/SummaryCard";
import AnalysisCard from "../components/AnalysisCard";

const ResultPage = () => {

  const location = useLocation();

  const navigate = useNavigate();

  const result = location.state;
  console.log("sentiment_chart:", result.data.sentiment_chart)
  console.log("wordcloud:", result.data.wordcloud)

  return (

    <div className="page-container">
      <div className="result-header">
        <button
          className="back-btn"
          onClick={() => navigate("/")}
        >
          Kembali
        </button>
        <h1>Hasil Analisis Berita</h1>
      </div>
      <div className="content-wrap">

        <SummaryCard
          summary={result.data.summary}
          articleCount={result.data.articles_count}
          source={result.data.source}
          keyword={result.data.keyword}
        />

        <AnalysisCard
          articles={result.data.articles}

          sentimentDistribution={
            result.data.sentiment_distribution
          }

          wordcloudPath={
            result.data.wordcloud
          }

          sentimentChartPath={
            result.data.sentiment_chart
          }
        />
      </div>    
    </div>

  );
};

export default ResultPage;