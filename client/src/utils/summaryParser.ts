export const parseSummary = (
  text: string
) => {

  // cleanup output bawaan Gemini yang suka nambah intro
  text = text
    .replace(
      /Berikut adalah ringkasan dari artikel-artikel berita tersebut:?/gi,
      ""
    )
    .replace(
      /\*\*Ringkasan Utama\*\*/gi,
      ""
    )
    .replace(
      /Ringkasan Utama:?/gi,
      ""
    )
    .trim();

  const lines = text
    .split("\n")
    .map(line => line.trim())
    .filter(Boolean);

  let mainSummary = "";
  let topics: string[] = [];
  let conclusion = "";

  let mode = "summary";

  for (const line of lines) {

    const lower = line.toLowerCase();

    // pindah mode ke topik
    if (
      lower.includes("main topics") ||
      lower.includes("topik utama") ||
      lower === "topik"
    ) {
      mode = "topics";
      continue;
    }

    // pindah mode ke kesimpulan
    if (
      lower.includes("general conclusion") ||
      lower.includes("kesimpulan")
    ) {
      mode = "conclusion";
      continue;
    }

    // bagian summary utama
    if (mode === "summary") {
      mainSummary += line + " ";
    }

    // bagian topik
    else if (mode === "topics") {

      // kalau ada bullet numbering
      if (
        /^(\d+\.|-|\*|•)/.test(line)
      ) {
        topics.push(
          line.replace(
            /^(\d+\.|-|\*|•)\s*/,
            ""
          )
        );
      }

      // kalau Gemini ga kasih bullet
      else {
        topics.push(line);
      }
    }

    // bagian conclusion
    else if (mode === "conclusion") {
      conclusion += line + " ";
    }
  }

  // final cleanup tambahan
  mainSummary = mainSummary
    .replace(/^\:+/, "")
    .trim();

  conclusion = conclusion
    .replace(/^\:+/, "")
    .trim();

  return {
    mainSummary,
    topics,
    conclusion
  };
};