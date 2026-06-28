positive_words = [
    "baik",
    "sukses",
    "naik",
    "untung",
    "investasi",
    "berhasil",
    "meningkat"
]

negative_words = [
    "banjir",
    "korupsi",
    "gagal",
    "rugi",
    "krisis",
    "pencurian",
    "masalah"
]


def classify_sentiment(text):

    positive_score = 0
    negative_score = 0

    words = text.split()

    for word in words:

        if word in positive_words:
            positive_score += 1

        if word in negative_words:
            negative_score += 1

    if positive_score > negative_score:
        return "positive"

    elif negative_score > positive_score:
        return "negative"

    else:
        return "neutral"