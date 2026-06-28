// // type Props = {
// //   articles: any[];
// //   articleCount: number;
// // };

// // const AnalysisCard = ({
// //   articles,
// //   articleCount
// // }: Props) => {

// //   return (

// //     <div className="analysis-card">

// //       <h2>
// //         NLP Analysis
// //       </h2>

// //       <p>
// //         Total scraped articles:
// //         {articleCount}
// //       </p>

// //       <h3>
// //         Relevant Articles
// //       </h3>

// //       {
// //         articles.map((article, index) => (

// //           <div
// //             key={index}
// //             className="article-box"
// //           >

// //             <h4>
// //               {article.title}
// //             </h4>

// //             <p>
// //               Sentiment:
// //               {article.sentiment}
// //             </p>

// //             <p>
// //               Similarity:
// //               {
// //                 article.similarity_score
// //                   ?.toFixed(4)
// //               }
// //             </p>

// //             <a
// //               href={article.link}
// //               target="_blank"
// //             >
// //               Read Article
// //             </a>

// //             <hr />

// //           </div>

// //         ))
// //       }

// //     </div>
// //   );
// // };

// // export default AnalysisCard;

// type Props = {
//   sentimentDistribution: {
//     positive: number;
//     neutral: number;
//     negative: number;
//   };

//   wordcloudPath: string;

//   sentimentChartPath: string;
// };

// const AnalysisCard = ({
//   sentimentDistribution,
//   wordcloudPath,
//   sentimentChartPath
// }: Props) => {
//   return (
//     <div className="analysis-card">

//       <h2>
//         NLP Analysis
//       </h2>

//       <div>

//         <p>
//           Positive:
//           {sentimentDistribution.positive}
//         </p>

//         <p>
//           Neutral:
//           {sentimentDistribution.neutral}
//         </p>

//         <p>
//           Negative:
//           {sentimentDistribution.negative}
//         </p>

//       </div>

//       <h3>Word Cloud</h3>

//       <img
//         src={`http://localhost:5000/output/${wordcloudPath}`}
//         alt="wordcloud"
//       />

//       <h3>Sentiment Distribution</h3>

//       <img
//         src={`http://localhost:5000/output/${sentimentChartPath}`}
//         alt="chart"
//       />

//       <h3>Top Relevant Articles</h3>

//         <div>

//         <p>{article.title}</p>

//         <p>
//         Sentiment: {article.sentiment}
//         </p>

//         <p>
//         Score: {article.similarity_score}
//         </p>

//         </div>

//     </div>
//   );
// };

// export default AnalysisCard;


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

      <h2>NLP Analysis</h2>

      <h3>Preprocessing</h3>

      <ul>
        <li>Lowercase</li>
        <li>Punctuation Removal</li>
        <li>Stopword Removal</li>
        <li>Stemming</li>
      </ul>

      <h3>Sentiment Distribution</h3>

      <p>
        Positive:
        {sentimentDistribution.positive}
      </p>

      <p>
        Neutral:
        {sentimentDistribution.neutral}
      </p>

      <p>
        Negative:
        {sentimentDistribution.negative}
      </p>

      <img
        src={`http://localhost:5000/output/${sentimentChartPath}`}
      />

      <h3>Keyword Relevance</h3>

      <img
        src={`http://localhost:5000/output/${wordcloudPath}`}
      />

      <h3>Top Relevant Articles</h3>

      {
        articles.map((article, index) => (

          <div key={index}>

            <p>
              {article.title}
            </p>

            <p>
              Sentiment:
              {article.sentiment}
            </p>

            <p>
              Similarity:
              {article.similarity_score}
            </p>

            <a
              href={article.link}
              target="_blank"
            >
              Open Article
            </a>

            <hr />

          </div>

        ))
      }

    </div>
  );
};

export default AnalysisCard;