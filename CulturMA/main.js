const butaonMenu = document.querySelector('.butaoMenu');


const menuMobile = document.querySelector('.menuMobile');

let menuTaAberto = false; // menuTaAberto --> peguntando se false --> fechado, se true --> abeto

butaonMenu.addEventListener('click', function (){
     menuTaAberto? menuMobile.classList.add('invisivel') : menuMobile.classList.remove('invisivel');
    
     menuTaAberto? butaonMenu.children[0].setAttribute('src','/img/menuHamburguer.png') 
     : butaonMenu.children[0].setAttribute('src','/img/cruzMenu.png');

     menuTaAberto = !menuTaAberto;
});