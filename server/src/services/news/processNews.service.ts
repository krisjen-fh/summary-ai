import { getbatamNewsArticles } from "../scraper/pythonRunner";
import { summarizeArticles } from "../gemini/gemini.service";
import { cleanArticleText } from "../../utils/textCleaner";

export const processNews = async () => {
    // scrape berita
    const articles = await getbatamNewsArticles();

    // ambil content 
    const contents = articles.map(
        (article: any) => cleanArticleText(article.content)
    );  

    // kirim ke gemini
    const summary = await summarizeArticles(contents);

    return {
        articles,
        summary
    };
};
