
const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

//Header Container
ScrollReveal().reveal('.header-container h1', {
    ...scrollRevealOption,
});
   

ScrollReveal().reveal('.header-container p', {
    ...scrollRevealOption,
    delsy: 500,
});
   

ScrollReveal().reveal('.header-container form', {
    ...scrollRevealOption,
    delsy: 1000,
});
   
ScrollReveal().reveal('.header-container a', {
    ...scrollRevealOption,
    delsy: 1500,
});

//SWIPER JS

const depoimentosSwiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

//AOS
AOS.init();

   