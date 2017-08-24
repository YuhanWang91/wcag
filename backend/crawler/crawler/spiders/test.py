# -*- coding: utf-8 -*-
import scrapy
from urllib.parse import urljoin
from ..util.checker_all import check_all


class TestSpider(scrapy.Spider):
    name = "test"
    allowed_domains = [
        "www.media.pa.gov"
    ]
    start_urls = ['http://www.media.pa.gov/Pages/Health.aspx']

    def parse(self, response):
        links = response.css("a::attr(href)").extract()
        result = check_all(response.url)
        result['_url'] = response.url
        yield result
        # yield {"url":response.url}
        for link in links:
            absolute_link = urljoin(response.url, link)
            yield scrapy.Request(absolute_link, callback=self.parse)
