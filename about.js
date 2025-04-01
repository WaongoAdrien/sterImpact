function handleScroll() {
    const triggerHeight = window.innerHeight * 0.9; // 70% of viewport height

    document.querySelectorAll('.fade-in, .zoom-image').forEach(el => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < triggerHeight && rect.bottom > 0;

        if (isVisible && !el.classList.contains('show')) {
            el.classList.add('show');
            el.classList.remove('hide');
        } else if (!isVisible && !el.classList.contains('hide')) {
            el.classList.add('hide');
            el.classList.remove('show');
        }
    });
}

// Run when the page is loaded
document.addEventListener('DOMContentLoaded', handleScroll);
window.addEventListener('scroll', handleScroll);

function toggleReadMore() {
    var moreText = document.getElementById("moreText");
    var btn = document.querySelector(".read-more-btn");

    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        btn.textContent = "Close";
    } else {
        moreText.style.display = "none";
        btn.textContent = "More about Estelle";
    }

}

function toggleReadMorec() {
    var moreText = document.getElementById("moreTextc");
    var btn = document.querySelector(".read-more-btnc");

    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        btn.textContent = "Close";
    } else {
        moreText.style.display = "none";
        btn.textContent = "More about Cyrille";
    }

}