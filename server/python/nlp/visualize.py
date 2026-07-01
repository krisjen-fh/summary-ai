from wordcloud import WordCloud

def generate_wordcloud(text):

    wc = WordCloud(
        width=800,
        height=400,
        background_color="white"
    ).generate(text)

    output_path = "nlp/wordcloud.png"

    wc.to_file(output_path)

    return" output/wordcloud.png"