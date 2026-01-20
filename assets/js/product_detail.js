
    /* ===== Tabs ===== */
    document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

        btn.classList.add('active');
        document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
    });
});

    /* ===== Gallery thumbnails ===== */
    const mainImage = document.querySelector('.product-main-image');
    const thumbs = document.querySelectorAll('.product-thumbs img');

    thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
        thumbs.forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
        mainImage.src = thumb.src;
    });
    });

    /* active thumb mặc định */
    if (thumbs.length) thumbs[0].classList.add('active');


    // button option
    document.querySelectorAll('.spec-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('active');
        });
    });



    // next anh
    const mainImg = document.querySelector('.product-main-image');
    const thumbsImg = document.querySelectorAll('.product-thumbs img');
    let currentIndex = 0;

    function showImage(index) {
        thumbsImg.forEach(t => t.classList.remove('active'));
        thumbsImg[index].classList.add('active');
        mainImg.src = thumbsImg[index].src;
        currentIndex = index;
    }

    thumbsImg.forEach((thumb, index) => {
        thumb.addEventListener('click', () => showImage(index));
    });

    document.querySelector('.gallery-btn.next').addEventListener('click', () => {
        let next = (currentIndex + 1) % thumbsImg.length;
        showImage(next);
    });

    document.querySelector('.gallery-btn.prev').addEventListener('click', () => {
        let prev = (currentIndex - 1 + thumbsImg.length) % thumbsImg.length;
        showImage(prev);
    });

    /* init */
    showImage(0);
