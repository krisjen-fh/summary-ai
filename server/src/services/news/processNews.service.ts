import { runPythonRunner } from "../scraper/pythonRunner";
import { summarizeArticles } from "../gemini/gemini.service";
import { cleanArticleText } from "../../utils/textCleaner";

export const processNews = async (
    source: string
) => {

    let articles;

    // penentuan ambil berita darimana
    if (source === "batamnews") {
        articles = await runPythonRunner("python/batamnews/scraper.py");
    } else if (source === "tribunbatam") {
        "Tribunbatam not ready yet."
    } else if (source === "batampos") {
        "Batam Pos not ready yet."
    } else {
        throw new Error(
            "Invalid source."
        );
    }

    // scrape berita
    // const articles = await getbatamNewsArticles();

    // ambil content kalo misal api belum ada error payload
    // const contents = articles.map(
    //     (article: any) => cleanArticleText(article.content)
    // );  

    // ambil content kalo misal api ada error payload
    const contents = articles
    .slice(0, 3)
    .map(
        (article: any) =>
        cleanArticleText(article.content)
    );

    console.log(
    "Total articles:",
    contents.length
    );

    console.log(
    "First article chars:",
    contents[0].length
    );

    const totalChars = contents.join("").length;

    console.log(
    "Total chars:",
    totalChars
    );


    // kirim ke gemini
    const summary = await summarizeArticles(contents);

    return {
        articles,
        summary
    };
};
