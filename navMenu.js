
import language from "./language.js"
const nav = document.querySelector(".nav-ul")
const Img = document.querySelector("#img-menu")
let urlSrc={menu1:"https://img.icons8.com/nolan/344/1A6DFF/C822FF/drag-list-down.png",menu2:"./img/icons8-menu.svg"}
const  MenuSetting = document.querySelector(".item-li-ajustes-conteiner")
const OnClikSetting  = document.querySelector("#menu-setting")

const handleLanguage = (e) =>{
 
    for(const text of document.querySelectorAll("#language-spa")){
      if (e=="Español" || e=="Spanish") {
        language.languageSpanish.hasOwnProperty(text.innerHTML)&&(text.innerHTML = language.languageSpanish[text.innerHTML])
      }else if(e=="Ingles" || e=="English") {
        language.languageEnglish.hasOwnProperty(text.innerHTML)&&(text.innerHTML = language.languageEnglish[text.innerHTML])
      }
      MenuSetting.style.display = "none"
      OnClikSetting.style.transition="all 1s"
      OnClikSetting.style.transform="rotate(0deg)"
  } 
}


const ManuNav = () =>{
  for(const urlImg  of Img.attributes){
    if(urlImg.nodeName==="src" ){
      Img.style.transform=nav.className==="nav-ul menu"?"rotate(0deg)":"rotate(320deg)";
      Img.style.transition="all 0.5s"
      urlImg.nodeValue= nav.className==="nav-ul menu"?urlSrc.menu2:urlSrc.menu1;
    }
  }
  if (nav.className==="nav-ul menu") {
      nav.classList.remove("menu")
      nav.classList.add("menu-none")
  }else{
    nav.classList.add("menu")
    nav.classList.remove("menu-none")
  }
}

const objectScroll={
  "Inicio":0,
  "Sobre mi":window.screen.width>700?650:950,
  "Habilidades":window.screen.width>700?650*2:1780,
  "Proyectos":window.screen.width>700?2450:650*4.3,
  "Contactos":2850*2,
  "Home":0,
  "About":window.screen.width>700?650:950,
  "Skills":window.screen.width>700?650*2:1780,
  "Proyect":window.screen.width>700?2450:650*4.3,
  "Contact":2850*2
}

const handleOnClick = e =>{
  window.scroll({top:objectScroll[e], behavior:"smooth"})
  nav.classList.remove("menu")
  nav.classList.add("menu-none")
    
  for(const urlImg  of Img.attributes){
    if(urlImg.nodeName==="src"){
      Img.style.transform="rotate(0deg)"
      Img.style.transition="all 0.5s"
      urlImg.nodeValue="./img/icons8-menu.svg"
    }
  }
}



export default {ManuNav,handleOnClick,handleLanguage}