const vacantes = [

{
cargo:"Desarrollo Frontend",
empresa:"TechSolutions C.A."
},

{
cargo:"Diseñador Gráfico",
empresa:"Creative Studio"
},

{
cargo:"Desarrollador Backend PHP",
empresa:"Digital Systems"
},

{
cargo:"Analista de Datos",
empresa:"DataTech"
}

];

const contenedor =
document.getElementById("contenedorVacantes");

vacantes.forEach(v=>{

contenedor.innerHTML += `

<div class="vacante">

<div class="logo"></div>

<div class="info">

<h3>${v.cargo}</h3>

<a href="#">
${v.empresa}
</a>

<div class="detalles">

<span>
<i class="fa-solid fa-location-dot"></i>
San Salvador
</span>

<span>
<i class="fa-regular fa-clock"></i>
Tiempo completo
</span>

<span>
Publicado hace 2 días
</span>

</div>

<div class="botones">

<button class="btn btn-outline-primary">
Ver detalles
</button>

<button class="btn btn-primary">
Postularme
</button>

</div>

</div>

<div>
<i class="fa-regular fa-bookmark guardar"></i>
</div>

</div>

`;

});