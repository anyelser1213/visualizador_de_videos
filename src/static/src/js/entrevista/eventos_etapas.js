



function BotonDocumento(){

    console.log("Selecionado: ",this.parentElement.childNodes);
    this.parentElement.childNodes[3].click();
};


//Variables

var botonDocumento = document.getElementById("DocumentoBotonEtapa_1");

var botonVideoModal = document.getElementById("AbrirVideoModal_1");
var inputVideoModal = document.getElementById("inputVideoModalVideo_1");
var GuardarVideo_1 = document.getElementById("GuardarVideo_1");

var botonEquipoModal_1 = document.getElementById("AbrirImagenModalTeam_1");
var inputEquipoModal_1 = document.getElementById("inputImagenModalTeam_1");
var GuardarEquipo_1 = document.getElementById("GuardarTeam_1");






//Eventos para la etapa 1
botonDocumento.addEventListener("click",BotonDocumento);

botonVideoModal.addEventListener("click",abrirInputVideo);
inputVideoModal.addEventListener("change",AceptarInputVideo);
GuardarVideo_1.addEventListener("click",GuardarVideo);

botonEquipoModal_1.addEventListener("click",abrirInputEquipo);
inputEquipoModal_1.addEventListener("change",AceptarInputEquipo);
GuardarEquipo_1.addEventListener("click",GuardarEquipo);




    //Se abre el input de file
    //document.getElementById("id_documento").click(); 
    
