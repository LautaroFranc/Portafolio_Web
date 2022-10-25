
const nav = document.querySelector(".nav-ul")
const Img = document.querySelector("#img-menu")
const Home = document.getElementById("about")

let urlSrc={menu1:"https://img.icons8.com/nolan/344/1A6DFF/C822FF/drag-list-down.png",menu2:"./img/icons8-menu.svg"}

const ManuNav = () =>{
  for(const urlImg  of Img.attributes){
    if(urlImg.nodeName==="src" ){
      Img.style.transform=nav.className==="nav-ul menu"?"rotate(0deg)":"rotate(295deg)";
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

console.log(window.screen.width)

const objectScroll={
  "inicio":0,
  "sobre mi":window.screen.width>700?650:950,
  "Habilidades":window.screen.width>700?650*2:1780,
  "proyectos":window.screen.width>700?2450:650*4.3,
  "contactos":2850*2
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



export default {ManuNav,handleOnClick}