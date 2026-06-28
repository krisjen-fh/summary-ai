import json
import sys

# kalau scraping di blok web
# from nlp.dummy_data import get_dummy_articles

from batamnews.scraper import ( scrape_batamnews )
from nlp.preprocess import preprocess_text
from nlp.vectorizer import ( find_relevant_articles )
from nlp.sentiment import ( classify_sentiment )
from nlp.visualize import generate_wordcloud
from nlp.visualize_sentiment import ( create_sentiment_chart )
from nlp.summarizer import chunk_articles

def count_sentiment(articles):
    positive = 0
    negative = 0
    neutral = 0

    for article in articles:
        if article["sentiment"] == "positive":
            positive += 1
        elif article["sentiment"] == "negative":
            negative += 1
        else:
            neutral += 1

    return {
        "positive": positive,
        "negative": negative,
        "neutral": neutral
    }

def run_pipeline(keyword):
    # dapetin artikel
    articles = scrape_batamnews()[:10]
    # print("Total article: ", len(articles))

    # kalau scraping di blok web
    # articles = get_dummy_articles()

    processed_articles = []

    # preprocessing artikel
    for article in articles:
        cleaned_text = preprocess_text(article["content"])
        article["cleaned_content"] = cleaned_text
        processed_articles.append(article)

    # temukan artikel yang relevan dengan keyword
    relevant_articles = find_relevant_articles(
        processed_articles, keyword
    )
    for article in relevant_articles:
        sentiment = classify_sentiment(article["cleaned_content"])
        article["sentiment"] = sentiment    

    #hitung sentimen yang ada di relevan artikel
    sentiment_summary = count_sentiment(relevant_articles)

    # chunking relevan artikel, supaya gemini ga kena limit
    article_chunks = chunk_articles(relevant_articles)
    # print("Total chunks: ", len(article_chunks))

    # buat diagram batang sentimen
    sentiment_chart_path = create_sentiment_chart(relevant_articles)

    # buat wordcloud berdasarkan relevan artikel
    combined_text = " ".join(
        [article["cleaned_content"] for article in relevant_articles]
    )
    wordcloud_path = generate_wordcloud(combined_text)

    return {
        "articles": relevant_articles,
        "keyword": keyword,
        "chunk": article_chunks,
        "sentiment_summary": sentiment_summary,
        "wordcloud": wordcloud_path,
        "sentiment_chart_path": sentiment_chart_path
    }

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Keyword is missing")
        sys.exit(1)
        
    keyword = sys.argv[1]

    result = run_pipeline(keyword)
    print(json.dumps(result))