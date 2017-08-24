
import urllib
import re
import os
from nltk.corpus import stopwords
import math
import numpy as np
from bs4 import BeautifulSoup


def getText(url):
    # extractor = "LargestContentExtractor" #reqest.GET['extractor']

    api = "http://boilerpipe-web.appspot.com/extract?url=%s&extractor=LargestContentExtractor&output=htmlFragment&extractImages=&token=" % url
    req = urllib.request.Request(api)
    f = urllib.request.urlopen(req)

    content = f.read().decode('utf-8')
    f.close()
    return analysisText(content)

def analysisText(text):


    start_p_occur = [m.start() for m in re.finditer('<P>', text)]
    end_p_occur = [m.start() for m in re.finditer('<\/P>', text)]
    ll = list(zip(start_p_occur, [True] * len(start_p_occur))) + list(zip(end_p_occur, [False] * len(end_p_occur)))
    ll = sorted(ll, key=lambda x: x[0])
    stack = []
    texts = []
    latest_i = -1
    for occur, is_start in ll:
        if is_start:
            stack.append(occur)
        else:
            pre_occur = stack.pop()
            if latest_i < pre_occur:
                latest_i = occur
                texts.append(BeautifulSoup(text[pre_occur+3:occur], 'html.parser').get_text())

    stops = set(stopwords.words('english'))

    process_texts = []
    pre_vectors = []
    for text in texts:
        process_text = []
        words = text.split()
        for i, word in enumerate(words):
            word = word_transform(word)
            if i == 0 or word in stops:
                process_text.append([word, 0])
            elif word not in glove_vector:
                process_text.append([word, 0])
            else:
                if len(pre_vectors) == 0:
                    process_text.append([word, 0])
                else:
                    if len(pre_vectors) > 1:
                        avg_vector = np.mean(pre_vectors, 0)
                    else:
                        avg_vector = pre_vectors[0]
                    score = compareVector(avg_vector, glove_vector[word])
                    process_text.append([word, 1 - score])

                pre_vectors.append(glove_vector[word])
                if len(pre_vectors) > 1:
                    pre_vectors.pop()
        process_texts.append(process_text)
    return [process_texts]


def word_transform(word):
    word = word.lower()
    s = 0
    for i in range(0, len(word)):
        if word[i] > 'z' or word[i] < 'a':
            s += 1
        else:
            break
    e = len(word)-1
    for i in range(len(word)-1,0,-1):
        if word[i] > 'z' or word[i] < 'a':
            e -= 1
        else:
            break
    if s > e:
        return word
    else:
        return word[s:e+1]



glove_vector = {}
def populate_wordvector():
    if glove_vector is not None and len(glove_vector) != 0:
        return
    glove_path = os.path.abspath(os.path.join(os.path.dirname(__file__),"../data/glove.twitter.27B.200d.txt"))

    for line in open(glove_path):
        item = line.split()
        glove_vector[item[0]] = [float(val) for val in item[1:]]

def compareVector(vec1, vec2):
    # norm
    norm_vec1 = 0.0
    for val in vec1:
        norm_vec1 += val * val
    norm_vec1 = math.sqrt(norm_vec1)

    norm_vec2 = 0.0
    for val in vec2:
        norm_vec2 += val * val
    norm_vec2 = math.sqrt(norm_vec2)

    sim = 0
    for i in range(len(vec1)):
        sim += (vec1[i] / norm_vec1) * (vec2[i] / norm_vec2)

    return sim


def getScore(title,doc):
    import os

    import numpy as np
    from gensim.models.keyedvectors import KeyedVectors
    from sklearn.datasets import fetch_20newsgroups
    from sklearn.feature_extraction.text import CountVectorizer
    from pyemd import emd
    import gensim

    if not os.path.exists("embed.dat"):
        print("Caching word embeddings in memmapped format...")
        from gensim.models.word2vec import Word2Vec
        gnews = "/Users/tony/Documents/projects/is/heath/code/backend/data/GoogleNews-vectors-negative300.bin.gz"
        wv = gensim.models.KeyedVectors.load_word2vec_format(
            gnews,
            binary=True)
        wv.init_sims()
        fp = np.memmap("embed.dat", dtype=np.double, mode='w+', shape=wv.syn0norm.shape)
        fp[:] = wv.syn0norm[:]
        with open("embed.vocab", "w") as f:
            for _, w in sorted((voc.index, word) for word, voc in wv.vocab.items()):
                print(w, file=f)
        del fp, wv

    W = np.memmap("embed.dat", dtype=np.double, mode="r", shape=(3000000, 300))
    with open("embed.vocab") as f:
        vocab_list = map(str.strip, f.readlines())

    vocab_dict = {w: k for k, w in enumerate(vocab_list)}

    d1 = title #"riding a bicycle"
    d2 = doc #"More research is needed before the transportation can be used in public"

    vect = CountVectorizer(stop_words="english").fit([d1, d2])
    v_1, v_2 = vect.transform([d1, d2])

    from sklearn.metrics import euclidean_distances
    W_ = W[[vocab_dict[w] for w in vect.get_feature_names() if w in vocab_dict]]
    D_ = euclidean_distances(W_)

    vect = CountVectorizer(stop_words="english").fit([d1, d2])
    v_1, v_2 = vect.transform([d1, d2])
    v_1 = v_1.toarray().ravel()
    v_2 = v_2.toarray().ravel()
    v_1 = v_1.astype(np.double)
    v_2 = v_2.astype(np.double)
    v_1 /= v_1.sum()
    v_2 /= v_2.sum()
    D_ = D_.astype(np.double)
    D_ /= D_.max()  # just for comparison purposes
    # print("d(doc_1, doc_2) = {:.2f}".format(emd(v_1, v_2, D_)))
    try:
        score = emd(v_1, v_2, D_)
        return {
            "success":True,
            "score":score
        }
    except:
        return {
            "success":False,
            "error":"interal error"
        }

# print(getScore(None))

# populate_wordvector()