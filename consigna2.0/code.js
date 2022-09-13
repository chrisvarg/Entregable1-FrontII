/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  datosPersona.nombre = prompt("Ingresa tu nombre");
  datosPersona.edad = 2022 - parseInt(prompt("Ingresa el año en que naciste"));
  datosPersona.ciudad = prompt("Ingresa la ciudad donde vives");
  datosPersona.interesPorJs = confirm("Te interesa Javascript?");
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  const cardHeader = document.querySelectorAll(".card-header span");
  const userDate = Object.entries(datosPersona);
  
  let i = 0;
  cardHeader.forEach((containt) => {
    containt.textContent = userDate[i][1];

    if ((userDate[i][1]) === true) {
      containt.textContent = "Si";
    } else if (userDate[i][1] === false) {
      containt.textContent = "No";
    }
    i++;
  });
}

function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  const cardContainer = document.querySelector("#fila");

  listado.forEach((course) => {
    const { imgUrl, lenguajes, bimestre } = course;
    const card = document.createElement("div");
    card.classList.add("caja");
    card.innerHTML = `
      <img src="${imgUrl}" alt="${lenguajes}" title="${lenguajes}">
      <p class="lengaje">${lenguajes}</p>
      <p class="bimestre">${bimestre}</p>
    `;

    if (cardContainer.childElementCount !== listado.length) {
      cardContainer.appendChild(card);
    }
  });
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  const site = document.querySelector("#sitio");
  site.classList.toggle("dark");
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
const body = document.querySelector("body");
body.onkeydown = event => {
  if(event.key === 'f' || event.key === 'F') {
    const textCard = document.querySelector('#sobre-mi');
    textCard.classList.remove('oculto');
  }
  
};