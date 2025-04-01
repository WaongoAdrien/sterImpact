function animateCounter(target, duration, elementId, maxPercentage) {
    let start = 0;
    let end = target * (maxPercentage / 100);
    let increment = end / (duration * 100);
    let counterElement = document.getElementById(elementId);
    let current = start;

    function updateCounter() {
      current += increment;
      if (current >= end) {
        counterElement.textContent = Math.round((end / target) * 100) + '%';
      } else {
        counterElement.textContent = Math.round((current / target) * 100) + '%';
        requestAnimationFrame(updateCounter);
      }
    }
    updateCounter();
  }
  animateCounter(45000, 2, "counter", 30);
  animateCounter(45000, 2, "counterA", 50);
  animateCounter(45000, 2, "counterB", 20);
  

// Function to restart the animations every 5 seconds
function startAnimationLoop() {
    animateCounter(45000, 2, "counter", 32);
    animateCounter(45000, 2, "counterA", 57);
    animateCounter(45000, 2, "counterB", 28);
}

// Initial animation start
startAnimationLoop();

// Repeat every 5 seconds
setInterval(startAnimationLoop, 11000);


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



//https://forms.gle/rLLZLK7PRT8vzW8w5

const btn = document.getElementById("#apply");

function apply() {
    window.location.href = "form.html";
}

btn.addEventListener('click', (e) => {
    e.preventDefault;
    apply()
});


function toggleReadMore() {
    var moreText = document.getElementById("moreText");
    var btn = document.querySelector(".read-more-btn");

    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        btn.textContent = "Read Less";
    } else {
        moreText.style.display = "none";
        btn.textContent = "Read More";
    }
}