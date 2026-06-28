import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { processNews } from "../services/api";
import LoadingSpinner from "../components/LoadingSpinner";
import Header from "../components/Header";
import SourceSelector from "../components/SourceSelector";
import GenerateButton from "../components/GenerateButton";
import Footer from "../components/Footer";
import ErrorMessage from "../components/ErrorMessage";
// import { AxiosError } from "axios";

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  
  // untuk sementara pake fix yang batamnews dulu yak
  const [source, setSource] = useState("batamnews");

  const [keyword, setKeyword] = useState("");

  console.log("SELECTED SOURCE:", source);

  const navigate = useNavigate();
  
  const [error, setError] = useState("");
  
  const handleGenerate = async () => {

    setError("");

    if (!keyword) {
      setError("Masukkan keyword dulu.");
      return;
    }

    try {
      setLoading(true);

    const result = await processNews(source, keyword);


      navigate("/result", {
        state: result
      });

    } catch (error: any) {

      console.log("FULL ERROR:", error)

      console.log(
        "FULL RESPONSE:",
        error.response?.data
      );

      const backendError = error.response?.data?.error;

      console.log("BACKEND ERROR:", backendError);

      switch (backendError) {

        case "GEMINI_QUOTA_EXCEEDED":
          setError(
            "Kuota AI hari ini habis. Coba lagi nanti."
          );
          break;

        case "GEMINI_UNAVAILABLE":
          setError(
            "AI sedang sibuk, coba beberapa saat lagi."
          );
          break;

        case "TRIBUN_BATAM_NOT_READY":
          setError(
            "Scraper Tribun Batam belum tersedia."
          );
          console.log("Tribun News not ready.");
          break;
        
        case "BATAM_POS_NOT_READY":
          setError(
            "Scraper Batam Pos Not Ready"
          );
          console.log("Batam pos not ready.");
          break;

        case "SCRAPER_FAILED":
          setError(
            "Gagal mengambil berita dari website."
          );
          break;

        default:
          setError(
            "Server sedang bermasalah."
          );
      }

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-container">

      <Header />

      <div className="content-wrap">
        <div className="control-box">
          <SourceSelector
            source={source}
            setSource={setSource}
          />

          <input 
            type="text"
            placeholder="Masukkan keyword..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />

          {
            loading ? (
              <LoadingSpinner 
                source={source}
              />
            ) : (
              <GenerateButton 
                onClick={handleGenerate}
                loading={loading}
              />
            )
          }
        </div>
        {
        error && (
          <ErrorMessage
            message={error}
          />
        )
      }
      </div>
      <Footer />  
    </div>
  );
};

export default HomePage;