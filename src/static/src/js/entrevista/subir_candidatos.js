

//Este boton esta dentro del modal
var botonGuardarCandidato = document.getElementById("BotonGuardarCandidato");

//Elemento del modal que vamos a limpiar 
var Div_modal_A_Limpiar = document.getElementById("CuerpoModalCandidato");

//Campos del modal de candidatos para limpiar
var NombreCandidato = document.getElementById("nombreCandidatoPrueba");
var CargoCandidato = document.getElementById("cargoCandidatoPrueba");
var Paso_Proceso_Candidato = document.getElementById("pasoCandidatoPrueba");

//Elemento que siempre clonaremos para 
var Elemento_A_Clonar = document.getElementById("ElementoClonadorCandidato");

//Elemento que siempre clonaremos para 
var TablaPadreCandidatos = document.getElementById("TablaElementosCandidato");

var inputCantidadCandidatos = document.getElementById("CantidadCantidatos");
var CantidadCandidatos = 0;

botonGuardarCandidato.addEventListener('click', function() {


    CantidadCandidatos+=1;
    inputCantidadCandidatos.value = CantidadCandidatos;

    //Se abre el input de file
    console.log("Pasa algo nuevo");
    console.log(this.parentNode);
    console.log(Div_modal_A_Limpiar);
    console.log(Elemento_A_Clonar);


    var elemento_clon = Elemento_A_Clonar.cloneNode(true);
    //Con esto eliminamos la clase de ocultar
    elemento_clon.classList.remove("oculto");

    console.log("ELEMENTO CLON: ");
    elemento_clon.setAttribute("id","");
    console.log(elemento_clon);


    //Para visualizar los nodos
    console.log("\n\nTodos los nodos: ");
    console.log(elemento_clon.childNodes);
    console.log("\n\n");

    console.log("Nodo Base: ",elemento_clon.childNodes[0]);
    
    console.log(elemento_clon.childNodes[7]);


    //Nombre del candidato
    elemento_clon.childNodes[1].childNodes[0].innerHTML = NombreCandidato.value;

    //Posicion del candidato
    elemento_clon.childNodes[3].innerHTML = CargoCandidato.value;

    //Proceso del candidato
    elemento_clon.childNodes[5].innerHTML = Paso_Proceso_Candidato.value;


    //Boton de eliminar
    elemento_clon.childNodes[7].addEventListener("click", BorrarCandidato, false);


    

    //Con esto agregamos el elemento al final de la tabla de candidatos
    TablaPadreCandidatos.appendChild(elemento_clon);
    //Elemento_A_Clonar.insertAdjacentElement("afterend", elemento_clon);


    //Aqui creamos los elementos del input para guardar los datos
    var nombre_candidato_input = document.createElement("input");
    var cargo_candidato_input = document.createElement("input");
    var proceso_candidato_input = document.createElement("input");

    //Aqui agregamos todo lo que necesita los inputs
    nombre_candidato_input.setAttribute("type","text");
    nombre_candidato_input.setAttribute("name","nombre_candidato");
    nombre_candidato_input.setAttribute("class","form-control oculto");
    nombre_candidato_input.setAttribute("id","id_nombre_candidato");
    nombre_candidato_input.value = NombreCandidato.value;

    cargo_candidato_input.setAttribute("type","text");
    cargo_candidato_input.setAttribute("name","cargo_candidato");
    cargo_candidato_input.setAttribute("class","form-control oculto");
    cargo_candidato_input.setAttribute("id","id_cargo_candidato");
    cargo_candidato_input.value = CargoCandidato.value;

    proceso_candidato_input.setAttribute("type","text");
    proceso_candidato_input.setAttribute("name","paso_en_proceso_candidato");
    proceso_candidato_input.setAttribute("class","form-control oculto");
    proceso_candidato_input.setAttribute("id","id_paso_en_proceso_candidato");
    proceso_candidato_input.value = Paso_Proceso_Candidato.value;



    elemento_clon.appendChild(nombre_candidato_input);
    elemento_clon.appendChild(cargo_candidato_input);
    elemento_clon.appendChild(proceso_candidato_input);






    //Para limpiar los campos del modal
    NombreCandidato.value = "";
    CargoCandidato.value = "";
    Paso_Proceso_Candidato.value = "";



    


});


function BorrarCandidato(){


    CantidadCandidatos-=1;
    inputCantidadCandidatos.value = CantidadCandidatos;
    console.log(this);
    console.log("Borramos esto: ",this.parentNode);//con uno solo llegamos a su padre
    this.parentNode.remove();
    //console.log(this.parentNode.parentNode);
    //this.remove();
}