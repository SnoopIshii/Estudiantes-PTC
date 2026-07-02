
document.addEventListener("DOMContentLoaded", () => {

    iniciarEmpresas();
    iniciarEstudiantes();
    iniciarBuscador();
    iniciarBotonAsignar();
    animarTarjetas();

});

//Datos de la empresa
const empresas = [

    {
        nombre: "Nombre de la empresa",
        puesto: "Frontend Developer",
        modalidad: "Presencial",
        duracion: "6 meses"
    },

    {
        nombre: "Tech Solutions",
        puesto: "Backend Developer",
        modalidad: "Virtual",
        duracion: "8 meses"
    },

    {
        nombre: "Creative Studio",
        puesto: "UX/UI Designer",
        modalidad: "Híbrida",
        duracion: "5 meses"
    },

    {
        nombre: "Innovate S.A.",
        puesto: "QA Tester",
        modalidad: "Presencial",
        duracion: "4 meses"
    },

    {
        nombre: "Digital Company",
        puesto: "Soporte Técnico",
        modalidad: "Virtual",
        duracion: "6 meses"
    }

];


function iniciarEmpresas() {

    const tarjetas = document.querySelectorAll(".empresa");

    tarjetas.forEach((empresa, index) => {

        empresa.addEventListener("click", () => {

            tarjetas.forEach(e => e.classList.remove("active"));

            empresa.classList.add("active");

            actualizarDetalle(index);

        });

    });

}

function actualizarDetalle(index){

    const datos = empresas[index];

    const filas = document.querySelectorAll(".table td");

    if(filas.length >= 8){

        filas[1].textContent = datos.nombre;
        filas[3].textContent = datos.puesto;
        filas[5].textContent = datos.modalidad;
        filas[7].textContent = datos.duracion;

    }

}
//Estudiantes

function iniciarEstudiantes(){

    const checks = document.querySelectorAll(".seleccionar");

    const estudiantes = document.querySelectorAll(".estudiante");

    checks.forEach((check,index)=>{

        check.addEventListener("change",()=>{

            checks.forEach(c=>{

                if(c!==check){

                    c.checked=false;

                }

            });

            if(check.checked){

                mostrarSeleccion(estudiantes[index]);

            }else{

                limpiarSeleccion();

            }

        });

    });

}


function mostrarSeleccion(estudiante){

    const nombre = estudiante.querySelector("strong").textContent;

    const grupo = estudiante.querySelector("small").textContent;

    const progreso = estudiante.querySelector(".progreso span").textContent;

    document.querySelector(".perfil-mini").src="assets/avatar.png";

    document.querySelector(".perfil-mini")
        .nextElementSibling.textContent=nombre;

    document.querySelector(".perfil-mini")
        .nextElementSibling.nextElementSibling.textContent=grupo;

    document.querySelector(".perfil-mini")
        .nextElementSibling
        .nextElementSibling
        .nextElementSibling.textContent=progreso;

}

function limpiarSeleccion(){

    document.querySelector(".perfil-mini")
        .nextElementSibling.textContent="Ningún estudiante";

    document.querySelector(".perfil-mini")
        .nextElementSibling
        .nextElementSibling.textContent="-";

    document.querySelector(".perfil-mini")
        .nextElementSibling
        .nextElementSibling
        .nextElementSibling.textContent="-";

}


function iniciarBuscador(){

    const buscador=document.getElementById("buscarEstudiante");

    if(!buscador) return;

    buscador.addEventListener("keyup",()=>{

        const texto=buscador.value.toLowerCase();

        document.querySelectorAll(".estudiante")
        .forEach(estudiante=>{

            estudiante.style.display=
            estudiante.innerText.toLowerCase().includes(texto)
            ? "grid"
            : "none";

        });

    });

}

//asignar

function iniciarBotonAsignar(){

    const boton=document.getElementById("asignar");

    boton.addEventListener("click",()=>{

        const estudiante=
        document.querySelector(".perfil-mini")
        .nextElementSibling.textContent;

        if(estudiante==="Ningún estudiante"){

            alert("Seleccione un estudiante.");

            return;

        }

        const empresa=
        document.querySelector(".empresa.active h4").textContent;

        alert(

            "Pasantía asignada correctamente.\n\n"+
            "Estudiante: "+estudiante+
            "\nEmpresa: "+empresa

        );

    });

}


function animarTarjetas(){

    const tarjetas=document.querySelectorAll(".card,.empresa");

    tarjetas.forEach((tarjeta,index)=>{

        tarjeta.style.opacity="0";
        tarjeta.style.transform="translateY(25px)";

        setTimeout(()=>{

            tarjeta.style.transition=".5s";

            tarjeta.style.opacity="1";

            tarjeta.style.transform="translateY(0)";

        },index*100);

    });

}