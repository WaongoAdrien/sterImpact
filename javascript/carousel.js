// Reusable slide carousel: each item sits in one of 3 slots (left /
// center / right); next()/prev() rotate those slots, animating the two
// items involved and instantly snapping the third (always off-screen,
// so the snap is invisible) so it's ready to slide in next time. On
// larger screens the items are shown as a static side-by-side grid
// (see css/wave.css and css/polygon.css), so this has no visible
// effect there.
function initCarousel(itemsSelector, prevSelector, nextSelector, intervalMs) {
  var items = Array.prototype.slice.call(document.querySelectorAll(itemsSelector));
  if (items.length < 2) return;
  var prevBtn = document.querySelector(prevSelector);
  var nextBtn = document.querySelector(nextSelector);
  var activeIndex = 0;
  items.forEach(function (c, i) {
    if (c.classList.contains('carousel-active')) activeIndex = i;
  });

  function snapInstant(item, cls) {
    item.style.transition = 'none';
    item.classList.remove('carousel-active', 'carousel-left');
    if (cls) item.classList.add(cls);
    void item.offsetWidth;
    item.style.transition = '';
  }

  function next() {
    var n = items.length;
    var newActive = (activeIndex + 1) % n;
    var oldActive = activeIndex;
    var wrap = (activeIndex + 2) % n;

    snapInstant(items[wrap], null);

    items[oldActive].classList.remove('carousel-active');
    items[oldActive].classList.add('carousel-left');

    items[newActive].classList.remove('carousel-left');
    items[newActive].classList.add('carousel-active');

    activeIndex = newActive;
  }

  function prev() {
    var n = items.length;
    var newActive = (activeIndex + 2) % n;
    var oldActive = activeIndex;
    var wrap = (activeIndex + 1) % n;

    snapInstant(items[wrap], 'carousel-left');

    items[oldActive].classList.remove('carousel-active', 'carousel-left');

    items[newActive].classList.remove('carousel-left');
    items[newActive].classList.add('carousel-active');

    activeIndex = newActive;
  }

  var autoplay = setInterval(next, intervalMs);
  function stopAutoplay() {
    clearInterval(autoplay);
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', function () {
      stopAutoplay();
      next();
    });
  }
  if (prevBtn) {
    prevBtn.addEventListener('click', function () {
      stopAutoplay();
      prev();
    });
  }
}
