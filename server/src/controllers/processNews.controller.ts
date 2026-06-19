import { Request, Response } from "express";
import { processNews } from "../services/news/processNews.service";
import { summarizeArticles } from "../services/gemini/gemini.service";

export const handleProcessNews = async (
    req: Request,
    res: Response
) => {
    try {
        const result = await processNews();

        res.json({
            success: true,
            articles_count: result.articles.length,
            summary: result.summary
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success:false,
            message: "News processing failed"
        });
    }
};