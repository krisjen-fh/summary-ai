export interface ProcessNewsResponse {
  success: boolean;
  data: {
    source: string;
    total_articles: number;
    summary: string;
    generated_at: string;
  };
}