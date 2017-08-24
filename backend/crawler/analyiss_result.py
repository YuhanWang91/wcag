import json

attrs = ["c11","c12","c13","c14","c21","c22","c23","c24","c41"]

scores = {attr:[] for attr in attrs}

with open("test.jl",'r') as file:
    for line in file:
        result = json.loads(line)

        for attr in attrs:
            scores[attr].append(result[attr]["total_score"])

for attr in attrs:
    print("{0}: {1}".format(attr,sum(scores[attr])/len(scores[attr])))