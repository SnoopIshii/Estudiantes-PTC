const estudiantes = [

{hours:30, estatu:"danger"},
{hours:40, estatu:"danger"},
{hours:50, estatu:"danger"},

{hours:60, estatu:"warning"},
{hours:65, estatu:"warning"},
{hours:100,estatu:"warning"},

{hours:150,estatu:"success"},
{hours:180,estatu:"success"},
{hours:190,estatu:"success"},
{hours:200,estatu:"success"}

];

const table = document.getElementById("estudiantesTabla");

students.forEach(student => {

let percent = (student.hours / 200) * 100;

let color = "red";
let text = "En riesgo";

if(percent >= 30){
color = "#f0a500";
text = "Atención";
}

if(percent >= 70){
color = "#28a745";
text = "Avanzado";
}

if(percent >= 100){
color = "#008000";
text = "Completado";
}

table.innerHTML += `

<tr>

<td>
<i class="fa-solid fa-circle-user"></i>
&nbsp; Nombre del estudiante
</td>

<td>2 Software A - G1</td>

<td>

<div style="display:flex;align-items:center;gap:10px;">

${student.hours}/200

<div class="progress" style="width:100px">

<div class="bar"
style="
width:${percent}%;
background:${color};
">
</div>

</div>

${percent.toFixed(0)}%

</div>

</td>

<td>
<span class="badge ${student.status}">
${text}
</span>
</td>

</tr>

`;

});