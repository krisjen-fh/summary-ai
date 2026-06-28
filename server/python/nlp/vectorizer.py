from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity


def find_relevant_articles(
    articles,
    keyword
):

    documents = []

    for article in articles:
        documents.append(
            article["cleaned_content"]
        )

    # untuk sementara score tfidf masih kecil, solusi nanti bakal ganti ke bm25.
    # jadi ini di nonaktif dulu
    # documents.append(keyword)

    # pake code ini dulu, untuk ningkatin score tf idf hehe, lil hack, work smart darling :)
    documents.append(
        " ".join([keyword] * 10)
    )

    vectorizer = TfidfVectorizer()

    tfidf_matrix = vectorizer.fit_transform(
        documents
    )

    keyword_vector = tfidf_matrix[-1]

    article_vectors = tfidf_matrix[:-1]

    similarities = cosine_similarity(
        article_vectors,
        keyword_vector
    )

    scored_articles = []

    for i, article in enumerate(articles):

        article["score"] = float(
            similarities[i][0]
        )

        scored_articles.append(article)

    scored_articles.sort(
        key=lambda x: x["score"],
        reverse=True
    )

    return scored_articles[:5]