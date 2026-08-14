// ===== Mobile nav toggle =====
(function(){
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if(toggle && links){
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => links.classList.remove('open'));
    });
  }
})();

// ===== Terminal typing effect (home hero) =====
(function(){
  const el = document.querySelector('[data-typing]');
  if(!el) return;
  const text = el.getAttribute('data-typing');
  el.textContent = '';
  let i = 0;
  function type(){
    if(i <= text.length){
      el.textContent = text.slice(0, i);
      i++;
      setTimeout(type, 32);
    }
  }
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    el.textContent = text;
  } else {
    type();
  }
})();

// ===== Render projects (used on index.html preview + projects.html full grid) =====
function renderProjects(targetSelector, opts){
  opts = opts || {};
  const target = document.querySelector(targetSelector);
  if(!target || typeof PROJECTS === 'undefined') return;

  const limit = opts.limit || PROJECTS.length;
  const list = PROJECTS.slice(0, limit);

  if(list.length === 0){
    target.innerHTML = '<div class="empty-state">// belum ada project ditambahkan.<br>Edit assets/js/projects-data.js untuk menambahkan project pertamamu.</div>';
    return;
  }

  target.innerHTML = list.map(p => {
    // Cek jika properti image ada, render tag <img>, jika tidak gunakan inisial teks
    const thumbContent = p.image 
      ? `<img src="${escapeAttr(p.image)}" alt="${escapeAttr(p.title)}" class="project-image">` 
      : escapeHtml(p.title.split(' ').slice(0,2).map(w => w[0]).join('').toUpperCase());
      
    const tags = (p.tags || []).map(t => `<span class="tag">${escapeHtml(t)}</span>`).join('');
    const live = p.liveUrl ? `<a href="${escapeAttr(p.liveUrl)}" target="_blank" rel="noopener">Lihat Live ↗</a>` : '';
    const repo = p.repoUrl ? `<a href="${escapeAttr(p.repoUrl)}" target="_blank" rel="noopener">Source Code ↗</a>` : '';
    
    return `
      <article class="project-card">
        <div class="project-thumb">${thumbContent}</div>
        <div class="project-body">
          <span class="status">${escapeHtml(p.status || 'PROJECT')}</span>
          <h3>${escapeHtml(p.title)}</h3>
          <p>${escapeHtml(p.description || '')}</p>
          <div class="tag-list">${tags}</div>
          <div class="project-links">${live}${repo}</div>
        </div>
      </article>`;
  }).join('');
}

function escapeHtml(str){
  return String(str).replace(/[&<>"']/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s]));
}
function escapeAttr(str){ return escapeHtml(str); }

document.addEventListener('DOMContentLoaded', () => {
  renderProjects('[data-projects-preview]', { limit: 3 });
  renderProjects('[data-projects-full]');
});
