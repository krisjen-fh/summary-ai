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

        res.json({

            success: true,

            data: {
                source: source.toUpperCase(),

                articles_count: result.articles.length,
                
                summary: result.summary,

                generated_at: new Date().toISOString()

            }
        });
    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: "AI Service unavailable"
        });
    }
};