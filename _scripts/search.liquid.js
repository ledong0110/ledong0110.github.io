---
permalink: /assets/js/search-data.js
---
// Index the personal site, excluding the theme's demo collections.
(() => {
  const go = (url) => () => { window.location.href = url; };
  window.siteSearchEntries = [
    {
      id: 'nav-about', title: 'About Dong Le',
      description: {{ site.description | strip | jsonify }}, section: 'Pages',
      handler: go({{ '/' | relative_url | jsonify }})
    },
    {% assign pages = site.pages | sort: 'nav_order' %}
    {% for p in pages %}{% if p.nav and p.autogen == null and p.dropdown != true %}
    {
      id: {{ p.url | prepend: 'page-' | jsonify }}, title: {{ p.title | jsonify }},
      description: {{ p.description | default: '' | strip_html | jsonify }}, section: 'Pages',
      handler: go({{ p.url | relative_url | jsonify }})
    },
    {% endif %}{% endfor %}
    {% for paper in site.data.search_publications %}
    {
      id: {{ paper.id | prepend: 'paper-' | jsonify }}, title: {{ paper.title | jsonify }},
      description: {{ paper.description | jsonify }}, section: 'Publications',
      handler: go({{ '/publications/' | relative_url | append: '#' | append: paper.id | jsonify }})
    },
    {% endfor %}
    {% for item in site.news %}
    {
      id: {{ item.slug | prepend: 'news-' | jsonify }},
      title: {{ item.content | strip_html | strip | jsonify }}, section: 'News',
      handler: go({{ '/' | relative_url | append: '#news-heading' | jsonify }})
    },
    {% endfor %}
    { id: 'cv-pdf', title: 'Download CV (PDF)', section: 'Links', handler: go({{ '/assets/pdf/CV.pdf' | relative_url | jsonify }}) },
    { id: 'email', title: 'Email Dong Le', section: 'Links', handler: go({{ site.data.socials.email | prepend: 'mailto:' | jsonify }}) },
    { id: 'scholar', title: 'Google Scholar', section: 'Links', handler: go({{ site.data.socials.scholar_userid | prepend: 'https://scholar.google.com/citations?user=' | jsonify }}) },
    { id: 'github', title: 'GitHub', section: 'Links', handler: go({{ site.data.socials.github_username | prepend: 'https://github.com/' | jsonify }}) },
    { id: 'linkedin', title: 'LinkedIn', section: 'Links', handler: go('https://www.linkedin.com/in/donglecs/') }
  ];
  window.dispatchEvent(new Event('site-search-ready'));
})();
