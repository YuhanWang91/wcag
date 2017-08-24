from .driver import  driver
from urllib import parse

def checker_4_1(url):
    checker_url = "https://validator.w3.org/check?" + parse.urlencode({"uri":url})
    driver.get(checker_url)

    valid_result = driver.find_elements_by_css_selector(".valid")
    is_valid = not not valid_result
    return {
        "total_score":1 if is_valid else 0,
        "subs":[]
    }