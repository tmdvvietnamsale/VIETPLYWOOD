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
    opt.addEventListener('click', (e) => {
        // 2. Tìm thẻ <a> bên trong thẻ .option vừa click
        const link = opt.querySelector('a');

        if (link) {
            // Ngăn chặn hành vi mặc định nếu cần để tránh xung đột
            // e.preventDefault();

            // Ép trình duyệt chuyển hướng theo href của thẻ a
            window.location.href = link.href;
        }
    });
});
window.onclick = () => langSelect.classList.remove('open');