//CREAMOS FUNCIONES PARA GUARDAR LOS VIDEOS DE LAS ETAPAS


//Con esta funcion simplemente abrimos el input del video de las etapas
function abrirInputVideo(){

    
    //console.log("Abrimos el input de video: ",this.parentElement.parentElement);
    console.log("validando aqui en video...",this.dataset.id);
    var input = document.getElementById("inputVideoModalVideo_"+this.dataset.id);
    console.log(input);
    input.click();
};

//CHANGE VIDEO
function AceptarInputVideo(){

    console.clear();
    console.log("Aceptamos el video: ",this);
    console.log("El nombre es: ", this.files[0].name);
    var textoH5 = document.getElementById("MensajeNombreVideo_"+this.dataset.id);
    
    console.log(textoH5);
    textoH5.innerText = "Has elegido : "+this.files[0].name;
    console.log("El textoh5 es: ",textoH5.innerText);
    //this.parentElement.childNodes[3].click();
};


function GuardarVideo(){

    console.clear();
    console.log("linea 26...Presionaste save changes en el modal");
    console.log("Guardamos toda la informacion del video: ",this);

    //Inputs dentro del modal para crear un video
    var inputVideoModalVideo = document.getElementById("inputVideoModalVideo_"+this.dataset.id);
    console.log("Existe: ",inputVideoModalVideo);

    ////////////////////////////////////////////////////////////////////
    console.log("Agregando campo de video");
    var TrClonar = document.getElementById("divClonarVideo_"+this.dataset.id);
    //No hace falta saber el elemento padre en este caso
    //var padre = TrClonar.parentNode;
    var elemento_clon = TrClonar.cloneNode(true);

    //Con esto eliminamos la clase de ocultar
    elemento_clon.classList.remove("oculto");


    console.log("ElementoClon: ",elemento_clon);



    //Elementos del primer div
    //div de imgperfil2
    console.log(elemento_clon.childNodes[2].childNodes[1]);

    //video
    //console.log(elemento_clon.childNodes[1].childNodes[1].childNodes[1]);

    //source
    console.log("\nsource:\n")
    console.log(elemento_clon.childNodes[2].childNodes[1].childNodes[1].childNodes[1]);

    var source = elemento_clon.childNodes[2].childNodes[1].childNodes[1].childNodes[1];
    console.log("VIDEO DEL MODAL: ",inputVideoModalVideo);
    console.log("VIDEO(value) DEL MODAL: ",inputVideoModalVideo.value);
    console.log("Files DEL video: ",inputVideoModalVideo.files);
    console.log("\n\n")

    // Ahora tomamos el primer archivo, el cual vamos a previsualizar
    const primerArchivo = inputVideoModalVideo.files[0];

    console.log("\n\nFILES[0]: ",primerArchivo);
    //console.log("\n\nFILES[0].name: ",primerArchivo.name);


    //Auxiliar_textoH5 = primerArchivo.name;

    // Lo convertimos a un objeto de tipo objectURL
    const objectURL = URL.createObjectURL(primerArchivo);
    console.log("\n\nObjectURL: ",objectURL);
    //prompt("Probando");
    // Y a la fuente del video le ponemos el objectURL
    source.src = objectURL;

    console.log("\n\n");

    //Elementos del segundo div
    //div de col-auto p-1 text-center postion
    console.log(elemento_clon.childNodes[4]);
    console.log(elemento_clon.childNodes[4].childNodes);

    //H5 del div
    console.log("H5 DEL VIDEO:");
    console.log("h5 del video:",elemento_clon.childNodes[4].childNodes[1]);
    
    var tituloH5 = elemento_clon.childNodes[4].childNodes[1];
    var inputNameModalVideo = document.getElementById("inputNameModalVideo_"+this.dataset.id);
    tituloH5.textContent = inputNameModalVideo.value;

    //Parafo del div
    console.log(elemento_clon.childNodes[4].childNodes[3]);
    var parrafo = elemento_clon.childNodes[4].childNodes[3];
    var InputDescripcionModalVideo = document.getElementById("inputDescripcionModalVideo_"+this.dataset.id);
    parrafo.textContent = InputDescripcionModalVideo.value;


    //Con esto clonamos al final
    TrClonar.insertAdjacentElement("afterend", elemento_clon);



    //div de los elementos a guardar
    console.log("\n\n(PADRE)Elementos a guardar");
    console.log(elemento_clon.childNodes[6]);

    console.log("\n\nElementos a guardar, sus hijos");
    console.log(elemento_clon.childNodes[6].childNodes);

    //Para el titulo del video
    elemento_clon.childNodes[6].childNodes[1].setAttribute("name","id_titulo_video_entrevista_etapa_"+this.dataset.id);
    elemento_clon.childNodes[6].childNodes[1].value = tituloH5.textContent;

    //Para la descripcion del video
    elemento_clon.childNodes[6].childNodes[3].setAttribute("name","id_descripcion_video_entrevista_etapa_"+this.dataset.id);
    elemento_clon.childNodes[6].childNodes[3].value = parrafo.textContent;

    //Para el video(source)
    elemento_clon.childNodes[6].childNodes[5].setAttribute("name","id_videoPrimario_etapa_"+this.dataset.id);
    elemento_clon.childNodes[6].childNodes[5].setAttribute("id","id_videoPrimario_etapa_"+this.dataset.id);
    
    //elemento_clon.childNodes[5].childNodes[5].value = inputVideoModalVideo.value
    elemento_clon.childNodes[6].childNodes[5].files = inputVideoModalVideo.files;
    elemento_clon.childNodes[6].childNodes[5].files[0] = inputVideoModalVideo.files[0];
    //elemento_clon.childNodes[5].childNodes[5].URL = URL.createObjectURL(inputVideoModalVideo.files[0]);
    //elemento_clon.childNodes[5].childNodes[5];

    console.log("\n\nInput Video: ",elemento_clon.childNodes[6].childNodes[5])
    console.log("\n\nInput Video files: ",elemento_clon.childNodes[6].childNodes[5].files)
    console.log("\n\nInput Video files[0]: ",elemento_clon.childNodes[6].childNodes[5].files[0]) 

    //Limpiamos los campos del modal
    inputNameModalVideo.value= "";
    InputDescripcionModalVideo.value = "";
    //InputVideoModal.value = null;
    var textoH5 = document.getElementById("MensajeNombreVideo_"+this.dataset.id);
    textoH5.innerText = "";
    //tituloH5.innerText = "asdscsasd";

    //Padres del modal
    var padreInputVideo = document.getElementById("PadreInputVideo_"+this.dataset.id);
    console.log(padreInputVideo);
    padreInputVideo.removeChild(inputVideoModalVideo);


    //<input id="inputVideoModalVideo" class="" type="file" accept="video/*">
    var inputModalNuevoVideo = document.createElement("input");
    inputModalNuevoVideo.setAttribute("id","inputVideoModalVideo_"+this.dataset.id);
    inputModalNuevoVideo.setAttribute("data-id",this.dataset.id);
    inputModalNuevoVideo.setAttribute("class","oculto");
    inputModalNuevoVideo.setAttribute("type","file");
    inputModalNuevoVideo.setAttribute("accept","video/*");

    //objectURL
    inputModalNuevoVideo.URL = objectURL;

    //AQUI ASIGNAMOS EL EVENTO AL BOTON NUEVO
    inputModalNuevoVideo.addEventListener('change',AceptarInputVideo);


    //Con esto clonamos al final
    textoH5.insertAdjacentElement("beforebegin", inputModalNuevoVideo);

    
    console.log("\n\n\n");







    //Cuerpo del modal
    //console.log(this.parentElement.parentElement.childNodes[3].childNodes[1].childNodes[1].childNodes);
    //this.parentElement.childNodes.click();
};