document.querySelectorAll('.qa').forEach(el => {
  el.addEventListener('toggle', () => {
    if (el.open) {
      document.querySelectorAll('.qa[open]').forEach(other => {
        if (other !== el) other.removeAttribute('open');
      });
    }
  });
});
