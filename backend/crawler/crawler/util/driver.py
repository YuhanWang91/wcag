# from selenium import webdriver
# import os
# import platform

# system = platform.system()
from pyvirtualdisplay import Display
from selenium import webdriver

display = Display(visible=0, size=(1280, 720))
display.start()
driver = webdriver.Firefox()

# if system == 'Linux':
#     driver = webdriver.Chrome(os.path.abspath(os.path.join(os.path.dirname(__file__),"chromedriver_linux")))
# else:
#     # driver = webdriver.Firefox(os.path.abspath(os.path.join(os.path.dirname(__file__))))
#


