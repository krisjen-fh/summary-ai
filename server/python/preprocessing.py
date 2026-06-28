import re

STOPWORDS = [
    "dan",
    "di",
    "yang",
    "ke",
    "untuk",
    "dari",
    "dengan" 
]

def preprocess_text(text):
    text = text.lower()
    text = re.sub(
        r'[^\w\s]',
        '',
        text
    )

    words = text.split()

    words = [word for word in words if word not in STOPWORDS]

    return " ".json(words)