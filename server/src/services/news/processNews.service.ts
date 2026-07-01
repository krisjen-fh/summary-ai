import { runPythonRunner } from "../scraper/pythonRunner";
import { summarizeArticles } from "../gemini/gemini.service";
import { ERRORS } from "../../utils/errors";

export const processNews = async (
    source: string,
    keyword: string
) => {

    let pipelineResult: any;

    // penentuan ambil berita darimana
    if (source === "batamnews") {
        pipelineResult = await runPythonRunner(keyword);
    } else if (source === "tribunnews") {
        
        throw new Error(ERRORS.TRIBUN);

    } else if (source === "batampos") {
        
        throw new Error(ERRORS.BATAM_POS);

    } else {

        throw new Error(ERRORS.INVALID_SOURCE);

    }
    
    const articles = pipelineResult.articles;
    const sentimentDistribution = pipelineResult.sentiment_summary;
    const wordcloudPath = pipelineResult.wordcloud;
    const sentimentChartPath = pipelineResult.sentiment_chart_path;

    // kirim ke gemini
    // const summary = await summarizeArticles(
    //     pipelineResult.articles.map(
    //         (article: any) =>
    //             article.content
    // ));

    console.log(
        "PIPELINE RESULT:",
        pipelineResult
    );

    console.log("wordcloudPath", wordcloudPath);
    console.log("sentimentChartPath", sentimentChartPath);

    // dummy dulu
    // const summary = "testing backend";

    const topContents = articles.map(
        (article: any) => article.content
    );

    const summary = await summarizeArticles(topContents);

    return {
        articles,
        summary,
        sentimentDistribution,
        wordcloudPath,
        sentimentChartPath,
        keyword
    };
};
