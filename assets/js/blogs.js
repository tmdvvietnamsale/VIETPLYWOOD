

const POSTS = [
    {
        id: 1,
        title: "Bài viết blog số 1",
        excerpt: "Mô tả ngắn cho bài viết blog, chuẩn SEO, dễ đọc.",
        date: "2026-01-20",
        image: "../../assets/images/blog_1.png",
        url: "./blog_1.html"
    },
    {
        id: 2,
        title: "Bài viết blog số 2",
        excerpt: "Mô tả ngắn cho bài viết blog, chuẩn SEO, dễ đọc.",
        date: "2026-01-18",
        image: "../../assets/images/blog_1.png",
        url: "./blog_2.html"
    },
    {
        id: 3,
        title: "Bài viết blog số 2",
        excerpt: "Mô tả ngắn cho bài viết blog, chuẩn SEO, dễ đọc.",
        date: "2026-01-18",
        image: "../../assets/images/blog_1.png",
        url: "./blog_2.html"
    },
    {
        id: 4,
        title: "Bài viết blog số 2",
        excerpt: "Mô tả ngắn cho bài viết blog, chuẩn SEO, dễ đọc.",
        date: "2026-01-18",
        image: "../../assets/images/blog_1.png",
        url: "./blog_2.html"
    },
    {
        id: 5,
        title: "Bài viết blog số 2",
        excerpt: "Mô tả ngắn cho bài viết blog, chuẩn SEO, dễ đọc.",
        date: "2026-01-18",
        image: "../../assets/images/blog_1.png",
        url: "./blog_2.html"
    },
    {
        id: 6,
        title: "Bài viết blog số 2",
        excerpt: "Mô tả ngắn cho bài viết blog, chuẩn SEO, dễ đọc.",
        date: "2026-01-18",
        image: "../../assets/images/blog_1.png",
        url: "./blog_2.html"
    },
    {
        id: 7,
        title: "Bài viết blog số 2",
        excerpt: "Mô tả ngắn cho bài viết blog, chuẩn SEO, dễ đọc.",
        date: "2026-01-18",
        image: "../../assets/images/blog_1.png",
        url: "./blog_2.html"
    },
    {
        id: 8,
        title: "Bài viết blog số 2",
        excerpt: "Mô tả ngắn cho bài viết blog, chuẩn SEO, dễ đọc.",
        date: "2026-01-18",
        image: "../../assets/images/blog_1.png",
        url: "./blog_2.html"
    },
    {
        id: 9,
        title: "Bài viết blog số 9",
        excerpt: "Mô tả ngắn cho bài viết blog, chuẩn SEO, dễ đọc.",
        date: "2026-01-18",
        image: "../../assets/images/blog_1.png",
        url: "./blog_2.html"
    }

];

const POSTS_PER_PAGE = 3;
let currentPage = 1;

/* ================= RENDER ================= */
const blogList = document.querySelector(".blog-list");
const pagination = document.querySelector(".pagination");
const latestList = document.querySelector(".latest-posts");

function renderPosts() {
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    const end = start + POSTS_PER_PAGE;
    const posts = POSTS.slice(start, end);

    blogList.innerHTML = posts.map(post => `
        <article class="blog-card">
            <img src="${post.image}" class="blog-thumb" alt="${post.title}">
            <div class="blog-content">
                <time class="blog-date">${formatDate(post.date)}</time>
                <h3 class="blog-title">${post.title}</h3>
                <p class="blog-excerpt">${post.excerpt}</p>
                <a href="${post.url}" class="blog-link">Đọc thêm →</a>
            </div>
        </article>
    `).join("");
}

function renderPagination() {
    const totalPages = Math.ceil(POSTS.length / POSTS_PER_PAGE);

    pagination.innerHTML = Array.from({ length: totalPages }, (_, i) => `
        <button class="page-btn ${i + 1 === currentPage ? "active" : ""}"
            onclick="goToPage(${i + 1})">
            ${i + 1}
        </button>
    `).join("");
}

function renderLatest() {
    latestList.innerHTML = POSTS.slice(0, 4).map(post => `
        <li>
            <img src="${post.image}">
            <div class="blog-laster"><a href="${post.url}">${post.title}</a>
                   <time class="blog-date">${formatDate(post.date)}</time></div>
        </li>
    `).join("");
}

function goToPage(page) {
    currentPage = page;
    renderPosts();
    renderPagination();
}

function formatDate(date) {
    return new Date(date).toLocaleDateString("vi-VN");
}

/* INIT */
POSTS.sort((a, b) => new Date(b.date) - new Date(a.date));
renderPosts();
renderPagination();
renderLatest();
