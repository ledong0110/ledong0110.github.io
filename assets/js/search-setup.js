(() => {
  const dialog = document.querySelector('#site-search');
  if (!dialog) return;
  const input = dialog.querySelector('input');
  const results = dialog.querySelector('#site-search-results');
  const empty = dialog.querySelector('#site-search-empty');
  let matches = [];
  let selected = 0;
  let previousFocus;

  const select = (index) => {
    selected = index;
    results.querySelectorAll('a').forEach((link, i) => {
      link.classList.toggle('is-selected', i === selected);
      if (i === selected) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    });
    results.children[selected]?.scrollIntoView({ block: 'nearest' });
  };
  const render = () => {
    const query = input.value.toLocaleLowerCase().trim();
    const terms = query.split(/\s+/).filter(Boolean);
    matches = (window.siteSearchEntries || []).filter((entry) => {
      const text = `${entry.title} ${entry.description || ''} ${entry.section}`.toLocaleLowerCase();
      return terms.every((term) => text.includes(term));
    });
    results.replaceChildren();
    matches.forEach((entry) => {
      const item = document.createElement('li');
      const link = document.createElement('a');
      link.href = '#';
      const title = document.createElement('span');
      title.textContent = entry.title;
      const section = document.createElement('small');
      section.textContent = entry.section;
      link.append(title, section);
      link.addEventListener('click', (event) => {
        event.preventDefault();
        dialog.close();
        entry.handler();
      });
      item.append(link);
      results.append(item);
    });
    empty.hidden = matches.length > 0;
    select(0);
  };
  window.openSearchModal = () => {
    previousFocus = document.activeElement;
    input.value = '';
    render();
    if (!dialog.open) dialog.showModal();
    input.focus();
  };
  document.addEventListener('keydown', (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault();
      if (dialog.open) dialog.close();
      else window.openSearchModal();
    }
  });
  input.addEventListener('input', render);
  dialog.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      if (matches.length) select((selected + (event.key === 'ArrowDown' ? 1 : -1) + matches.length) % matches.length);
    } else if (event.key === 'Enter' && event.target === input) {
      event.preventDefault();
      if (matches[selected]) {
        dialog.close();
        matches[selected].handler();
      }
    }
  });
  dialog.querySelector('#site-search-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) {
      const box = dialog.getBoundingClientRect();
      if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
    }
  });
  dialog.addEventListener('close', () => previousFocus?.focus());
  window.addEventListener('site-search-ready', render);
})();
