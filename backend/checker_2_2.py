from driver import  driver

def checker_2_2(url):
    driver.get(url)
    forms = driver.find_elements_by_css_selector("form")
    forms_total = len(forms)
    if forms_total:
        good_forms_total = sum([1 for form in forms if form.find_elements_by_css_selector("[type=submit]")])
        form_enough_time_score = good_forms_total / forms_total
    else:
        form_enough_time_score = 1

    return {
        "total_score":(form_enough_time_score) / 1,
        "subs":[
            {
                "name": "form",
                "score": form_enough_time_score,
                "ratio": [forms_total - good_forms_total, good_forms_total] if forms_total else [],
                "present": not not forms
            }
        ]
    }