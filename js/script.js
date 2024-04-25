const menubtn = document.querySelector('#menu_btn');
const navbar = document.querySelector('.header .navbar');
menubtn.addEventListener('click', ()=>{
    navbar.classList.toggle('active');
    menubtn.classList.toggle('fa-times');
})

window.onscroll = ()=>{
    menubtn.classList.remove('fa-times');
    navbar.classList.remove('active')
}


const swiper = new Swiper('.home_slider', {
    // Optional parameters
    
    loop: true,
  
    
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
   
  });