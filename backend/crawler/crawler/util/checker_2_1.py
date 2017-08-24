from .driver import  driver
from selenium.webdriver.common.keys import Keys

def checker_2_1(url):
    driver.get(url)
    start_element = driver.switch_to_active_element()
    body_elem = driver.find_element_by_css_selector("body")
    counter = 0
    has_trap = True
    while counter < 1000:
        body_elem.send_keys(Keys.TAB)
        if driver.switch_to_active_element() != start_element:
            has_trap = False
            break
        else:
            counter+=1

    return {
        "total_score":0 if has_trap else 1,
        "subs":[]
    }