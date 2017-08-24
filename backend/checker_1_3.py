from driver import  driver

def checker_1_3(url):
    driver.get(url)


    roles = driver.find_elements_by_css_selector("[role]")
    role_score = 1 if len(roles) else 0
    heading = driver.find_elements_by_css_selector("[role=heading]")
    heading_score = 1 if len(heading) else 0
    aria_score = None
    aria_total = None
    if roles:
        good_aria_totoal = sum([1 for elem in roles if elem.get_attribute("aria-labelledby") or elem.get_attribute("aria-describedby")])
        aria_total = len(roles)
        aria_score = good_aria_totoal / aria_total
    else:
        aria_score = 1

    return {
        "total_score":(role_score + heading_score + aria_score) / 3,
        "subs":[
            {
                "name": "role_score",
                "score": role_score,
                "ratio": [],
                "present": not not roles
            },
            {
                "name": "heading_score",
                "score": heading_score,
                "ratio": [],
                "present": not not roles
            },
            {
                "name": "aria_score",
                "score": aria_score,
                "ratio": [
                    aria_total - good_aria_totoal, good_aria_totoal
                ] if aria_total else [],
                "present": not not roles
            },
        ]

    }