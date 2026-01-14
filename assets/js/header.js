// Mobile Menu & Lang Select Scripts
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

const langSelect = document.getElementById('langSelect');
langSelect.addEventListener('click', (e) => {
    e.stopPropagation();
    langSelect.classList.toggle('open');
});
document.querySelectorAll('.option').forEach(opt => {
    opt.addEventListener('click', () => {
        document.getElementById('currentLang').innerText = opt.dataset.value;
    });
});
window.onclick = () => langSelect.classList.remove('open');