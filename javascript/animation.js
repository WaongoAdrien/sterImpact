document.addEventListener("DOMContentLoaded", function () {
    const scrollElements = document.querySelectorAll(".fade-in, .slide-in-left, .slide-in-right");
  
    const elementInView = (el, offset = 150) => {
      const elementTop = el.getBoundingClientRect().top;
      return (
        elementTop <= (window.innerHeight || document.documentElement.clientHeight) - offset
      );
    };
  
    const elementOutOfView = (el) => {
      const elementTop = el.getBoundingClientRect().top;
      return elementTop > window.innerHeight;
    };
  
    const displayScrollElement = (element) => {
      element.classList.add("visible");
    };
  
    const hideScrollElement = (element) => {
      element.classList.remove("visible");
    };
  
    const handleScrollAnimation = () => {
      scrollElements.forEach((el) => {
        if (elementInView(el, 150)) {
          displayScrollElement(el);
        } else if (elementOutOfView(el)) {
          hideScrollElement(el);
        }
      });
    };
  
    window.addEventListener("scroll", () => {
      handleScrollAnimation();
    });
  
    // Initial check
    handleScrollAnimation();
  });
  
  window.addEventListener("scroll", function () {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (scrollTop / docHeight) * 100;

    document.getElementById("progressBar").style.width = scrolled + "%";
  });



  window.addEventListener('scroll', function () {
    // If the user scrolls horizontally
    if (window.scrollX !== 0) {
      // Instantly scroll back to the left edge
      window.scrollTo(0, window.scrollY);
    }
  });