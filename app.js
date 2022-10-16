const Filter_proyectos = document.querySelector(".Filter-proyect")
const li_cards = document.querySelector(".item-lista");
const background_contener= document.querySelector(".container-Im");
const background_contener_contact= document.querySelector(".container-contact");
const scroll_Skills = document.querySelector(".conteiner-lister");
const btm_next_skills = document.querySelector(".btm-next-stkills");
btm_next_skills.onclick=()=>{
  scroll_Skills.scrollLeft+=200
  if (scroll_Skills.scrollLeft>=1040) {
    scroll_Skills.scrollLeft=0
  }
}

scroll_Skills.addEventListener("scroll",(e)=>{
  let position = scroll_Skills.scrollLeft
  if (position===0) {
    e.target.children[3].classList.add("next")
    e.target.children[0].classList.remove("next")

  }else if (position>100) {
    e.target.children[0].classList.add("next")
    e.target.children[3].classList.remove("next")
    e.target.children[4].classList.add("next")
    e.target.children[1].classList.remove("next")

  }
  if (position>320) {
    e.target.children[4].classList.add("next")
    e.target.children[1].classList.add("next")
    e.target.children[4].classList.remove("next")
    
    e.target.children[1].classList.add("next")
    e.target.children[5].classList.add("next")
    e.target.children[2].classList.remove("next") 
  }
  if (position>500) {
    e.target.children[2].classList.add("next")
    e.target.children[6].classList.add("next")
    e.target.children[5].classList.remove("next") 
  }
  if (position>700) {
    e.target.children[3].classList.add("next")
    e.target.children[7].classList.add("next")
    e.target.children[6].classList.remove("next") 
  }
  
  if (position>800) {
    e.target.children[4].classList.add("next")
    e.target.children[8].classList.add("next")
    e.target.children[7].classList.remove("next") 
  }
  if (position>1000) {
    e.target.children[5].classList.add("next")
    e.target.children[8].classList.remove("next")

    e.target.children[9].classList.add("next")

  }
  if (position>1200) { 
    e.target.children[6].classList.add("next")
    e.target.children[9].classList.remove("next")
  }
})

let cont=0
setInterval(()=>{
  background_contener.style.background=`linear-gradient(${cont}deg, #860686 ,#1A0C50 , #1e0631 ,#1b011b, #7a1de4)`
  background_contener_contact.style.background=`linear-gradient(${cont}deg, #860686 0% ,#1A0C50 80%,#1b011b 100%)`
  cont++
  if (cont>360) {
    cont = 0
  }
},50)


const bloques = [
  `<li id="lister-card-proyect">
<img class="item-lista-img" src="./img/Movie.png" alt="movie">
<div id="enlaces">
  <a href="#">
    <p id="enlaces-text">
      <span class="icono-search"></span>
      <span class="enlaces-title">Movie</span>
      desarrollada con
      <span class="skill-enlace">
       react, react-redux
       </span>
    </p>
  </a>    
</div>
</li>`,
  `<li id="lister-card-proyect">
<img  class="item-lista-img" src="./img/dogs.png" alt="movie">
<div id="enlaces">
  <a href="#">
    <p id="enlaces-text">
      <span class="icono-search"></span>
      <span class="enlaces-title">Dog</span>
      desarrollada con
      <span class="skill-enlace">
      react, react-redux, sql, express, node.js 
      </span>
    </p>
  </a>   
</div>
</li>
`,
  `<li id="lister-card-proyect">
<img  class="item-lista-img" src="./img/pokemos.png" alt="movie">
<div id="enlaces">
  <a href="#">
    <p id="enlaces-text">
      <span class="icono-search"></span>
      <span class="enlaces-title">Pokedex</span>
      desarrollada con
      <span class="skill-enlace">
       react, react-redux, sql, express, node.js,syled componet 
      </span>
    </p>
  </a>   
</div>
</li>`,
  `<li id="lister-card-proyect">
<img  class="item-lista-img" src="./img/fit-focus.png" alt="fit focus">
<div id="enlaces">
  <a href="#">
    <p id="enlaces-text">
      <span class="icono-search"></span>
      <span class="enlaces-title">Fit Focus</span>
      fit focus es una app de ejercicios desarrolla con las siguientes tecnologias:
      <span class="skill-enlace">
        react, react native, typescript, redux toolkit, mongoose, mongodb, tailwind, node.js
      
      </span>
    </p>
  </a>   
</div>
</li>`
];


function filter(e) {

  if (e) {
    li_cards.innerHTML = ""

    let cards = []

    if (e.target.className === "li-filter" || e.target.className === "li-filter Select") {


      Filter_proyectos.childNodes.forEach(e => {
        if (e.nextElementSibling && e.nextElementSibling.className) {
          e.nextElementSibling.classList.remove("Select")
        }
      });

      e.target.classList.add("Select");
      let stikll = e.target.innerHTML.toLocaleLowerCase()

      cards = bloques.filter(card => card.includes(stikll) === true || card.includes("node.js") === true && stikll === "full stack")

      for (let i = 0; i < cards.length; i++) {
        li_cards.innerHTML += cards[i]
      }
    }
    return
  }


  for (let i = 0; i < bloques.length; i++) {
    li_cards.innerHTML += bloques[i]
  }
  return
}

filter()
Filter_proyectos.onclick = (e) => {
  filter(e)
}




