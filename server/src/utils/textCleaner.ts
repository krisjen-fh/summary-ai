export const cleanArticleText = (
    text: string
) => {
    return text
        .replace(/Copyright.*?/gi, "")
        .replace(/Follow Us/gi, "")
        .replace(/Login untuk menyimpan artikel.*?/gi, "")
        .replace(/\s+/g, " ")
        .trim();
};