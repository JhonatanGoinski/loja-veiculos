// JS MENU DO SITE
let menu = document.querySelector(".menu-links");
let menuBtn = document.querySelector("#menu-btn");

menuBtn.onclick = () =>{
    menu.classList.toggle('active');
}
// FIM JS MENU DO SITE

// SCROLL
window.onscroll = () =>{
  let topoSite = document.querySelector("header");

  topoSite.classList.toggle('sticky', window.scrollY > 100);
}

// FIM SCROLL

// JS DO SLIDE DESTAQUE
var swiper = new Swiper(".jgSlider", {
    spaceBetween: 30,
    centerdSlides: true,
    loop:true,
    autoplay:{
      delay: 4500,
      disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
  });
  // FIM JS DO SLIDE DESTAQUE

  // INICIO JS CONTATOR DE VEICULOS
let campoConta = document.querySelectorAll(".numero");

let intervalo = 1000;

campoConta.forEach((campoConta) =>{

  let valorInicial = 0;

  let finalValor = parseInt(campoConta.getAttribute("jgflix-c-valor"));

  let duracao = Math.floor(intervalo/finalValor);

  let contador = setInterval(function(){
    valorInicial += 1;

    campoConta.textContent = valorInicial;
    
    if(valorInicial == finalValor){
      clearInterval(contador);
    }

  }, duracao);

});
  // FIM JS CONTATOR DE VEICULOS

  // JS DO SLIDE DEPOIMENTOS DE CLIENTES
var swiper = new Swiper(".meus-depoimentos", {
  slidesPerView: 1,
  spaceBetween: 10,
  centerdSlides: true,
  loop:true,
  autoplay:{
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    640:{
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});
// FIM JS  DEPOIMENTOS DE CLIENTES
