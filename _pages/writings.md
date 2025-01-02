---
layout: page
title: writings
permalink: /writings/
description: Here are some of the writings I've worked on. Please visit my Github Page for more details.
nav: true
nav_order: 3
display_categories: [writings]
horizontal: true
---

<!-- pages/writings.md -->
<div class="writings">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized writings -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_writings = site.writings | where: "category", category %}
  {% assign sorted_writings = categorized_writings | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_writings %}
      {% include writings_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_writings %}
      {% include writings.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display writings without categories -->

{% assign sorted_writings = site.writings | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_writings %}
      {% include writings_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_writings %}
      {% include writings.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
