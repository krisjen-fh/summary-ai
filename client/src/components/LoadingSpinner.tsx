type Props = {
  source: string;
};

const LoadingSpinner = ({ source }: Props) => {
  return (
    <div className="loading-box">

      <div className="spinner"></div>

      <p>
        Mengambil berita dari {source}
      </p>

      <p>
        AI sedang menganalisis...
      </p>

    </div>
  );
};

export default LoadingSpinner;