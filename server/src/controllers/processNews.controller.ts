import { Request, Response } from "express";
import { processNews } from "../services/news/processNews.service";
import { summarizeArticles } from "../services/gemini/gemini.service";

export const handleProcessNews = async (
    req: Request,
    res: Response
) => {
    try {
        
        const { source } = req.body;

        console.log(source);

        const result = await processNews(source);

        const sourceNameMap: Record<string, string> = {
            batamnews: "Batam News",
            tribunnews: "Tribun Batam",
            batampos: "Batam Pos"
        };

        res.json({

            success: true,

            data: {
                source: sourceNameMap[source],

                articles_count: result.articles.length,
                
                summary: result.summary,

                generated_at: new Date().toISOString(),

                articles: result.articles

            }
        });
    } catch (error: any) {

        if (error.message === "GEMINI_QUOTA_EXCEEDED") {
            return res.status(429).json({
                success: false,
                error: error.message
            });
        }

        if (error.message === "GEMINI_UNAVAILABLE") {
            return res.status(503).json({
                success: false,
                error: error.message
            });
        }

        return res.status(500).json({
            success: false,
            error: error.message
        });
    }
};