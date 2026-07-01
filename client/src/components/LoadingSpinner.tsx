type Props = {
  source: string;
};

const LoadingSpinner = ({
  source
}: Props) => {
  return (
    <div className="loading-box">

      <div className="spinner"></div>

      <br></br>

      <h3>
        Sedang Memproses...
      </h3>

      <br></br>

      <p>
        Mengambil berita dari {source}
      </p>

      <p>
        AI sedang menganalisis artikel
      </p>

    </div>
  );
};

export default LoadingSpinner;