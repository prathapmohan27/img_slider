(() => {
  const nextButton = document.querySelector('.next');
  const prvButton = document.querySelector('.back');
  const slide = document.querySelectorAll('.img-container');
  const dot = document.querySelectorAll('.dot');

  slide[0].classList.add('active');
  dot[0].classList.add('dotBg');

  let index = 1;
  let current = 0;
  function changeDot(n) {
    dot.forEach((d) => {
      if (n === [...dot].indexOf(d)) {
        d.classList.add('dotBg');
      } else {
        d.classList.remove('dotBg');
      }
    });
  }
  function changeSlide(n) {
    slide.forEach((ele) => {
      if (n === [...slide].indexOf(ele)) {
        ele.classList.add('active');
        current = index;
        changeDot(index);
      } else {
        ele.classList.remove('active');
      }
    });
  }
  function slideShow() {
    if (index > slide.length - 1) {
      slide[0].classList.add('active');
      dot[0].classList.add('dotBg');
      changeDot(0);
      index = 0;
    }
    changeSlide(index);
    index += 1;
  }

  setInterval(() => {
    slideShow();
  }, 5000);

  nextButton.addEventListener('click', () => {
    current += 1;
    if (current > slide.length - 1) {
      return;
    }
    index = current;
    changeSlide(index);
    changeDot(index);
  });
  prvButton.addEventListener('click', () => {
    current -= 1;
    if (current < 0) {
      return;
    }
    index = current;
    changeSlide(index);
    changeDot(index);
  });
  dot.forEach((ele) => {
    const btn = ele;
    btn.onclick = () => {
      index = [...dot].indexOf(ele);
      changeSlide(index);
      changeDot(index);
    };
  });
})();
