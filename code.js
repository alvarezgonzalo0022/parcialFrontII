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
  const anioActual = new Date();
  const nombrePersona = prompt("Ingresa tu nombre");
  const edadPersona = anioActual.getFullYear() - parseInt(prompt("Ingresa tu año de nacimiento"));
  const ciudadPersona = prompt("Ingresa la ciudad donde vives");
  const interesJs = confirm("¿Te interesa Javascript?");

  datosPersona.nombre = nombrePersona;
  datosPersona.edad = edadPersona;
  datosPersona.ciudad = ciudadPersona;
  if(interesJs){
    datosPersona.interesPorJs = "Si"
  }else{
    datosPersona.interesPorJs = "No";
  }
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  const nodosSpan = document.querySelectorAll(".card-header span");

  let valoresPersona = Object.values(datosPersona);
  valoresPersona.forEach((item, index) => nodosSpan[index].textContent = item);
}

function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  const contenedor = document.querySelector('#fila');

  contenedor.innerHTML = "";
  listado.forEach(item => {
    contenedor.innerHTML += `
  <div class="caja">
    <img src=${item.imgUrl} alt=${item.lenguajes}>
    <p class="lenguajes">Lenguajes: ${item.lenguajes}</p>
    <p class="bimestre">Bimestre: ${item.bimestre}</p>
    </img>
  </div>
    `
  });
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
 const nodoSitio = document.querySelector("#sitio");
 nodoSitio.classList.toggle("dark");
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
nodoPSobreMi = document.querySelector('#sobre-mi');

document.addEventListener('keypress', function(e){
  if(e.key === 'f' || e.key === 'F'){
    nodoPSobreMi.classList.remove('oculto');
  }
});