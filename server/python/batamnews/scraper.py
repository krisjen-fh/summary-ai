import requests
from bs4 import BeautifulSoup
import json


def scrape_batamnews():

    base_url_links = []

    for i in range(1, 2):
        base_url = f"https://www.batamnews.co.id/berita/{i}"
        base_url_links.append(base_url)

    links = []

    for url in base_url_links:

        response = requests.get(url)
        print(response.status_code)

        soup = BeautifulSoup(
            response.text,
            "html.parser"
        )

        for a in soup.find_all(
            "a",
            href=True
        ):

            href = a["href"]

            if (
                "berita-" in href
                and href.endswith(".html")
            ):

                if href.startswith("http"):
                    full_url = href
                else:
                    full_url = (
                        "https://www.batamnews.co.id/"
                        + href
                    )

                links.append(full_url)

    links = list(set(links))

    articles = []

    for news_link in links:

        response = requests.get(news_link)

        soup = BeautifulSoup(
            response.text,
            "html.parser"
        )

        get_news_type_div = soup.find(
            "div",
            class_="post-date"
        )

        get_news_type = (
            get_news_type_div.find_all("a")
        )

        news_type = get_news_type[1].text

        title = soup.find_all(
            "h1"
        )[2].text

        paragraphs = soup.find_all("p")

        content = " ".join([
            p.get_text(strip=True)
            for p in paragraphs
        ])

        published_date = soup.find_all(
            "div",
            itemprop="datePublished"
        )[0].text

        articles.append({
            "title": title,
            "news_type": news_type,
            "content": content,
            "published_date": published_date,
            "link": news_link
        })

    return articles


if __name__ == "__main__":

    articles = scrape_batamnews()

    print(json.dumps(articles))