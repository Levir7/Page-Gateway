import { transform } from "@vue/compiler-core";

const menu = document.getElementById('menu-slider');
const menuList = document.getElementById('nav.container');
// const menuContainer = document.querySelector('.menu-container');
// const widthScreen = document.getElementById('nav.container').style.width = '630px';
let mediaqueryList = window.matchMedia("(min-width: 630px)");
// let mediaqueryListMobile = window.matchMedia("(max-width: 629px)")
// const menuMobile = document.querySelector('.active')

menu.addEventListener('click', toggleMenu1);
// menu.addEventListener('width' >= '630px', addClass)

//click para desplegar el menu
function toggleMenu1(event){
    if(!menuList.classList.contains('active')){
        menuList.classList.add('active')
        // menuList.classList.remove('inactive')
    } else if(menuList.classList.contains('active')){
        menuList.classList.remove('active')
        // menuList.classList.add('inactive')
    }
}

// Validar que la media (min.width o max-width) definida en el archivo css se cumpla
if(mediaqueryList.matches){
    menuList.classList.add('nav-container')
}
//  else if(mediaqueryListMobile.matches){
//     menuList.classList.toggle('nav-container')
// }

//con el addlistener hacemos que escuche cuando la condicion de la variable se cumpla y ejecute lo que está dentro

// mediaqueryListMobile.addListener((eventMedia)=>{
//     menuList.classList.toggle('nav-container')
// })
// mediaqueryList.addListener((eventMedia)=>{
//     menuList.classList.add('nav-container')
// })

const formItemFullName = document.querySelector('#form-labelFN')
const formCompanyName = document.querySelector('#form-labelCN')
const formEmailAddress = document.querySelector('#form-labelEA')
const formSelect = document.querySelector('#form-labelSelect')
const formComments = document.querySelector('#form-labelComments')
const textFullName = document.querySelector('#form-fullName')
const textCompanyName = document.querySelector('#form-companyName')
const textEmailAddress = document.querySelector('#form-emailAddress')
const textSelect = document.querySelector('#form-select')
const textComments = document.querySelector('#form-comments')

textFullName.addEventListener('click', toggleFullName);
textCompanyName.addEventListener('click', labelCompanyName);
textEmailAddress.addEventListener('click', labelEmailAddress);
textSelect.addEventListener('click', labelSelect);
textComments.addEventListener('click', labelComments);


function toggleFullName (){
    if(!formItemFullName.classList.contains('formLabel')){
        return formItemFullName.classList.add('formLabel');
    } 
}
function labelCompanyName (){
    if(!formCompanyName.classList.contains('formLabel')){
        return formCompanyName.classList.add('formLabel');
    }
}
function labelEmailAddress (){
    if(!formEmailAddress.classList.contains('formLabel')){
        return formEmailAddress.classList.add('formLabel');
    }
}
function labelSelect(){
    if(!formSelect.classList.contains('formLabel')){
        return formSelect.classList.add('formLabel');
    }
}
function labelComments(){
    if(!formComments.classList.contains('formLabel')){
        return formComments.classList.add('formLabel');
    }
}
