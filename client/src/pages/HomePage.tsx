import { useState } from "react";
import { processNews } from "../services/api";
import LoadingSpinner from "../components/LoadingSpinner";
import Header from "../components/Header";
import SourceSelector from "../components/SourceSelector";
import GenerateButton from "../components/GenerateButton";
import Footer from "../components/Footer";
import ErrorMessage from "../components/ErrorMessage";
import SummaryCard from "../components/SummaryCard";
import AnalysisCard from "../components/AnalysisCard";

const HomePage = () => {

  const [loading, setLoading] = useState(false);
  const [source, setSource] = useState("batamnews");
  const [keyword, setKeyword] = useState("");

  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState("");
  const [hasGenerated, setHasGenerated] = useState(false);

  const handleGenerate = async () => {
    setError("");

    if (!keyword) {
      setError("Masukkan keyword dulu");
      return;
    }

    try {

      setLoading(true);

      const response = await processNews(
        source,
        keyword
      );

      console.log(response.data);

      setResult(response);

      setHasGenerated(true);

    } catch (error: any) {

      const backendError =
        error.response?.data?.error;

      switch (backendError) {

        case "GEMINI_QUOTA_EXCEEDED":
          setError("Kuota AI habis.");
          break;

        default:
          setError("Server bermasalah");
      }

    } finally {

      setLoading(false);

    }
  };

  return (

    <div className="page-container">

      <Header />

      <div className="content-wrap">

        {
          !hasGenerated && (

            <div className="intro-section">

              <h2>
                Ringkas Berita Regional dengan AI
              </h2>

              <p>
                Sistem ini mengambil berita terbaru dari portal berita Batam
                dan menghasilkan analisis otomatis.
              </p>

              <div className="feature-list">

                <div>✓ Ringkasan otomatis</div>

                <div>✓ NLP Sentiment</div>

                <div>✓ Wordcloud</div>

                <div>✓ Gemini AI</div>

              </div>

            </div>
          )
        }

        <div className="hero-card">

          <SourceSelector
            source={source}
            setSource={setSource}
          />

          <input
            className="keyword-input"
            value={keyword}
            placeholder="Masukkan keyword..."
            onChange={(e) =>
              setKeyword(e.target.value)
            }
          />

          {
            loading
            ? <LoadingSpinner source={source}/>
            : (
              <GenerateButton
                onClick={handleGenerate}
                loading={loading}
              />
            )
          }

          {
            error &&
            <ErrorMessage message={error}/>
          }

        </div>

        {
          result && (

            <div className="result-section">

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
                  `${result.data.wordcloud.trim()}`
                }
                sentimentChartPath={
                  `${result.data.sentiment_chart.trim()}`
                }
              />

            </div>
          )
        }

      </div>

      <Footer />

    </div>
  );
};
export default HomePage;
