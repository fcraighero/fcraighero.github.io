---
layout: page
title: news
permalink: /news/
description: Announcements, newest first.
---
{%- assign n_archived = site.news.size | minus: site.news_limit %}

{% include news.html limit=site.news_limit %}

{%- if n_archived > 0 %}
<h2 class="news-archive-title">Archive</h2>
{%- assign archived = site.news | sort: "date" | reverse | slice: site.news_limit, n_archived %}
{%- assign years = archived | group_by_exp: "item", "item.date | date: '%Y'" %}
{%- for year in years %}
<h3 class="news-year">{{ year.name }}</h3>
{% include news.html items=year.items %}
{%- endfor %}
{%- endif %}
