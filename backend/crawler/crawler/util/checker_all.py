from .checkers import getText,getScore
from .checker_1_1 import checker_1_1
from .checker_1_2 import checker_1_2
from .checker_1_3 import checker_1_3
from .checker_1_4 import checker_1_4
from .checker_2_1 import checker_2_1
from .checker_2_2 import checker_2_2
from .checker_2_3 import checker_2_3
from .checker_2_4 import checker_2_4
# from checker_3_3 import checker_3_3
from .checker_4_1 import checker_4_1


def check_all(url):
    readability_result = 1#getText(url)
    checker_1_1_result = checker_1_1(url)

    return {
            "c11": checker_1_1_result,
            "c12": checker_1_2(url),
            "c13": checker_1_3(url),
            "c14": checker_1_4(url),
            "c21": checker_2_1(url),
            "c22": checker_2_2(url),
            "c23": checker_2_3(url),
            "c24": checker_2_4(url),
            "readability": readability_result,
            # "imageText":ex.getTextScore(url),
            "c41": checker_4_1(url),
        }
