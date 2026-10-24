(() => {
  const button = document.querySelector('.theme-toggle');
  if (!button) return;
  const root = document.documentElement;
  const updateLabel = () => {
    button.textContent = `Switch to ${root.dataset.theme === 'dark' ? 'light' : 'dark'} theme`;
  };
  updateLabel();
  button.hidden = false;
  button.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('theme', root.dataset.theme); } catch (_) {}
    updateLabel();
  });
})();
