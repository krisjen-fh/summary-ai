type Props = {
  wordcloudPath: string;
  sentimentChartPath: string;
};

const VisualizationCard = ({
  wordcloudPath,
  sentimentChartPath
}: Props) => {

  return (

    <div className="visual-card">

      <h2>
        Visualization
      </h2>

      <h3>
        Word Cloud
      </h3>

      <img
        src={wordcloudPath}
        alt="wordcloud"
      />

      <h3>
        Sentiment Distribution
      </h3>

      <img
        src={sentimentChartPath}
        alt="sentiment chart"
      />

    </div>
  );
};

export default VisualizationCard;