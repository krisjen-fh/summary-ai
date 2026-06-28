export interface Article {
  title: string;
  link: string;
};

export interface ProcessNewsResponse {
  success: boolean;
  data: {
    source: string;
    total_articles: number;
    summary: string;
    generated_at: string;
    articles: Article[]; 
  };
}