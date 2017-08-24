FROM continuumio/anaconda3
MAINTAINER Tony Wang <zhw65@pitt.edu>

ENV DEBIAN_FRONTEND noninteractive

COPY docker-libs/debian-mozilla.list /etc/apt/sources.list.d
RUN wget mozilla.debian.net/pkg-mozilla-archive-keyring_1.1_all.deb \
    && dpkg -i pkg-mozilla-archive-keyring_1.1_all.deb

RUN apt-get update
RUN apt-get install -y \
    uwsgi-plugin-python \
    nginx supervisor build-essential
RUN apt-get install -y -t jessie-backports firefox
RUN apt-get install -y xvfb
RUN mkdir -p /var/www/app/data
COPY backend/requirements.txt /var/www/requirements.txt
COPY docker-libs/geckodriver /bin

#COPY data/glove.twitter.27B.200d.txt /var/www/data/glove.twitter.27B.200d.txt


RUN pip install -r /var/www/requirements.txt \
    && python -m nltk.downloader stopwords



COPY nginx/flask.conf /etc/nginx/sites-available/
COPY supervisor/supervisord.conf /etc/supervisor/conf.d/supervisord.conf



RUN mkdir -p /var/log/nginx/app /var/log/uwsgi/app /var/log/supervisor \
    && rm /etc/nginx/sites-enabled/default \
    && ln -s /etc/nginx/sites-available/flask.conf /etc/nginx/sites-enabled/flask.conf \
    && echo "daemon off;" >> /etc/nginx/nginx.conf \
    && chown -R www-data:www-data /var/www/app \
    && chown -R www-data:www-data /var/log

COPY data /var/www/data
COPY backend /var/www/app
#CMD ["/bin/bash"]
CMD ["/usr/bin/supervisord"]
