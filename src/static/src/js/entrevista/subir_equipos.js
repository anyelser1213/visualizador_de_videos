

//Botones generales
var BotonGuardarTeam = document.getElementById("GuardarTeam");
var BotonAbrirImagenModalTeam = document.getElementById("AbrirImagenModalTeam");

//Padres del modal
var padreInputTeam = document.getElementById("PadreInputTeam");

//Esto son los campos del modal
var InputNombreModalTeam = document.getElementById("inputNameModalTeam");
var InputDescripcionModalTeam = document.getElementById("inputDescripcionModalTeam");
var InputImagenModalTeam = document.getElementById("inputImagenModalTeam");
var textoH5Team = document.getElementById("MensajeNombreTeam");


//console.log("--->",BotonVideos);


//Funciones Nuevas
function GuardarCambiosImagen(){


    
    console.clear();
    console.log("linea 26...Presionaste save changes en el modalTeam");


    //Inputs dentro del modal para crear un video
    var InputImagenModalTeam = document.getElementById("inputImagenModalTeam");
    console.log("Existe: ",InputImagenModalTeam);
    ////////////////////////////////////////////////////////////////////////////////


    
    console.log("Agregando campo de equipo");
    var TrClonar = document.getElementById("divClonarTeam");
    //No hace falta saber el elemento padre en este caso
    //var padre = TrClonar.parentNode;
    var elemento_clon = TrClonar.cloneNode(true);

    //Con esto eliminamos la clase de ocultar
    elemento_clon.classList.remove("oculto");

    console.log("ELEMENTO CLON: ");
    console.log(elemento_clon);

    //Para visualizar los nodos
    console.log("\n\nTodos los nodos: ");
    console.log(elemento_clon.childNodes);
    console.log("\n\n");

//Elementos del primer div
    //div de imgperfil2
    console.log("input imagen donde colocaremos la imagen del usuario")
    console.log(elemento_clon.childNodes[2].childNodes[1].childNodes[1]);

    //div para colocar el mensaje asignado h5
    console.log("h5 mensaje...")
    console.log(elemento_clon.childNodes[4].childNodes[1]);

    //div para colocar el mensaje asignado p
    console.log("p mensaje...")
    console.log(elemento_clon.childNodes[4].childNodes[3]);

    console.log("\n");



    // Ahora tomamos el primer archivo, el cual vamos a previsualizar
    const primerArchivo = InputImagenModalTeam.files[0];

    console.log("\n\nFILES[0]: ",primerArchivo);
    // Ahora tomamos el primer archivo, el cual vamos a previsualizar
    // Lo convertimos a un objeto de tipo objectURL
    const objectURL = URL.createObjectURL(primerArchivo);
    // Y a la fuente de la imagen le ponemos el objectURL
    elemento_clon.childNodes[2].childNodes[1].childNodes[1].src = objectURL;



    
    var tituloH5 = elemento_clon.childNodes[4].childNodes[1];
    tituloH5.textContent = InputNombreModalTeam.value;
    

    //Parafo del div
    var parrafo = elemento_clon.childNodes[4].childNodes[3];
    parrafo.textContent = InputDescripcionModalTeam.value;


    //Con esto clonamos al final
    TrClonar.insertAdjacentElement("afterend", elemento_clon);

    

    //div de los elementos a guardar
    console.log("\n\n(PADRE)Elementos a guardar");
    console.log(elemento_clon.childNodes[6]);


    console.log("IMAGEN:",elemento_clon.childNodes[6].childNodes[1]);
    
    elemento_clon.childNodes[6].childNodes[1].setAttribute("name","imagenPersona");
    elemento_clon.childNodes[6].childNodes[1].files = InputImagenModalTeam.files;
    elemento_clon.childNodes[6].childNodes[1].files[0] = InputImagenModalTeam.files[0];
    //elemento_clon.childNodes[6].childNodes[1].value = InputImagenModalTeam.value;


    console.log("NOMBRE:",elemento_clon.childNodes[6].childNodes[3]);

    elemento_clon.childNodes[6].childNodes[3].setAttribute("name","nombrePersona");
    elemento_clon.childNodes[6].childNodes[3].value = InputNombreModalTeam.value;

    console.log("DESCRIPCION:",elemento_clon.childNodes[6].childNodes[5]);

    elemento_clon.childNodes[6].childNodes[5].setAttribute("name","areaTrabajo");
    elemento_clon.childNodes[6].childNodes[5].value = InputDescripcionModalTeam.value;


     //Limpiamos los campos del modal
     InputNombreModalTeam.value= "";
     InputDescripcionModalTeam.value = "";
     //InputImagenModalTeam.src = "";
     //InputImagenModalTeam.value = "";
     textoH5Team.innerText = "";




    console.log("Padre del input imagen:\n",padreInputTeam);
    padreInputTeam.removeChild(InputImagenModalTeam);


    //<input id="inputVideoModalVideo" class="" type="file" accept="video/*">
    var inputModalNuevoImagen = document.createElement("input");
    inputModalNuevoImagen.setAttribute("id","inputImagenModalTeam");
    inputModalNuevoImagen.setAttribute("class","");
    inputModalNuevoImagen.setAttribute("type","file");
    inputModalNuevoImagen.setAttribute("accept","imagen/*");
    
    //objectURL
    inputModalNuevoImagen.URL = objectURL;

    //AQUI ASIGNAMOS EL EVENTO AL BOTON NUEVO
    inputModalNuevoImagen.addEventListener('change',ImagenSeleccionado);


    //
    //Con esto clonamos al final
    textoH5Team.insertAdjacentElement("beforebegin", inputModalNuevoImagen);

    


};









function ImagenSeleccionado(){

    //Se abre el input de file
    //document.getElementById("id_imagenMarca").click(); 
    //inputVideoSecundarios.click();
    console.log("linea 195 ...Nueva Imagen Seleccionada....");

    console.log("El nombre es: ", this.files[0].name);
    textoH5Team.innerText = "Has elegido : "+this.files[0].name;
    console.log("El textoh5 es: ",textoH5.innerText);



};




BotonAbrirImagenModalTeam.addEventListener('click',function() {

    //Se abre el input de video del modal
    console.log("linea 211...BotonAbrirImagenModalTeam...Aqui abrimos el modal de TEAM...............");
    document.getElementById("inputImagenModalTeam").click(); 
    
    


});




//Este evento es para que se guarde todo
BotonGuardarTeam.addEventListener('click', GuardarCambiosImagen);


//Este evento es para que se abra la seleccion de videos secundarios
inputImagenModalTeam.addEventListener('change', ImagenSeleccionado);












//funcion para guiarte
function AgregarCamposTrabajo(){//Funcion para agregar nuevos campos en la vista

    console.clear();
    console.log("Agregando campos de trabajos");
    var TrClonar = document.getElementById("clonacionTrabajos");
    var padre = TrClonar.parentNode;
    var elemento_clon = TrClonar.cloneNode(true);
    //padre.appendChild(descripcion);
    //padre.appendChild(cantidad);
    //padre.appendChild(costo);
    //Con ChilNodes vamos accediendo a la lista nodos de el elemento elegido
    console.log(elemento_clon.childNodes);

    //Primer inputs(Descripcion)
    InputDescripcion = elemento_clon.childNodes[1].childNodes[0];
    InputDescripcion.value ="";
    //console.log(InputDescripcion);

    //Segundo inputs(Cantidad)
    InputCantidad = elemento_clon.childNodes[3].childNodes[0];
    InputCantidad.value ="";
    //console.log(InputCantidad);

    //Tercer inputs(Costo)
    InputCosto = elemento_clon.childNodes[5].childNodes[1].childNodes[1];
    InputCosto.value ="";
    //console.log(InputCosto);


    var boton = elemento_clon.childNodes[5].childNodes[1].childNodes[3].getElementsByTagName("button")[0];
    var icono = elemento_clon.childNodes[5].childNodes[1].childNodes[3].childNodes[1].getElementsByTagName("i")[0];

    //element.setAtributte
    boton.removeAttribute("disabled");
    boton.setAttribute("class","btn btn-danger btn-flat");
 
    //AQUI ASIGNAMOS LA FUNCION PARA ELIMINAR LOS ELEMENTOS
    boton.addEventListener('click',eliminar);
    //boton.setAttribute("onclick","eliminar(this)");
     
    icono.setAttribute("class","fa fa-minus");
    console.log(boton);
    console.log(icono);
    listaTrabajos.appendChild(elemento_clon);

    //console.log("llegamos aqui");


} 