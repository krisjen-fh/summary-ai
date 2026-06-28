import { useLocation } from "react-router-dom";
import SummaryCard from "../components/SummaryCard";
import { useNavigate } from "react-router-dom";

const ResultPage = () => {

  const location = useLocation();

  const navigate = useNavigate();

  const result = location.state;

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
          articles={result.data.articles}
        />
      </div>      
    </div>

  );
};

export default ResultPage;