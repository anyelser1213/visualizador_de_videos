
//Botones generales
var BotonGuardarVideos = document.getElementById("GuardarVideo");
var BotonAbrirVideoModal = document.getElementById("AbrirVideoModal");

//Padres del modal
var padreInputVideo = document.getElementById("PadreInputVideo");

//Esto son los campos del modal
var InputNombreModal = document.getElementById("inputNameModalVideo");
var InputDescripcionModal = document.getElementById("inputDescripcionModalVideo");
var inputVideoModal = document.getElementById("inputVideoModalVideo");
var textoH5 = document.getElementById("MensajeNombreVideo");
var Auxiliar_textoH5 = "";


//console.log("--->",BotonVideos);

//Funciones Nuevas
function GuardarCambios(){


    
    console.clear();
    console.log("linea 26...Presionaste save changes en el modal");


    //Inputs dentro del modal para crear un video
    var inputVideoModalVideo = document.getElementById("inputVideoModalVideo");
    console.log("Existe: ",inputVideoModalVideo);
    ////////////////////////////////////////////////////////////////////////////////


    
    console.log("Agregando campo de video");
    var TrClonar = document.getElementById("divClonarVideo");
    //No hace falta saber el elemento padre en este caso
    //var padre = TrClonar.parentNode;
    var elemento_clon = TrClonar.cloneNode(true);

    //Con esto eliminamos la clase de ocultar
    elemento_clon.classList.remove("oculto");


    //console.log("ElementoClon: ",elemento_clon);

    //Para visualizar los nodos
    //console.log("\n\nTodos los nodos: ");
    //console.log(elemento_clon.childNodes);
    //console.log("\n\n");

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
    tituloH5.textContent = inputNameModalVideo.value;
    

    //Parafo del div
    console.log(elemento_clon.childNodes[4].childNodes[3]);
    var parrafo = elemento_clon.childNodes[4].childNodes[3];
    parrafo.textContent = inputDescripcionModalVideo.value;


    //Con esto clonamos al final
    TrClonar.insertAdjacentElement("afterend", elemento_clon);

    


    


     //div de los elementos a guardar
     console.log("\n\n(PADRE)Elementos a guardar");
     console.log(elemento_clon.childNodes[6]);

     console.log("\n\nElementos a guardar, sus hijos");
     console.log(elemento_clon.childNodes[6].childNodes);

     //Para el titulo del video
     elemento_clon.childNodes[6].childNodes[1].setAttribute("name","titulo_video_empresa");
     elemento_clon.childNodes[6].childNodes[1].value = tituloH5.textContent;

     //Para la descripcion del video
     elemento_clon.childNodes[6].childNodes[3].setAttribute("name","descripcion_video_empresa");
     elemento_clon.childNodes[6].childNodes[3].value = parrafo.textContent;

     //Para el video(source)
     elemento_clon.childNodes[6].childNodes[5].setAttribute("name","videos");
     elemento_clon.childNodes[6].childNodes[5].setAttribute("id","id_video");
     
     //elemento_clon.childNodes[5].childNodes[5].value = inputVideoModalVideo.value
     elemento_clon.childNodes[6].childNodes[5].files = inputVideoModalVideo.files;
     elemento_clon.childNodes[6].childNodes[5].files[0] = inputVideoModalVideo.files[0];
     //elemento_clon.childNodes[5].childNodes[5].URL = URL.createObjectURL(inputVideoModalVideo.files[0]);
     //elemento_clon.childNodes[5].childNodes[5];

     console.log("\n\nInput Video: ",elemento_clon.childNodes[6].childNodes[5])
     console.log("\n\nInput Video files: ",elemento_clon.childNodes[6].childNodes[5].files)
     console.log("\n\nInput Video files[0]: ",elemento_clon.childNodes[6].childNodes[5].files[0])    


     //Limpiamos los campos del modal
    InputNombreModal.value= "";
    InputDescripcionModal.value = "";
    //InputVideoModal.value = null;
    textoH5.innerText = "";


    console.log(padreInputVideo);
    padreInputVideo.removeChild(inputVideoModalVideo);


    //<input id="inputVideoModalVideo" class="" type="file" accept="video/*">
    var inputModalNuevoVideo = document.createElement("input");
    inputModalNuevoVideo.setAttribute("id","inputVideoModalVideo");
    inputModalNuevoVideo.setAttribute("class","oculto");
    inputModalNuevoVideo.setAttribute("type","file");
    inputModalNuevoVideo.setAttribute("accept","video/*");
    
    //objectURL
    inputModalNuevoVideo.URL = objectURL;

    //AQUI ASIGNAMOS EL EVENTO AL BOTON NUEVO
    inputModalNuevoVideo.addEventListener('change',VideoSeleccionado);


    //
    //Con esto clonamos al final
    textoH5.insertAdjacentElement("beforebegin", inputModalNuevoVideo);




};









function VideoSeleccionado(){

    //Se abre el input de file
    //document.getElementById("id_imagenMarca").click(); 
    //inputVideoSecundarios.click();
    console.log("linea 195 ...Nuevo Video Seleccionado....");

    console.log("El nombre es: ", this.files[0].name);
    textoH5.innerText = "Has elegido : "+this.files[0].name;
    console.log("El textoh5 es: ",textoH5.innerText);



};




BotonAbrirVideoModal.addEventListener('click',function() {

    //Se abre el input de video del modal
    console.log("linea 211...BotonAbrirVideoModal...Aqui abrimos el modal de video...............");
    document.getElementById("inputVideoModalVideo").click(); 
    
    


});




//Este evento es para que se guarde todo
BotonGuardarVideos.addEventListener('click', GuardarCambios);


//Este evento es para que se abra la seleccion de videos secundarios
inputVideoModal.addEventListener('change', VideoSeleccionado);




