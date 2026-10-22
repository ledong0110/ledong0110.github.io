(() => {
  const updateShortcut = () => {
    const button = document.querySelector('#search-toggle');
    const label = button?.querySelector('.nav-link');
    if (!label) return;
    const isMac = /Mac|iPhone|iPad/.test(navigator.platform);
    label.innerHTML = `${isMac ? '⌘' : 'Ctrl'} K <i class="ti ti-search" aria-hidden="true"></i>`;
    button.setAttribute('aria-label', `Search (${isMac ? 'Command' : 'Control'} K)`);
    button.setAttribute('aria-keyshortcuts', isMac ? 'Meta+K' : 'Control+K');
  };
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateShortcut, { once: true });
  } else {
    updateShortcut();
  }
})();
