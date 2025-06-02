function animateCounter(target, duration, elementId, maxPercentage) {
    let start = 0;
    let end = target * (maxPercentage / 100);
    let increment = end / (duration * 50);
    let counterElement = document.getElementById(elementId);
    let current = start;

    function updateCounter() {
      current += increment;
      if (current >= end) {
        counterElement.textContent = Math.round((end / target) * 100) + '';
      } else {
        counterElement.textContent = Math.round((current / target) * 100) + '';
        requestAnimationFrame(updateCounter);
      }
    }
    updateCounter();
  }
  animateCounter(45000, 2, "counter", 2);
  animateCounter(45000, 2, "counterA", 24000);
  animateCounter(45000, 2, "counterB", 50);
  

// Function to restart the animations every 5 seconds
function startAnimationLoop() {
    animateCounter(45000, 2, "counter", 2);
    animateCounter(45000, 2, "counterA", 24000);
    animateCounter(45000, 2, "counterB", 50);
}

// Initial animation start
startAnimationLoop();

// Repeat every 5 seconds
setInterval(startAnimationLoop, 6000);


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