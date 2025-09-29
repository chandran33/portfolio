function openProject(btn) {
  const proj = btn.closest('.proj');
  const title = proj.dataset.title;
  const img = proj.dataset.img;
  const desc = proj.dataset.desc;
  const tags = proj.dataset.tags.split(',');

  document.getElementById('m-title').textContent = title;
  document.querySelector('#m-media img').src = img;
  document.getElementById('m-desc').textContent = desc;

  const tagContainer = document.getElementById('m-tags');
  tagContainer.innerHTML = '';
  tags.forEach(t => {
    const span = document.createElement('span');
    span.className = 'tag';
    span.textContent = t.trim();
    tagContainer.appendChild(span);
  });

  document.getElementById('modal').classList.add('open');
}

function closeModal() {
  document.getElementById('modal').classList.remove('open');
}

document.getElementById('modal').addEventListener('click', e => {
  if (e.target.id === 'modal') closeModal();
});
