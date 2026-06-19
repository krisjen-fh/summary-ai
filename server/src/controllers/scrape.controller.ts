import { Request, Response } from "express";
import { getbatamNewsArticles } from "../services/scraper/pythonRunner";

export const scrapeBatamNews = async (
    req: Request,
    res: Response
) => {
    try {
        const articles = await getbatamNewsArticles();

        res.json({
            success: true,
            data: articles,
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Scraping failed",
        });
    }
};