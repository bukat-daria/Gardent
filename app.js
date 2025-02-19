const trigger = document.querySelector(".burger-open");
const nav = document.querySelector(".full-screen");
const cross = document.querySelector(".cross");
const titleProject = document.querySelector("#title-project");
const btn = document.querySelector(".me1");
const modal = document.querySelector(".wrapper-modal");
const emailInput = document.getElementById("e-mail");
const emailErrorSpan = document.getElementById("email-error");

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

document.addEventListener("DOMContentLoaded", function () {
  const commutity = document.querySelector(".commutity");
  const com = document.querySelector(".com");
  const com2 = document.querySelector(".com2");
  const arrowLeft = commutity.querySelector(
    'img[src="image/Group 16.png"]'
  );
  const arrowRight = commutity.querySelector(
    'img[src="image/Group 17.png"]'
  );

  let currentSlide = 1;
  let isAnimating = false;
  const transitionDuration = 500;

  function showSlide(slideNumber) {
    if (isAnimating) return;

    isAnimating = true;

    const currentSlideElement = currentSlide === 1 ? com : com2;
    currentSlideElement.style.transition = `opacity ${
      transitionDuration / 2
    }ms ease-in-out`;
    currentSlideElement.style.opacity = 0;

    setTimeout(() => {
      if (slideNumber === 1) {
        com.style.display = "flex";
        com2.style.display = "none";
      } else if (slideNumber === 2) {
        com.style.display = "none";
        com2.style.display = "flex";
      }

      const nextSlideElement = slideNumber === 1 ? com : com2;
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


function openModal() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(emailInput.value)) {
    if (modal.classList.contains("none")) {
      modal.classList.remove("none");
    }
    emailInput.classList.remove("error");
    emailErrorSpan.classList.remove("show");
  } else {
    emailInput.classList.add("error");
    emailErrorSpan.textContent = "Please enter a valid email address.";
    emailErrorSpan.classList.add("show");
  }
}

btn.addEventListener("click", openModal);

function closeModal(event) {
  if (event.target === modal) {
    modal.classList.add("none");
  }
}

modal.addEventListener("click", closeModal);


trigger.addEventListener("click", () => {
  nav.classList.add("open");
  document.body.style.overflow = "hidden";
  trigger.style.display = "none";
});

if (cross) {
  cross.addEventListener("click", () => {
    nav.classList.remove("open");
    document.body.style.overflow = "auto";
    trigger.style.display = "revert-layer";
    
  });
  if (document.body.style.minWidth == 450) {
    trigger.style.display = "none";
  }
}
