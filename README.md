# Summora

AI-powered news summarization platform built using Natural Language Processing (NLP), Information Retrieval, and Generative AI.

---

## Overview

Summora is a web-based application designed to help users quickly understand information from news articles by automatically retrieving, analyzing, and summarizing content from multiple news sources.

The system combines traditional NLP techniques such as TF-IDF Vectorization and Cosine Similarity Search with Generative AI summarization to generate concise and relevant information.

Main capabilities:

- News article scraping from multiple sources
- Text preprocessing pipeline
- TF-IDF vectorization
- Cosine similarity-based article retrieval
- Sentiment analysis
- AI-powered summarization
- Word cloud visualization
- Interactive web interface

---

## System Architecture

```text
User Input (Keyword + Source)
                │
                ▼
        Article Scraping
            (Python)
                │
                ▼
        Text Preprocessing
  - Lowercase Conversion
  - Remove Punctuation
  - Stopword Removal
  - Stemming
                │
                ▼
        TF-IDF Vectorization
                │
                ▼
      Cosine Similarity Search
                │
                ▼
    Retrieve Relevant Articles
          ┌─────────────┐
          │             │
          ▼             ▼
  Sentiment Analysis   Summary Module
          │             │
          ▼             ▼
 WordCloud Visualization Gemini API
          └──────┬──────┘
                 ▼
           Display Result
````

---

## Tech Stack

### Frontend

* React.js
* Vite
* Axios
* CSS

### Backend

* Node.js
* Express.js

### NLP Processing

* Python
* Scikit-learn
* TF-IDF Vectorizer
* Cosine Similarity

### AI Integration

* Gemini API

### Data Processing

* BeautifulSoup
* Regex
* Stopword Removal
* Stemming

### Visualization

* WordCloud

---

## Features

### 1. Source Selection

Users can choose a news source before starting the analysis process.

### 2. Keyword Search

Users input a keyword to search related articles.

### 3. Web Scraping

The system automatically retrieves articles from the selected source.

### 4. Text Preprocessing

Text preprocessing includes:

* Lowercase conversion
* Removing punctuation
* Stopword removal
* Stemming

### 5. TF-IDF Vectorization

Articles are transformed into numerical vectors using TF-IDF.

### 6. Similarity Search

The system calculates similarity between user keywords and articles using cosine similarity.

### 7. Article Retrieval

The most relevant articles are ranked and selected.

### 8. Sentiment Analysis

Sentiment classification is performed on retrieved articles.

Possible labels:

* Positive
* Neutral
* Negative

### 9. AI Summary Generation

Relevant articles are sent to Gemini API to generate concise summaries.

### 10. Visualization

Word cloud visualization is generated from processed article data.

---

## Project Structure

```bash
summora/
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── services/
│
├── backend/
│   ├── routes/
│   ├── controllers/
│   ├── server.js
│   ├── api/
│   ├── python/
│   │   ├── batamnews/
│   │   │   └── __init__.py
│   │   │   └── scraper.py
│   │   └── tribunnews/
│   │   │   └── __init__.py
│   │   │   └── scraper.py
│   │   └── batampos/
│   │   │   └── __init__.py
│   │   │   └── scraper.py
│   └── nlp/
│       ├── pipeline.py
│       ├── preprocess.py
│       ├── sentiment.py
│       ├── summarizer.py
│       ├── vectorizer.py
│       ├── visualize_sentiment.py
│       ├── visualize.py 
│       ├── sentiment_chart.png
│       └── wordcloud.png
│
└── README.md
```

---

## API Flow

### Frontend → Backend

React sends request to backend API.

Example:

```javascript
axios.post("/api/process", {
  keyword: "economy",
  source: "news_source"
})
```

---

### Backend → Python Pipeline

Express backend executes Python NLP pipeline.

```text
Node.js → Python Script → Scraping → Processing
```

---

### Backend → Gemini API

Backend sends relevant article content to Gemini API.

```text
Generate Summary → Gemini API
```