import os
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

    current_dir = os.path.dirname(__file__)

    save_path = os.path.join(current_dir, "sentiment_chart.png")

    plt.savefig(save_path)

    plt.close()