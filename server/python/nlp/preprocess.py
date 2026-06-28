import re
from Sastrawi.Stemmer.StemmerFactory import StemmerFactory
from Sastrawi.StopWordRemover.StopWordRemoverFactory import StopWordRemoverFactory

#stemming
factory = StemmerFactory()
stemmer = factory.create_stemmer()

# stopwords
stop_factory = StopWordRemoverFactory()
stopwords = stop_factory.get_stop_words()

def preprocess_text(text):
    # lowercase
    text = text.lower()

    # remove punctuation
    text = re.sub(
        r"[^\w\s]",
        "",
        text
    )

    # remove stopwords
    words = text.split()

    words = [
        word for word in words
        if word not in stopwords
    ]

    text = " ".join(words)

    # stemming
    text = stemmer.stem(text)

    return text  