---
layout: default
title: Home
---
<section class="hero">
  <div>
    <p class="hero-kicker">Pillars of Thought</p>
    <h1>Stories, critiques, and riffs across four pillars.</h1>
    <p>Share reflections on theology, philosophy, policy, and history with a simple Jekyll workflow built for GitHub Pages.</p>
  </div>
</section>

<section class="pillars">
  <article class="pillar-card">
    <h2><a href="{{ '/theology/' | relative_url }}">Theology</a></h2>
    <p>Contemplations on belief, practice, and transcendent questions.</p>
  </article>
  <article class="pillar-card">
    <h2><a href="{{ '/philosophy/' | relative_url }}">Philosophy</a></h2>
    <p>Arguments, thought experiments, and critical examinations.</p>
  </article>
  <article class="pillar-card">
    <h2><a href="{{ '/policy/' | relative_url }}">Policy</a></h2>
    <p>Notes on governance, civic design, and the mechanics of law.</p>
  </article>
  <article class="pillar-card">
    <h2><a href="{{ '/history/' | relative_url }}">History</a></h2>
    <p>Echoes from the past reimagined for present conversations.</p>
  </article>
</section>

<section>
  <h2 class="section-heading">Latest posts</h2>
  <div class="post-grid">
    {% for post in site.posts limit: 6 %}
      <article class="post-card">
        <p class="post-meta">{{ post.date | date: "%B %d, %Y" }} · {{ post.pillar | default: post.category }}</p>
        <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
        <p class="post-excerpt">{{ post.excerpt | strip_html | truncate: 120 }}</p>
      </article>
    {% endfor %}
  </div>
</section>
