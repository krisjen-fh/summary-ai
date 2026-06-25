// import { Request, Response } from "express";
// import { runPythonRunner } from "../services/scraper/pythonRunner";

// export const scrapeBatamNews = async (
//     req: Request,
//     res: Response
// ) => {
//     try {

//         // const { source } =  await req.body; 

//         // const articles = await runPythonRunner();
//         const articles = [];

//         res.json({
//             success: true,
//             data: articles,
//         });
//     } catch (error) {
//         console.error(error);

//         res.status(500).json({
//             success: false,
//             message: "Scraping failed",
//         });
//     }
// };