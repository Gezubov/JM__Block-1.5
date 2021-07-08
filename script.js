let swiper= Swiper;
let init = false;

let swiperMode = () => {
    let mobile = window.matchMedia('(min-width: 0px) and (max-width: 767px)');
    let notMobile = window.matchMedia('(min-width: 768px)');

    // Enable (for mobile)
    if(mobile.matches) {
        if (!init) {
            init = true;
            swiper = new Swiper('.swiper-container', {
                // Optional parameters
                direction: 'horizontal',
                slidesPerView: "auto",
                spaceBetween: 16,
                loop: false,
                
                // If we need pagination
                pagination: {
                    el: '.swiper-pagination',
                    clickable:true,
                    }
            });
        }
    }

    // Disable (for tablet and desktop)
    else if(notMobile.matches) {
        swiper.destroy();
        init = false;
    }

    
}

/* On Load
**************************************************************/
window.addEventListener('load', function() {
    swiperMode();
});

/* On Resize
**************************************************************/
window.addEventListener('resize', function() {
    swiperMode();
});


let slider = document.querySelector('.slider');
let buttonShow = document.querySelector('.button-show');
let buttonHide = document.querySelector('.button-hide');

buttonShow.addEventListener('click', function (evt) {
    evt.preventDefault();
    slider.classList.add('slider--open');
    buttonShow.classList.add('hidden');
    buttonHide.classList.remove('hidden');
  });
buttonHide.addEventListener('click', function (evt) {
    evt.preventDefault();
    slider.classList.remove('slider--open');
    buttonShow.classList.remove('hidden');
    buttonHide.classList.add('hidden');
  });