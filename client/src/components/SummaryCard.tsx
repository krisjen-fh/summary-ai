import { useState } from "react";

type Props = {
  summary: string;
  articleCount: number;
  source: string;
  // articles: {
  //   title: string;
  //   link: string;
  // }[];
  articles: any[];
};

import { parseSummary } from "../utils/summaryParser";

const SummaryCard = ({
  summary,
  articleCount,
  source,
  articles
}: Props) => {

  const parsed = parseSummary(summary);

  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="summary-card">

      <h2>Hasil Ringkasan AI</h2>

      <div className="summary-meta">
        <div className="meta-box">
          <p>Sumber berita: {source}</p>
        </div>
        <div className="meta-box">
          <span>Artikel yang sudah di scrape: {articleCount}</span>
        </div>
        {/* <p
          className="show-links"
          onClick={() => setShowLinks(!showLinks)}
        >🔗 Lihat sumber berita</p> */}

        <h3>Artikel yang dianalisis</h3>
        <div className="article-links">
          {
            articles.map((article, index) => (
              <a
                key={index}
                href={article.link}
                target="_blank"
              >
                {index + 1}. {article.title}
              </a>
            ))
          }
        </div>

        {/* {
          showLinks && (
            <div className="article-links">

              {
                articles.map((article, index) => (

                  <a
                    key={index}
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {index + 1}. {article.title}
                  </a>

                ))
              }

            </div>
          )
        } */}

      </div>

      <p>
        {parsed.mainSummary}
      </p>

      <h3>
        Topik Utama
      </h3>

      <ul>

        {
          parsed.topics.map((topic, index) => (

            <li key={index}>
              {topic}
            </li>

          ))
        }

      </ul>

      <h3>
        Kesimpulan
      </h3>

      <p>
        {parsed.conclusion}
      </p>

    </div>
  );
};

export default SummaryCard;