document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  const sla = document.querySelector(".sla");
  const slaSecond = document.querySelector(".sla-second");
  const arrowLeft = slider.querySelector('img[src="image/Group 16.png"]');
  const arrowRight = slider.querySelector('img[src="image/Group 17.png"]');

  let currentSlide = 1;
  let isAnimating = false;
  const transitionDuration = 500;

  function showSlide(slideNumber) {
    if (isAnimating) return;

    isAnimating = true;

    const currentSlideElement = currentSlide === 1 ? sla : slaSecond;
    currentSlideElement.style.transition = `opacity ${
      transitionDuration / 2
    }ms ease-in-out`;
    currentSlideElement.style.opacity = 0;

    setTimeout(() => {
      if (slideNumber === 1) {
        sla.style.display = "flex";
        slaSecond.style.display = "none";
      } else if (slideNumber === 2) {
        sla.style.display = "none";
        slaSecond.style.display = "flex";
      }

      const nextSlideElement = slideNumber === 1 ? sla : slaSecond;
      nextSlideElement.style.opacity = 0;
      nextSlideElement.style.transition = "none";
      setTimeout(() => {
        nextSlideElement.style.transition = `opacity ${
          transitionDuration / 2
        }ms ease-in-out`;
        nextSlideElement.style.opacity = 1;
        setTimeout(() => {
          isAnimating = false;
        }, transitionDuration / 2);
      }, 10);
    }, transitionDuration / 2);
  }

  showSlide(currentSlide);

  arrowLeft.addEventListener("click", function () {
    if (isAnimating) return;
    currentSlide--;
    if (currentSlide < 1) {
      currentSlide = 2;
    }
    showSlide(currentSlide);
  });

  arrowRight.addEventListener("click", function () {
    if (isAnimating) return;
    currentSlide++;
    if (currentSlide > 2) {
      currentSlide = 1;
    }
    showSlide(currentSlide);
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const containerImprove = document.querySelector(".container-improve");
  const improve = document.querySelector(".improve");
  const improveSecond = document.querySelector(".improve-second");
  const arrowLeft = containerImprove.querySelector(
    'img[src="image/Group 16.png"]'
  );
  const arrowRight = containerImprove.querySelector(
    'img[src="image/Group 17.png"]'
  );

  let currentSlide = 1;
  let isAnimating = false;
  const transitionDuration = 500;

  function showSlide(slideNumber) {
    if (isAnimating) return;

    isAnimating = true;

    const currentSlideElement = currentSlide === 1 ? improve : improveSecond;
    currentSlideElement.style.transition = `opacity ${
      transitionDuration / 2
    }ms ease-in-out`;
    currentSlideElement.style.opacity = 0;

    setTimeout(() => {
      if (slideNumber === 1) {
        improve.style.display = "flex";
        improveSecond.style.display = "none";
      } else if (slideNumber === 2) {
        improve.style.display = "none";
        improveSecond.style.display = "flex";
      }

      const nextSlideElement = slideNumber === 1 ? improve : improveSecond;
      nextSlideElement.style.opacity = 0;
      nextSlideElement.style.transition = "none";
      setTimeout(() => {
        nextSlideElement.style.transition = `opacity ${
          transitionDuration / 2
        }ms ease-in-out`;
        nextSlideElement.style.opacity = 1;
        setTimeout(() => {
          isAnimating = false;
        }, transitionDuration / 2);
      }, 10);
    }, transitionDuration / 2);
  }

  showSlide(currentSlide);

  arrowLeft.addEventListener("click", function () {
    if (isAnimating) return;
    currentSlide--;
    if (currentSlide < 1) {
      currentSlide = 2;
    }
    showSlide(currentSlide);
  });

  arrowRight.addEventListener("click", function () {
    if (isAnimating) return;
    currentSlide++;
    if (currentSlide > 2) {
      currentSlide = 1;
    }
    showSlide(currentSlide);
  });
});
