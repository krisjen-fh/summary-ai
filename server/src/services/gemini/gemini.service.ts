import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
    process.env.GEMINI_API_KEY!
);

const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
});

// helper delay
const delay = (ms: number) =>
    new Promise((resolve) =>
        setTimeout(resolve, ms)
    );

export const summarizeArticles = async (
    articles: string[]
) => {

    const chunks = [];
    for (let i = 0; i < articles.length; i += 3) {
    chunks.push(
        articles.slice(i, i + 3)
    );
    }

    let partialSummaries = [];

    for (const chunk of chunks) {

    const prompt = `
    Berikut beberapa artikel berita.

    ${chunk.join("\n\n")}

    Tugas:
    1. Ringkas inti berita
    2. Ambil informasi penting
    3. Tulis dalam Bahasa Indonesia singkat

    Return summary only.
    `;

    const result =
        await model.generateContent(prompt);

    partialSummaries.push(
        result.response.text()
    );
    }


    const combinedArticles =
        partialSummaries.join("\n\n");

    const finalPrompt = `
        You are a professional news analyst.

        Below are multiple news articles.

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

    let retries = 3;

    while (retries > 0) {

        try {

            const result =
                await model.generateContent(
                    finalPrompt
                );
            return result.response.text();

        } catch (error: any) {

            if (error.status === 429) {
                throw new Error(
                    "GEMINI_QUOTA_EXCEEDED"
                );
            }

            if (error.status === 503) {

                console.log(
                    "Gemini busy, retrying..."
                );
                retries--;
                console.log(
                    `Gemini busy. Retry left: ${retries}`
                );
                await delay(3000);
                continue;

            } 
            
            throw error;
        }
    }
    throw new Error(
        "Gemini unavailable."
    );
};