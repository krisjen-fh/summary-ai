import api from "../services/api";

const Home = () => {
  const testBackend = async () => {
    try {
      const response = await api.get("/test");
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>News AI Summary</h1>

      <button onClick={testBackend}>
        Test Backend
      </button>
    </div>
  );
};

export default Home;