function jsStringEscape(str){
  return String(str).replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

document.getElementById('genBtn').addEventListener('click', () => {
  const title = document.getElementById('title').value.trim() || 'Judul Project';
  const status = document.getElementById('status').value.trim() || 'LIVE';
  const desc = document.getElementById('desc').value.trim();
  const tagsRaw = document.getElementById('tags').value.trim();
  const live = document.getElementById('live').value.trim();
  const repo = document.getElementById('repo').value.trim();

  const tags = tagsRaw
    ? tagsRaw.split(',').map(t => t.trim()).filter(Boolean).map(t => `"${jsStringEscape(t)}"`).join(', ')
    : '';

  const code =
`  {
    title: "${jsStringEscape(title)}",
    status: "${jsStringEscape(status)}",
    description: "${jsStringEscape(desc)}",
    tags: [${tags}],
    liveUrl: "${jsStringEscape(live)}",
    repoUrl: "${jsStringEscape(repo)}"
  },`;

  document.getElementById('output').textContent = code;
});

document.getElementById('copyBtn').addEventListener('click', async () => {
  const text = document.getElementById('output').textContent;
  const status = document.getElementById('copyStatus');
  try{
    await navigator.clipboard.writeText(text);
    status.textContent = 'Tersalin! Tempel ke dalam array PROJECTS di assets/js/projects-data.js';
  }catch(e){
    status.textContent = 'Gagal menyalin otomatis — silakan seleksi teks di atas lalu salin manual.';
  }
});
