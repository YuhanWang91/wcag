from flask import Flask,request, jsonify


from checkers import getText,getScore
from checker_1_1 import checker_1_1
from checker_1_2 import checker_1_2
from checker_1_3 import checker_1_3
from checker_1_4 import checker_1_4
from checker_2_1 import checker_2_1
from checker_2_2 import checker_2_2
from checker_2_3 import checker_2_3
from checker_2_4 import checker_2_4
# from checker_3_3 import checker_3_3
from checker_4_1 import checker_4_1

from image_text import Extractor
from flask_cors import CORS, cross_origin

import random

app = Flask(__name__,static_url_path="")
CORS(app)

@app.route('/')
def root():
    return app.send_static_file('index.html')

@app.route("/checker/demo",methods=["GET"])
def checker_demo():
    url = request.args["url"]
    result = getText(url)
    return jsonify({
        "success":True,
        "data":result
    })

@app.route("/checker/demo2",methods=["POST"])
def checker_demo2():
    body = request.get_json()
    title = body["title"]
    document = body["document"]
    result = getScore(title,document)
    return jsonify(result)


@app.route("/checker/checker-1-1",methods=["GET"])
def checker_1_1_ctrl():
    url = request.args["url"]
    result = checker_1_1(url)
    return jsonify({
        "success":True,
        "data":result
    })

@app.route("/checker/checker-1-2",methods=["GET"])
def checker_1_2_ctrl():
    url = request.args["url"]
    result = checker_1_2(url)
    return jsonify({
        "success":True,
        "data":result
    })

@app.route("/checker/checker-1-3",methods=["GET"])
def checker_1_3_ctrl():
    url = request.args["url"]
    result = checker_1_3(url)
    return jsonify({
        "success":True,
        "data":result
    })

@app.route("/checker/checker-1-4",methods=["GET"])
def checker_1_4_ctrl():
    url = request.args["url"]
    result = checker_1_4(url)
    return jsonify({
        "success":True,
        "data":result
    })

@app.route("/checker/checker-2-1",methods=["GET"])
def checker_2_1_ctrl():
    url = request.args["url"]
    result = checker_2_1(url)
    return jsonify({
        "success":True,
        "data":result
    })

@app.route("/checker/checker-2-2",methods=["GET"])
def checker_2_2_ctrl():
    url = request.args["url"]
    result = checker_2_2(url)
    return jsonify({
        "success":True,
        "data":result
    })


@app.route("/checker/checker-2-3",methods=["GET"])
def checker_2_3_ctrl():
    url = request.args["url"]
    result = checker_2_3(url)
    return jsonify({
        "success":True,
        "data":result
    })

@app.route("/checker/checker-2-4",methods=["GET"])
def checker_2_4_ctrl():
    url = request.args["url"]
    result = checker_2_4(url)
    return jsonify({
        "success":True,
        "data":result
    })

@app.route("/checker/checker-4-1",methods=["GET"])
def checker_4_1_ctrl():
    url = request.args["url"]
    result = checker_4_1(url)
    return jsonify({
        "success":True,
        "data":result
    })



@app.route("/checker/checker-image-text",methods=["GET"])
def checker_image_text():
    url = request.args["url"]
    ex = Extractor()
    ex.login()
    result = ex.getTextScore(url)
    return jsonify({
        "success": True,
        "data": result
    })

@app.route("/checker/all",methods=["GET"])
def checker_all():
    url = request.args["url"]
    readability_result = getText(url)
    checker_1_1_result = checker_1_1(url)

    return jsonify({
        "success": True,
        "data": {
            "c11":checker_1_1_result,
            "c12": checker_1_2(url),
            "c13": checker_1_3(url),
            "c14": checker_1_4(url),
            "c21": checker_2_1(url),
            "c22": checker_2_2(url),
            "c23": checker_2_3(url),
            "c24": checker_2_4(url),
            "readability":readability_result,
            # "imageText":ex.getTextScore(url),
            "c41": checker_4_1(url),
        }
    })

if __name__ == '__main__':
    app.run()
