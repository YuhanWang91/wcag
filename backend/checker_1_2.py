from driver import  driver

def checker_1_2(url):
    driver.get(url)


    # objects = driver.find_elements_by_css_selector("object")
    # object_total = len(objects)
    # object_good_total = 0
    # for obj in objects:
    #     if obj.find_element_by_css_selector("p") or obj.find_element_by_css_selector("object"):
    #         object_good_total+=1

    # total_score = object_good_total / object_total if object_total > 0 else 1

    audios = driver.find_elements_by_css_selector("audio")

    audios_total = len(audios)
    audio_good_total = 0
    for s in audios:
        if len(s.find_elements_by_css_selector("[aria-label]") and len(s.find_elements_by_css_selector("track"))):
            audio_good_total+=1

    videos = driver.find_elements_by_css_selector("video")
    videos_total = len(videos)
    videos_good_total = 0
    for s in audios:
        if len(s.find_elements_by_css_selector("[aria-label]")):
            videos_good_total += 1

    total = audios_total + audios_total

    return {
        "total_score":(videos_good_total + audio_good_total) / total if total > 0 else 1,
        "subs":[
            {
                "name": "audio",
                "score": audio_good_total / audios_total if audios_total != 0 else 1,
                "ratio": [audios_total - audio_good_total, audio_good_total],
                "present": audios_total > 0
            },
            {
                "name": "video",
                "score":  videos_good_total/ videos_total if videos_total != 0 else 1,
                "ratio": [videos_total - videos_good_total, videos_good_total],
                "present": videos_total > 0
            }
        ]
    }