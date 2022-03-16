$('.rate-container').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    prevArrow:`<button type='button' class='slick-prev pull-left'> <img src="./assets/icons/eva_arrow-back-fill.png"></button>`,
    nextArrow:`<button type='button' class='slick-next pull-right'> <img src="./assets/icons/next-btn.png"></button>`,
    responsive: [
        {
            breakpoint: 700,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
  });

const btnMenu = document.querySelector('.btn-menu')
const btnClose = document.querySelector('.btn-close')
var isActive = false
const headerContainer = document.querySelector('.header-container')
const wrapper = document.querySelector('.wrapper')
const navbarWrap = document.querySelector('.navbar-wrap')


btnMenu.onclick = function(e) {
        e.target.closest('.btn-menu').parentElement.classList.add('active')   
} 

btnClose.onclick = function(e) {
   
        headerContainer.closest('.header-container').classList.remove('active')
}


navbarWrap.onclick = function(e) {
    e.target.parentElement.classList.remove('active')
}
