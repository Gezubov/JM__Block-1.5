
/* Swiper
**************************************************************/
var swiper= Swiper;
var init = false;

/* Which media query
**************************************************************/
let swiperMode = () => {
    let mobile = window.matchMedia('(min-width: 0px) and (max-width: 767px)');

    // Enable (for mobile)
    if(mobile.matches) {
        if (!init) {
            init = true;

            const swiper = new Swiper('.swiper-container', {
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

     // Disable for tablet and desktop
     else  {
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
let buttonAppend = document.querySelector('.button-append');
let buttonHide = document.querySelector('.button-hide');

buttonAppend.addEventListener('click', function (evt) {
    evt.preventDefault();
    slider.classList.add('slider--open');
    buttonAppend.classList.add('hidden');
    buttonHide.classList.remove('hidden');
  });
buttonHide.addEventListener('click', function (evt) {
    evt.preventDefault();
    slider.classList.remove('slider--open');
    buttonAppend.classList.remove('hidden');
    buttonHide.classList.add('hidden');
  });