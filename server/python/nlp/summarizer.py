def chunk_articles(articles, chunk_size=2):
    chunks = []
    for i in range(0, len(articles), chunk_size):
        chunk = articles[i:i + chunk_size]
        chunks.append(chunk)
    
    return chunks