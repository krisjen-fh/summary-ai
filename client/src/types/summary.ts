export interface Article {
  title: string;
  link: string;
  sentiment: string;
  similarity_score: number;
};

export interface ProcessNewsResponse {
  success: boolean;
  data: {
    source: string;
    summary: string;
    articles_count: string;
    generated_at: string;

    articles: Article[]; 

    sentiment_distribution: {
      positive: number;
      negative: number;
      neutral: number;
    };

    wordcloud: string;
    sentiment_chart: string;
  };
}