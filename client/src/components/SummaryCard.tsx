// type Props = {
//   summary: string;
//   source: string;
// };

// import { parseSummary } from "../utils/summaryParser";

// const SummaryCard = ({
//   summary,
//   source
// }: Props) => {

//   const parsed = parseSummary(summary);

//   return (
//     <div className="summary-card">

//       <h2>AI Summary</h2>

//       <p>Sumber: {source}</p>

//       <p>{parsed.mainSummary}</p>

//       <h3>Topik Utama</h3>

//       <ul>
//         {
//           parsed.topics.map((topic, index) => (
//             <li key={index}>
//               {topic}
//             </li>
//           ))
//         }
//       </ul>

//       <h3>Kesimpulan</h3>

//       <p>{parsed.conclusion}</p>

//     </div>
//   );
// };

// export default SummaryCard;


type Props = {
  summary: string;
  articleCount: number;
  source: string;
  keyword: string;
}

import { parseSummary } from "../utils/summaryParser";

const SummaryCard = ({
  summary,
  articleCount,
  source,
  keyword
}: Props) => {
  const parsed = parseSummary(summary);
  return (
    <div className="summary-card">

    <h2>AI Summary</h2>

    <p>Sumber: {source}</p>

    <p>Keyword: {keyword}</p>

    <p>Total Artikel: {articleCount}</p>

    <hr />

    <p>{parsed.mainSummary}</p>

    <h3>Topik Utama</h3>

    <ul>
    ...
    </ul>

    <h3>Kesimpulan</h3>

    <p>{parsed.conclusion}</p>

    </div>
  );
};

export default SummaryCard;