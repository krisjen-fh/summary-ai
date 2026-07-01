import matplotlib.pyplot as plt
from collections import Counter


def create_sentiment_chart(articles):

    sentiments = [
        article["sentiment"]
        for article in articles
    ]

    counter = Counter(sentiments)

    labels = counter.keys()
    values = counter.values()

    plt.figure(figsize=(6, 4))

    plt.bar(labels, values)

    plt.title("Sentiment Distribution")

    save_path = "nlp/sentiment_chart.png"

    plt.savefig(save_path)

    return "output/sentiment_chart.png"