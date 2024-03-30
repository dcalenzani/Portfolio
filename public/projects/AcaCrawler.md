---
title: 'AcaCrawler'
excerpt: 'Web Crawler, Scraper and tabulator for Open Source Journals'
coverImage: "/AcaCrawler.jpg"
date: '2023-05-16'
author: 
    name: Daniel Alfonso
    picture: "/assets/blog/authors/Daniel.jpeg"
ogImage:
    url:"/AcaCrawler.jpg"
---

# AcaCrawler: A web crawler and scraper for latin american open access journals

## Introduction:

AcaCrawler was inspired by the work of [Jorge Martínez's](https://github.com/jorgehmartinez/scraping_thesis), and started as an exercise for our [group](https://github.com/BehData). A "web crawler" is a script which instructs your machine to "visit" a webpage and then visit more pages based on the html contents from it. On the other side of the coin, we have "web scrapers", which use the visited pages to "scrape" or download specific data based on the script variables. 

AcaCrawler is a project which goal is to allow researchers to easily tabulate key data from search topics based on the current academic discussion from Latin American Open Access journals.

(As for the current iteration of the project, it scrapes content based on the SciELO website)

## Requirements

As with any software, there are some requirenments you'll need:

- Python 3.10 (or above)
- Beautiful Soup Library for Python
- 

## How to use AcaCrawler

To use AcaCrawler, first install [Python](https://www.python.com) to download Python to your computer. Now you are a tech gal/guy.


### Special note
For our Linux enthusiast out there, web crawling and scraping is similar to using wget command, you enter a website, you get their contents. Actually, you can even use the wget command to download an entire HTML, so you could (if you wanted to), rebuild this code on .bash and it would probably go faster? 

```
# Code for WGET an entire html
wget \
     --recursive \
     --no-clobber \
     --page-requisites \
     --html-extension \
     --convert-links \
     --restrict-file-names=windows \
     --domains website.org \
     --no-parent \
```

asdasdasdas