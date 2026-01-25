const toggle = document.getElementById("themeToggle");
const root = document.documentElement;

function applyTheme(t){
  root.setAttribute('data-theme', t);
  localStorage.setItem('theme', t);
  toggle.textContent = t === 'dark' ? '🌙' : '☀️';
}

// initialize theme: localStorage -> prefers-color-scheme -> default dark
const saved = localStorage.getItem('theme');
if(saved){
  applyTheme(saved);
} else {
  const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
  applyTheme(prefersLight ? 'light' : 'dark');
}

toggle.addEventListener('click', ()=>{
  const current = root.getAttribute('data-theme');
  applyTheme(current === 'dark' ? 'light' : 'dark');
});

document.documentElement.style.scrollBehavior = 'smooth';
document.getElementById("year").textContent = new Date().getFullYear();
