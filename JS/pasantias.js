const vacancies = [

"Desarrollo Frontend",
"Desarrollo Frontend",
"Desarrollo Frontend",
"Desarrollo Frontend",
"Desarrollo Frontend"

];

const estudiantes = [

"Nombre del estudiante",
"Nombre del estudiante",
"Nombre del estudiante",
"Nombre del estudiante",
"Nombre del estudiante"

];

const vacanLista = document.getElementById("vacanLista");

vacantes.forEach((vacantes,index)=>{

vacanLista.innerHTML += `

<div class="vacantes-card ${index===0?'active':''}">

<div class="vacantes-img"></div>

<div class="vacantes-info">

<h4>${vacantes}</h4>

<p class="company">
Nombre de la empresa
</p>

<p class="slots">
Cupos disponibles
</p>

<small>Presencial</small>

</div>

</div>

`;

});

const estudianteLista = document.getElementById("estudianteLista");

estudiantes.forEach((student,index)=>{

estudianteLista.innerHTML += `

<div class="estudiantes">

<div>

<div class="estudiantes-info">

<i class="fa-solid fa-circle-user"></i>

<span>${estudiantes}</span>

</div>

<small>2 Software A - G1</small>

</div>

<div style="display:flex;align-items:center;gap:10px;">

<span>30 / 200</span>

<div class="proceso">
<div class="bar"></div>
</div>

<span>15%</span>

<input type="checkbox"
${index===3 ? "checked" : ""}>

</div>

</div>

`;

});