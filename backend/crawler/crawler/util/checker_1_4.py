from .driver import  driver

def checker_1_4(url):
    driver.get(url)

    audios = driver.find_elements_by_css_selector("audio")
    audio_score = None
    if audios:
        audio_total = len(audios)
        audio_good_total = sum([1 for audio in audios if audio.get_attribute("controls")])
        audio_score = audio_good_total / len(audios)
    zoom_score = 1
    return {
        "total_score":((audio_score or 1) + zoom_score ) / 2,
        "subs":[
            {
                "name": "audio",
                "score": audio_score,
                "ratio":  [audio_total - audio_good_total, audio_good_total] if audio_score else [],
                "present": not not audios
            },
            {
                "name": "zoom",
                "score": zoom_score,
                "ratio": [],
                "present": True
            }
        ]
    }