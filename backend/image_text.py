from driver import driver


class Extractor:
    def __init__(self):
        global is_login
        self.driver = driver
        self.login()

    def login(self):
        self.driver.get("https://newsela.com/")
        signin_button = self.driver.find_elements_by_class_name("signin")
        if signin_button:
            signin_button[0].click()
            self.driver.find_element_by_name("username").send_keys("robot@131x.com")
            self.driver.find_element_by_name("password").send_keys("123456")
            self.driver.find_element_by_class_name("submit-button").click()

    def getImageUrl(self, url):
        self.driver.get(url)
        image_frame = self.driver.find_element_by_class_name("main-image")
        imgs = image_frame.find_elements_by_css_selector("*")
        img = imgs[0]
        self.image_url = img.get_attribute("src")
        self.text = self.driver.find_element_by_class_name("text-container").get_attribute("innerText")

        return self.image_url, self.text


    def getGoogleCaption(self):
        self.driver.get("https://www.google.com/imghp")
        self.driver.find_element_by_id("qbi").click()

        self.driver.find_element_by_id("qbui").send_keys(self.image_url)
        self.driver.find_element_by_id("qbbtc").find_elements_by_css_selector("*")[0].click()
        self.image_text = self.driver.find_element_by_class_name("_gUb").get_attribute("innerText")
        return self.image_text

    def getTextScore(self, url):
        self.getImageUrl(url)
        self.getGoogleCaption()

        s = 0
        a = self.image_text.split()
        sb = set(self.text.split())

        for ai in a:
            s += 1 if ai in sb else 0
        s /= len(a)

        return {
            "a":a,
            "s":s
        }


