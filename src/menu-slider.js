import { transform } from "@vue/compiler-core";

const menu = document.getElementById('menu-slider');
const menuList = document.getElementById('nav.container');
const menuContainer = document.querySelector('.menu-container');
// const widthScreen = document.getElementById('nav.container').style.width = '630px';
let mediaqueryList = window.matchMedia("(min-width: 630px)");
let mediaqueryListMobile = window.matchMedia("(max-width: 629px)")
// const menuMobile = document.querySelector('.inactive')

menu.addEventListener('click', toggleMenu1);
// menu.addEventListener('width' >= '630px', addClass)

//click para desplegar el menu
function toggleMenu1(event){
    if(!menuList.classList.contains('nav-container')){
        menuList.classList.add('nav-container')
        // menuList.classList.remove('inactive')
    } else if(menuList.classList.contains('nav-container')){
        menuList.classList.remove('nav-container')
        // menuList.classList.add('inactive')
    }
}

// Validar que la media (min.width o max-width) definida en el archivo css se cumpla
if(mediaqueryList.matches){
    menuList.classList.add('nav-container')
} else if(mediaqueryListMobile.matches){
    menuList.classList.remove('nav-container')
}

//con el addlistener hacemos que escuche cuando la condicion de la variable se cumpla y ejecute lo que está dentro

// mediaqueryListMobile.addListener((eventMedia)=>{
//     menuList.classList.toggle('nav-container')
// })
// mediaqueryList.addListener((eventMedia)=>{
//     menuList.classList.add('nav-container')
// })


