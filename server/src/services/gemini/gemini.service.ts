import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
    process.env.GEMINI_API_KEY!
);

const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
});

export const summarizeArticles = async (
    articles: string[]
) => {
    const combinedArticles = articles.join("\n\n");

    const prompt = `
        You are a professional news analyst.
        Below are mult iple news articles.
        Your job:
        1. Read all articles carefully
        2. Find the important common themes
        3. Summarize the important events
        4. Write summary in Bahasa Indonesia
        5. Keep summary concise but informative

        Summary Procedure:
        1. Main summary (maximum 2 paragraphs)
        2. Main topics discussed:
        - point 1
        - point 2
        - point 3
        3. General conclusion about the situation in Batam today

        Articles:
        ${combinedArticles}

        Return only summary.
    `;

    const result = await model.generateContent(prompt);

    return result.response.text();
}