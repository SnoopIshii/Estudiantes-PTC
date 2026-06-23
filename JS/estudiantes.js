const vacantes = [

{
cargo:"Desarrollo Frontend",
empresa:"Nombre de la empresa",
guardado:"Guardado hace 2 días"
},

{
cargo:"Diseñador Gráfico",
empresa:"Nombre de la empresa",
guardado:"Guardado hace 5 días"
},

{
cargo:"Desarrollador Backend PHP",
empresa:"Nombre de la empresa",
guardado:"Guardado hace 1 semana"
}

];

const container =
document.getElementById("vacantesContainer");

vacantes.forEach(v=>{

container.innerHTML += `

<div class="vacante">

<div class="logo"></div>

<div class="info">

<div class="fecha">
${v.guardado}
</div>

<h3>${v.cargo}</h3>

<div class="empresa">
${v.empresa}
</div>

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
<i class="fa-regular fa-clock"></i>
Publicado hace 2 días
</span>

</div>

<div class="botones">

<button class="btn-detalle">
Ver detalles
</button>

<button class="btn-postular">
Postularme
</button>

<div class="guardar">
<i class="fa-regular fa-bookmark"></i>
</div>

</div>

</div>

</div>

`;

});