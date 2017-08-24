from driver import  driver

def checker_2_3(url):
    driver.get(url)
    all_elements = driver.find_elements_by_css_selector("*")
    has_flash = False
    for elem in all_elements:
        duration = elem.value_of_css_property("animation-duration")[:-1]
        if float(duration) * 3 < 1:
            has_flash = True

    return {
        "total_score":0 if has_flash else 1,
        "subs":[]
    }