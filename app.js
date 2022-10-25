import proyect from "./Proyectos.js";
import Nav from "./navMenu.js";
const li_cards = document.querySelector(".item-lista");
const menu = document.querySelector(".menu-container")
const Filter_proyectos = document.querySelector(".Filter-proyect");
const background_contener = document.querySelector(".container-Im");
const background_contener_contact = document.querySelector(".container-contact");
const conteiner = document.querySelector(".conteiner")
const loading = document.querySelector(".loading-img")


menu.onclick =()=>{
  Nav.ManuNav()
} 

for(const li of document.querySelectorAll(".nav-li")){
  li.onclick = e =>{
    Nav.handleOnClick(e.target.innerHTML)
  }
}

 window.onload =()=>{
    loading.classList.add("none")
    conteiner.classList.remove("conteiner")
 }


let cont = 0;
setInterval(() => {
  background_contener.style.background = `linear-gradient(${cont}deg, #0f0f0f ,#1A0C50 , #0f0f0f ,#1b011b, #0f0f0f)`;
  background_contener_contact.style.background = `linear-gradient(${cont}deg, #860686 0% ,#1A0C50 80%,#1b011b 100%)`;
  cont++;
  if (cont > 360) {
    cont = 0;
  }
}, 50);



const handleOnmouse = (e) => {
  const { currentTarget: target } = e;
  const rect = target.getBoundingClientRect(),
    x = e.clientX - rect.left,
    y = e.clientY - rect.top;
  target.style.setProperty("--mouse-x", `${x}px`);
  target.style.setProperty("--mouse-y", `${y}px`);
};

for (const card of document.querySelectorAll(".liste-stkills")) {
  card.onmousemove = (e) => handleOnmouse(e);
}

function filter(e) {
  if (e) {
    li_cards.innerHTML = "";

    let cards = [];

    if (
      e.target.className === "li-filter" ||
      e.target.className === "li-filter Select"
    ) {
      Filter_proyectos.childNodes.forEach((e) => {
        if (e.nextElementSibling && e.nextElementSibling.className) {
          e.nextElementSibling.classList.remove("Select");
        }
      });

      e.target.classList.add("Select");
      let stikll = e.target.innerHTML.toLocaleLowerCase();

      cards = proyect.bloques.filter(
        (card) =>
          card.includes(stikll) === true ||
          (card.includes("node.js") === true && stikll === "full stack")
      );

      for (let i = 0; i < cards.length; i++) {
        li_cards.innerHTML += cards[i];
      }
    }
    return;
  }

  for (let i = 0; i < proyect.bloques.length; i++) {
    li_cards.innerHTML += proyect.bloques[i];
  }
  return;
}

filter();

Filter_proyectos.onclick = (e) => {
  filter(e);
};
