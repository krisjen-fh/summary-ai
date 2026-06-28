from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

def find_relevant_articles(articles, keyword):
    documents = [article["content"] for article in articles]

    vectorizer = TfidfVectorizer()

    tfidf_matrix = vectorizer.fit_transform(documents)

    keyword_vector = vectorizer.transform([keyword])
    
    similarity = cosine_similarity(
        keyword_vector,
        tfidf_matrix
    )[0]

    scored = []

    for i, article in enumerate(articles):

        scored.append({
            **article,
            "score": float(
                similarity[i]
            )
        })

    scored.sort(
        key=lambda x: x["score"],
        reverse=True
    )

    return scored[:5]