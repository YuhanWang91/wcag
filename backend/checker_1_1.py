from driver import driver



def check_element_has_label(elem):
    if elem.get_attribute("aria-label") or elem.get_attribute("aria-labelledby"):
        return True
    elif elem.tag_name.lower() == "img" and elem.get_attribute("alt"):
        return True
    else:
        return False

def checker_1_1(url):
    driver.get(url)
    imgs = driver.find_elements_by_css_selector("img")
    roles = [elem for elem in driver.find_elements_by_css_selector("*[role]") if
             elem.get_attribute("role").lower() in ["navigation", "region", "math’ "]]
    inputs = driver.find_elements_by_css_selector("input")

    image_total_count = len(imgs)
    image_good_count = 0

    for img in imgs:
        if img.get_attribute("alt") or img.get_attribute("aria-label") or img.get_attribute("aria-labelledby"):
            image_good_count+=1

    roles_total_count = len(roles)
    roles_good_count = 0

    for role in roles:
        if role.get_attribute("aria-label") or role.get_attribute("aria-labelledby"):
            roles_good_count += 1

    inputs_total_count = len(inputs)
    inputs_good_count = 0

    for input in inputs:
        if input.get_attribute("aria-label") or input.get_attribute("aria-labelledby"):
            inputs_good_count += 1


    total = image_total_count + roles_total_count + inputs_total_count
    result = {
        "total_score": (image_good_count + roles_good_count + inputs_good_count)/ (total) if total > 0 else 1,
        "subs":[
            {
                "name": "image",
                "score": image_good_count / image_total_count if image_total_count != 0 else 1,
                "ratio": [image_total_count - image_good_count,image_good_count],
                "present": image_total_count > 0
            },
            {
                "name": "role",
                "score": roles_good_count / roles_total_count if roles_total_count != 0 else 1,
                "ratio": [roles_total_count - roles_good_count, roles_good_count],
                "present": roles_total_count > 0
            },
            {
                "name": "input",
                "score": inputs_good_count / inputs_total_count if inputs_total_count != 0 else 1,
                "ratio": [inputs_total_count - inputs_good_count,inputs_good_count],
                "present": inputs_total_count > 0
            }
        ]
    }

    return result


