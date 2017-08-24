from .driver import driver


def checker_2_4(url):
    driver.get(url)
    title_elem = driver.find_element_by_css_selector("title")
    title_score = 1 if title_elem else 0

    links = driver.find_elements_by_css_selector("a")

    links_total = len(links)
    if links_total:
        good_links_total = sum([1 for link in links if link.text])
    link_score = good_links_total / links_total  if links_total else 1

    return {
        "total_score": (title_score + link_score) / 2,
        "subs": [
            {
                "name": "title",
                "score": title_score,
                "ratio": [],
                "present": True
            },
            {
                "name": "link",
                "score": link_score,
                "ratio": [links_total - good_links_total, good_links_total] if links_total else [],
                "present": not not links_total
            }
        ]
    }
