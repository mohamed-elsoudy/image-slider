let title = document.querySelector('.slide-number');
let images = document.querySelectorAll('img');
currentSlide = 2;
title.innerHTML = `Slide #${currentSlide} Of ${images.length}`