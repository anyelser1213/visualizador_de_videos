//CREAMOS FUNCIONES PARA GUARDAR LOS VIDEOS DE LAS ETAPAS


//Con esta funcion simplemente abrimos el input del video de las etapas
function abrirInputEquipo(){

    
    //console.log("Abrimos el input de video: ",this.parentElement.parentElement);
    console.log("validando aqui",this);
    var input = document.getElementById("inputImagenModalTeam_"+this.dataset.id);
    console.log(input);
    input.click();
};


//CHANGE VIDEO
function AceptarInputEquipo(){

    console.clear();
    console.log("Aceptamos el Equipo: --",this,"-- tiene el data-id:",this.dataset.id);
    console.log("El nombre es: ", this.files[0].name);
    var textoH5 = document.getElementById("MensajeNombreTeam_"+this.dataset.id);
    
    console.log(textoH5);
    textoH5.innerText = "Has elegido : "+this.files[0].name;
    console.log("El textoh5 es: ",textoH5.innerText);
    //this.parentElement.childNodes[3].click();
};



function GuardarEquipo(){

    console.clear();
    console.log("linea 33...Presionaste save changes en el modal");
    console.log("Guardamos toda la informacion del equipo: ",this);

    //Inputs dentro del modal para crear un video
    var inputImagenModalEquipo = document.getElementById("inputImagenModalTeam_"+this.dataset.id);
    console.log("Existe: ",inputImagenModalEquipo);


    console.log("Agregando campo de equipo");
    var TrClonar = document.getElementById("divClonarTeam_"+this.dataset.id);
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
    const primerArchivo = inputImagenModalEquipo.files[0];

    console.log("\n\nFILES[0]: ",primerArchivo);
    // Ahora tomamos el primer archivo, el cual vamos a previsualizar
    // Lo convertimos a un objeto de tipo objectURL
    const objectURL = URL.createObjectURL(primerArchivo);
    // Y a la fuente de la imagen le ponemos el objectURL
    elemento_clon.childNodes[2].childNodes[1].childNodes[1].src = objectURL;



    var InputNombreModalTeam = document.getElementById("inputNameModalTeam_"+this.dataset.id);
    
    var tituloH5 = elemento_clon.childNodes[4].childNodes[1];
    tituloH5.textContent = InputNombreModalTeam.value;
    

    //Parafo del div
    var parrafo = elemento_clon.childNodes[4].childNodes[3];
    var InputDescripcionModalTeam = document.getElementById("inputDescripcionModalTeam_"+this.dataset.id);
    parrafo.textContent = InputDescripcionModalTeam.value;

    //Con esto clonamos al final
    TrClonar.insertAdjacentElement("afterend", elemento_clon);


    //div de los elementos a guardar
    console.log("\n\n(PADRE)Elementos a guardar");
    console.log(elemento_clon.childNodes[6]);


    console.log("IMAGEN:",elemento_clon.childNodes[6].childNodes[1]);
    
    elemento_clon.childNodes[6].childNodes[1].setAttribute("name","imagenPersona_"+this.dataset.id);
    elemento_clon.childNodes[6].childNodes[1].files = inputImagenModalEquipo.files;
    elemento_clon.childNodes[6].childNodes[1].files[0] = inputImagenModalEquipo.files[0];
    //elemento_clon.childNodes[6].childNodes[1].value = InputImagenModalTeam.value;


    console.log("NOMBRE:",elemento_clon.childNodes[6].childNodes[3]);

    elemento_clon.childNodes[6].childNodes[3].setAttribute("name","nombrePersona_"+this.dataset.id);
    elemento_clon.childNodes[6].childNodes[3].value = InputNombreModalTeam.value;

    console.log("DESCRIPCION:",elemento_clon.childNodes[6].childNodes[5]);

    elemento_clon.childNodes[6].childNodes[5].setAttribute("name","areaTrabajo_"+this.dataset.id);
    elemento_clon.childNodes[6].childNodes[5].value = InputDescripcionModalTeam.value;
    

    //Limpiamos los campos del modal
    InputNombreModalTeam.value= "";
    InputDescripcionModalTeam.value = "";
    //InputImagenModalTeam.src = "";
    //InputImagenModalTeam.value = "";
    var textoH5Team = document.getElementById("MensajeNombreTeam_"+this.dataset.id);
    textoH5Team.innerText = "";


    var padreInputTeam = document.getElementById("PadreInputTeam_"+this.dataset.id);
    console.log("Padre del input imagen:\n",padreInputTeam);
    padreInputTeam.removeChild(inputImagenModalEquipo);


    //<input id="inputVideoModalVideo" class="" type="file" accept="video/*">
    var inputModalNuevoImagen = document.createElement("input");
    inputModalNuevoImagen.setAttribute("id","inputImagenModalTeam_"+this.dataset.id);
    inputModalNuevoImagen.setAttribute("data-id",this.dataset.id);
    inputModalNuevoImagen.setAttribute("class","");
    inputModalNuevoImagen.setAttribute("type","file");
    inputModalNuevoImagen.setAttribute("accept","imagen/*");

    //objectURL
    inputModalNuevoImagen.URL = objectURL;

    //AQUI ASIGNAMOS EL EVENTO AL BOTON NUEVO
    inputModalNuevoImagen.addEventListener('change',AceptarInputEquipo);
    //Con esto clonamos al final
    textoH5Team.insertAdjacentElement("beforebegin", inputModalNuevoImagen);








};