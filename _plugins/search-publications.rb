require 'bibtex'

# Reuse the bibliography as the search index so author/title edits stay in sync.
Jekyll::Hooks.register :site, :pre_render do |site|
  scholar = site.config.fetch('scholar', {})
  source = scholar.fetch('source', '_bibliography').sub(%r{\A/}, '')
  path = File.join(site.source, source, scholar.fetch('bibliography', 'papers.bib'))
  site.data['search_publications'] = BibTeX.open(path).entries.values.map do |entry|
    {
      'id' => entry.key.to_s,
      'title' => entry[:title].to_s.delete('{}'),
      'description' => [entry[:author], entry[:booktitle], entry[:year]].compact.map(&:to_s).join(' · ')
    }
  end
end
