export const parseSummary = (
  text: string
) => {

  const lines = text.split("\n");

  const cleanText = (text: string) => {
    return text.replace(/\*/g, "").trim();
  }

  let mainSummary = "";
  let topics: string[] = [];
  let conclusion = "";

  let mode = "";

  for (const line of lines) {

    if (
      line.includes("Main topics") ||
      line.includes("Topik")
    ) {
      mode = "topics";
      continue;
    }

    if (
      line.includes("General conclusion") ||
      line.includes("Kesimpulan")
    ) {
      mode = "conclusion";
      continue;
    }

    if (mode === "") {
      mainSummary += line + " ";
    }

    else if (mode === "topics") {

      if (line.includes("*") || line.includes("-")) {
        topics.push(
          line.replace("*", "").replace("-", "").trim()
        );
      }

    }

    else if (mode === "conclusion") {
      conclusion += line + " ";
    }
  }

  mainSummary = cleanText(mainSummary);
  conclusion = cleanText(conclusion);

  return {
    mainSummary,
    topics,
    conclusion
  };
};