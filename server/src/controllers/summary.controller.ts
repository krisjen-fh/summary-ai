import { Request, Response } from "express";
import { summarizeArticles } from "../services/gemini/gemini.service";

// export const generateSummary = async (
//   req: Request,
//   res: Response
// ) => {
//   try {
//     const { articles } = req.body;

//     const contents = articles.map(
//       (article: any) => article.content
//     );

//     const summary = await summarizeArticles(
//       contents
//     );

//     res.json({
//       success: true,
//       summary,
//     });

//   } catch (error) {
//     console.error(error);

//     res.status(500).json({
//       success: false,
//       message: "Summary generation failed",
//     });
//   }
// };

export const generateSummary = async (
  req: Request,
  res: Response
) => {
  try {
    console.log("BODY:", req.body);

    const { articles } = req.body;

    console.log("ARTICLES:", articles);

    const contents = articles.map(
      (article: any) => article.content
    );

    console.log("CONTENTS:", contents);

    const summary = await summarizeArticles(contents);

    console.log("SUMMARY:", summary);

    res.json({
      success: true,
      summary
    });

  } catch (error) {
    console.error("ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Summary generation failed"
    });
  }
};