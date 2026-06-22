console.log("Portal de Pasantías cargado");

function mostrarAlerta() {
    alert("Postulación enviada correctamente");
}
function mostrar(id){

let secciones =
document.querySelectorAll(".seccion");

secciones.forEach(sec=>{
sec.classList.add("oculto");
});

document
.getElementById(id)
.classList.remove("oculto");

}

const ctx =
document.getElementById("grafico");

new Chart(ctx,{

type:'line',

data:{
labels:[
'1 May',
'8 May',
'15 May',
'22 May',
'29 May'
],

datasets:[{

label:'Horas',

data:[
5,
12,
28,
18,
36
],

fill:true,

tension:.4,

borderColor:'#4F46E5'

}]
},

options:{
responsive:true
}

});