const notificaciones = [

{
tipo:"verde",
titulo:"Nueva vacante recomendada para ti",
mensaje:"Se ha publicado una nueva vacante que coincide con tu perfil: Desarrollador Frontend en Tech Solutions SV.",
hora:"Hace 5 minutos",
nueva:true,
icono:"fa-solid fa-briefcase"
},

{
tipo:"morado",
titulo:"Tu postulación está en revisión",
mensaje:"Tu postulación para Desarrollador Backend PHP está siendo revisada.",
hora:"Hace 1 hora",
nueva:true,
icono:"fa-regular fa-file-lines"
},

{
tipo:"verde",
titulo:"Felicidades, fuiste preseleccionado",
mensaje:"Has sido preseleccionado para una entrevista.",
hora:"Hace 3 horas",
nueva:true,
icono:"fa-solid fa-circle-check"
},

{
tipo:"naranja",
titulo:"Recordatorio de horas laborales",
mensaje:"Tienes una nueva asignación para completar horas.",
hora:"Hace 1 día",
nueva:false,
icono:"fa-regular fa-bell"
},

{
tipo:"rojo",
titulo:"Postulación no seleccionada",
mensaje:"Tu postulación no fue seleccionada.",
hora:"Hace 1 día",
nueva:false,
icono:"fa-solid fa-xmark"
}

];

const lista =
document.getElementById("listaNotificaciones");

notificaciones.forEach(n=>{

lista.innerHTML += `

<div class="notificacion ${n.nueva ? 'nueva':''}">

<div class="info-notificacion">

<div class="icono ${n.tipo}">
<i class="${n.icono}"></i>
</div>

<div>

<h6>${n.titulo}</h6>

<p>${n.mensaje}</p>

</div>

</div>

<div class="hora">

${n.hora}

${n.nueva ? '<span class="punto"></span>' : ''}

</div>

</div>

`;

});