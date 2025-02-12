document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const sla = document.querySelector('.sla');
    const slaSecond = document.querySelector('.sla-second');
    const arrowLeft = slider.querySelector('img[src="image/Group 16.png"]');
    const arrowRight = slider.querySelector('img[src="image/Group 17.png"]');

  
    let currentSlide = 1;
    let isAnimating = false; // Флаг, чтобы предотвратить повторные клики во время анимации
    const transitionDuration = 500; // Длительность перехода в миллисекундах (0.5 секунды)
  
    // Функция для отображения нужного слайда с анимацией
    function showSlide(slideNumber) {
      if (isAnimating) return; // Если анимация уже выполняется, выходим
  
      isAnimating = true;
  
      // Сначала делаем текущий слайд прозрачным
      const currentSlideElement = (currentSlide === 1) ? sla : slaSecond;
      currentSlideElement.style.transition = `opacity ${transitionDuration / 2}ms ease-in-out`;
      currentSlideElement.style.opacity = 0;
  
      // После того, как текущий слайд станет прозрачным, меняем его на новый
      setTimeout(() => {
        if (slideNumber === 1) {
          sla.style.display = 'flex';
          slaSecond.style.display = 'none';
        } else if (slideNumber === 2) {
          sla.style.display = 'none';
          slaSecond.style.display = 'flex';
        }
  
        const nextSlideElement = (slideNumber === 1) ? sla : slaSecond;
        nextSlideElement.style.opacity = 0; // Сначала делаем новый слайд невидимым
        nextSlideElement.style.transition = 'none'; // Убираем transition, чтобы не было анимации при смене display
        // Запускаем анимацию прозрачности для нового слайда
        setTimeout(() => {
            nextSlideElement.style.transition = `opacity ${transitionDuration / 2}ms ease-in-out`;
            nextSlideElement.style.opacity = 1;
            // Заканчиваем анимацию через заданное время
            setTimeout(() => {
              isAnimating = false;
            }, transitionDuration / 2);
        }, 10); // Небольшая задержка для обновления DOM
      }, transitionDuration / 2);
    }
  
    // Инициализация: показываем первый слайд
    showSlide(currentSlide);
  
    // Обработчик клика для левой стрелки
    arrowLeft.addEventListener('click', function() {
      if (isAnimating) return;
      currentSlide--;
      if (currentSlide < 1) {
        currentSlide = 2;
      }
      showSlide(currentSlide);
    });
  
    // Обработчик клика для правой стрелки
    arrowRight.addEventListener('click', function() {
      if (isAnimating) return;
      currentSlide++;
      if (currentSlide > 2) {
        currentSlide = 1;
      }
      showSlide(currentSlide);
    });
  });
document.addEventListener('DOMContentLoaded', function() {
    const containerImprove = document.querySelector('.container-improve');
    const improve = document.querySelector('.improve');
    const improveSecond = document.querySelector('.improve-second');
    const arrowLeft = containerImprove.querySelector('img[src="image/Group 16.png"]');
    const arrowRight = containerImprove.querySelector('img[src="image/Group 17.png"]');
    
  
    let currentSlide = 1;
    let isAnimating = false; // Флаг, чтобы предотвратить повторные клики во время анимации
    const transitionDuration = 500; // Длительность перехода в миллисекундах (0.5 секунды)
  
    // Функция для отображения нужного слайда с анимацией
    function showSlide(slideNumber) {
      if (isAnimating) return; // Если анимация уже выполняется, выходим
  
      isAnimating = true;
  
      // Сначала делаем текущий слайд прозрачным
      const currentSlideElement = (currentSlide === 1) ? improve : improveSecond;
      currentSlideElement.style.transition = `opacity ${transitionDuration / 2}ms ease-in-out`;
      currentSlideElement.style.opacity = 0;
  
      // После того, как текущий слайд станет прозрачным, меняем его на новый
      setTimeout(() => {
        if (slideNumber === 1) {
          improve.style.display = 'flex';
          improveSecond.style.display = 'none';
        } else if (slideNumber === 2) {
          improve.style.display = 'none';
          improveSecond.style.display = 'flex';
        }
  
        const nextSlideElement = (slideNumber === 1) ? improve : improveSecond;
        nextSlideElement.style.opacity = 0; // Сначала делаем новый слайд невидимым
        nextSlideElement.style.transition = 'none'; // Убираем transition, чтобы не было анимации при смене display
        // Запускаем анимацию прозрачности для нового слайда
        setTimeout(() => {
            nextSlideElement.style.transition = `opacity ${transitionDuration / 2}ms ease-in-out`;
            nextSlideElement.style.opacity = 1;
            // Заканчиваем анимацию через заданное время
            setTimeout(() => {
              isAnimating = false;
            }, transitionDuration / 2);
        }, 10); // Небольшая задержка для обновления DOM
      }, transitionDuration / 2);
    }
  
    // Инициализация: показываем первый слайд
    showSlide(currentSlide);
  
    // Обработчик клика для левой стрелки
    arrowLeft.addEventListener('click', function() {
      if (isAnimating) return;
      currentSlide--;
      if (currentSlide < 1) {
        currentSlide = 2;
      }
      showSlide(currentSlide);
    });
  
    // Обработчик клика для правой стрелки
    arrowRight.addEventListener('click', function() {
      if (isAnimating) return;
      currentSlide++;
      if (currentSlide > 2) {
        currentSlide = 1;
      }
      showSlide(currentSlide);
    });
  });