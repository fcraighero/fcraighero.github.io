---
layout: page
title: news
permalink: /news/
nav: true
nav_order: 3
---
{%- assign n_archived = site.news.size | minus: site.news_limit %}

{% include news.html limit=site.news_limit %}

{%- if n_archived > 0 %}
<h2 class="news-archive-title">archive</h2>
{% include news.html offset=site.news_limit %}
{%- endif %}
