import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { processNews } from "../services/api";
import LoadingSpinner from "../components/LoadingSpinner";
import Header from "../components/Header";
import SourceSelector from "../components/SourceSelector";
import GenerateButton from "../components/GenerateButton";
import Footer from "../components/Footer";
import ErrorMessage from "../components/ErrorMessage";

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  
  const [source, setSource] = useState("batamnews");

  const navigate = useNavigate();
  
  const [error, setError] = useState("");
  
  const handleGenerate = async () => {

    setError("");

    try {
      setLoading(true);

    const result = await processNews(source);


      navigate("/result", {
        state: result
      });

    } catch (error) {
      console.log(error);
      setError("AI sedang sibuk, coba beberapa saat lagi.");
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