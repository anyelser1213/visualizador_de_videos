

//Botones generales
var BotonAgregarEntrevista = document.getElementById("botonAgregarEntrevista");


//variables input
var inputCantidadDeEtapas = document.getElementById("CantidadEtapasActualmente");


//Variable para editar los campos
var CantidadEtapas = 1;

BotonAgregarEntrevista.addEventListener("click",function(){


    CantidadEtapas+=1;
    inputCantidadDeEtapas.value=CantidadEtapas;
    console.log("Probando la clonacion de etapa");

    //Elemento para posicionar las cosas
    var lugarParaColocarLasEtapas = document.getElementById("PosicionarEtapasNuevas");

    var TrClonar = document.getElementById("DivClonarEntrevista");
    //No hace falta saber el elemento padre en este caso
    //var padre = TrClonar.parentNode;
    var elemento_clon = TrClonar.cloneNode(true);

    //Con esto eliminamos la clase de ocultar
    elemento_clon.classList.remove("oculto");


    //Todos los elementos
    console.log(elemento_clon.childNodes);
    
    elemento_clon.childNodes[2].childNodes[1].childNodes[1].childNodes[1].innerHTML = "Background Information "+CantidadEtapas;
    console.log("Titulo de la etapa: ",elemento_clon.childNodes[2].childNodes[1].childNodes[1].childNodes[1]);
    //console.log("  ",elemento_clon.childNodes[7].childNodes);

    console.log("Cuadro 1: ",elemento_clon.childNodes[7].childNodes[1].childNodes[1].childNodes);
    //console.log("Cuadro 2: ",elemento_clon.childNodes[7].childNodes[3].childNodes[1].childNodes);

    console.log("\n\n\n\n\n\n");

    //Numero de la etapa y cambiamos su atributo name y id
    elemento_clon.childNodes[7].childNodes[1].childNodes[1].childNodes[1].childNodes[3].setAttribute("name","numeroEtapa_"+CantidadEtapas);
    elemento_clon.childNodes[7].childNodes[1].childNodes[1].childNodes[1].childNodes[3].setAttribute("id","NumeroEtapa_"+CantidadEtapas);
    elemento_clon.childNodes[7].childNodes[1].childNodes[1].childNodes[1].childNodes[3].setAttribute("value",CantidadEtapas);
    console.log("input del numero de la etapa:",elemento_clon.childNodes[7].childNodes[1].childNodes[1].childNodes[1].childNodes[3]);




    console.log("\n\n\n\n\n\n");

    //nombre de la etapa y cambiando su atributo name y id
    elemento_clon.childNodes[7].childNodes[1].childNodes[1].childNodes[3].childNodes[3].setAttribute("name","nombreEtapa_"+CantidadEtapas);
    elemento_clon.childNodes[7].childNodes[1].childNodes[1].childNodes[3].childNodes[3].setAttribute("id","NombreEtapa_"+CantidadEtapas);
    console.log("\ninput del nombre de la etapa:",elemento_clon.childNodes[7].childNodes[1].childNodes[1].childNodes[3].childNodes[3]);



    console.log("\n\n\n\n\n\n");

    //nombre del sitioweb de la etapa y cambiando su atributo name
    elemento_clon.childNodes[7].childNodes[1].childNodes[1].childNodes[5].childNodes[3].setAttribute("name","sitioWebEtapa_"+CantidadEtapas);
    elemento_clon.childNodes[7].childNodes[1].childNodes[1].childNodes[5].childNodes[3].setAttribute("id","SitioWebEtapa_"+CantidadEtapas);
    console.log("input del URL DEL SITIO WEB:",elemento_clon.childNodes[7].childNodes[1].childNodes[1].childNodes[5].childNodes[3]);

    console.log("\n\n\n\n--------------------------------------------\n")
///// AQUI ES PARA MODIFICAR INFORMACION DEL SEGUNDO CUADRO /////////////////////

    console.log("\n\n\n\n\n\n");
    console.log("cuadro 2: ",elemento_clon.childNodes[7].childNodes[3].childNodes[1].childNodes[3].childNodes);


    console.log("\n\n\n\n\n\n");


    elemento_clon.childNodes[7].childNodes[3].childNodes[1].childNodes[3].childNodes[1].setAttribute("name","documentoBotonEtapa_"+CantidadEtapas);
    elemento_clon.childNodes[7].childNodes[3].childNodes[1].childNodes[3].childNodes[1].setAttribute("id","DocumentoBotonEtapa_"+CantidadEtapas);
    //Agregamos evento al boton de documento
    elemento_clon.childNodes[7].childNodes[3].childNodes[1].childNodes[3].childNodes[1].addEventListener("click",BotonDocumento);
    
    
    console.log("CAMPO BOTON SELECIONAR DOCUMENTO: ",elemento_clon.childNodes[7].childNodes[3].childNodes[1].childNodes[3].childNodes[1]);


    console.log("\n\n\n\n\n\n");


    elemento_clon.childNodes[7].childNodes[3].childNodes[1].childNodes[3].childNodes[3].setAttribute("name","documentoEtapa_"+CantidadEtapas);
    elemento_clon.childNodes[7].childNodes[3].childNodes[1].childNodes[3].childNodes[3].setAttribute("id","DocumentoEtapa_"+CantidadEtapas);
    console.log("CAMPO DOCUMENTO: ",elemento_clon.childNodes[7].childNodes[3].childNodes[1].childNodes[3].childNodes[3]);


    console.log("\n\n\n\n\n\n");


    //elemento_clon.childNodes[7].childNodes[3].childNodes[1].childNodes[3].childNodes[3].setAttribute("name","tipoEvaluacionEtapa_"+CantidadEtapas);
    //elemento_clon.childNodes[7].childNodes[3].childNodes[1].childNodes[3].childNodes[3].setAttribute("id","TipoEvaluacionEtapa_"+CantidadEtapas);
    console.log("CAMPO TYPE EVALUACION: ",elemento_clon.childNodes[7].childNodes[3].childNodes[1].childNodes[3].childNodes[5]);



    console.log("\n\n\n\n\n\n");
    console.log("CAMPO ADD URL: ",elemento_clon.childNodes[7].childNodes[3].childNodes[1].childNodes[3].childNodes[9].childNodes[1]);
    
    elemento_clon.childNodes[7].childNodes[3].childNodes[1].childNodes[3].childNodes[9].childNodes[1].setAttribute("name","urlEtapa_"+CantidadEtapas);
    elemento_clon.childNodes[7].childNodes[3].childNodes[1].childNodes[3].childNodes[9].childNodes[1].setAttribute("id","UrlEtapa_"+CantidadEtapas);
    console.log("id de url: ", elemento_clon.childNodes[7].childNodes[3].childNodes[1].childNodes[3].childNodes[9].childNodes[1].id)






///////////////////////////////////////////////////////////////////////////////////////////////
    console.log("\n\n\n\n-----------------VIDEOS---------------------------\n")
///// AQUI ES PARA MODIFICAR INFORMACION DEL TERCER CUADRO(DE LOS VIDEOS) /////////////////////




    console.log("\n\n\n\n\n\n");
    console.log("CUADROS DE VIDEO Y EQUIPOS: ",elemento_clon.childNodes[11].childNodes);

    console.log("\n\n\n\n\n\n");
    console.log("CUADRO DE LOS VIDEOS: ",elemento_clon.childNodes[11].childNodes[1].childNodes);


    console.log("\n\n\n\n\n\n");
    console.log("CUADRO DE LOS VIDEOS(MODAL)[3]: ",elemento_clon.childNodes[11].childNodes[1].childNodes[3].childNodes);
    console.log("CUADRO DE LOS VIDEOS(MODAL)[3][1]: ",elemento_clon.childNodes[11].childNodes[1].childNodes[3].childNodes[1].childNodes);

    elemento_clon.childNodes[11].childNodes[1].childNodes[3].childNodes[1].childNodes[1].setAttribute("data-bs-target","#ModalVideoClonar_"+CantidadEtapas);
    console.log("CUADRO DE LOS VIDEOS(MODAL BOTON)[3][1][1]: ",elemento_clon.childNodes[11].childNodes[1].childNodes[3].childNodes[1].childNodes[1]);
    console.log("\n\n\n\n\n\n");

    console.log("CUADRO DE LOS VIDEOS(MODAL COMPLETO)[3][1][7]: ",elemento_clon.childNodes[11].childNodes[1].childNodes[3].childNodes[1].childNodes[7]);
    elemento_clon.childNodes[11].childNodes[1].childNodes[3].childNodes[1].childNodes[7].setAttribute("id","ModalVideoClonar_"+CantidadEtapas);
    console.log("\n\n\n\n\n\n");


    //Aqui modificamos el HEADER de el modal de video
    elemento_clon.childNodes[11].childNodes[1].childNodes[3].childNodes[1].childNodes[7].childNodes[1].childNodes[1].childNodes[1].childNodes[1].setAttribute("id","ModalVideoClonar_"+CantidadEtapas+"Label")
    elemento_clon.childNodes[11].childNodes[1].childNodes[3].childNodes[1].childNodes[7].childNodes[1].childNodes[1].childNodes[1].childNodes[1].innerHTML="Add Video "+CantidadEtapas;
    console.log("CUADRO DE LOS VIDEOS(MODAL HEADER)[3][1][7][1][1][1][1]: ",elemento_clon.childNodes[11].childNodes[1].childNodes[3].childNodes[1].childNodes[7].childNodes[1].childNodes[1].childNodes[1].childNodes[1]);
    console.log("\n\n\n\n\n\n");

    console.log("\n\n\n\n\n\n");
    console.log("CUADRO DE LOS VIDEOS(MODAL BODY)[3][1][7][1][1][3][1][1]: ",elemento_clon.childNodes[11].childNodes[1].childNodes[3].childNodes[1].childNodes[7].childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[1].childNodes);
    
    console.log("\n\n\n\n\n\n");

    elemento_clon.childNodes[11].childNodes[1].childNodes[3].childNodes[1].childNodes[7].childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[1].childNodes[1].childNodes[1].setAttribute("for","inputNameModalVideo_"+CantidadEtapas);
    elemento_clon.childNodes[11].childNodes[1].childNodes[3].childNodes[1].childNodes[7].childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[1].childNodes[1].childNodes[3].setAttribute("id","inputNameModalVideo_"+CantidadEtapas);
    console.log("CUADRO DE LOS VIDEOS(MODAL BODY-NOMBRE)[3][1][7][1][1][3][1][1]: ",elemento_clon.childNodes[11].childNodes[1].childNodes[3].childNodes[1].childNodes[7].childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[1].childNodes[1].childNodes);
    

    console.log("\n\n\n\n\n\n");

    elemento_clon.childNodes[11].childNodes[1].childNodes[3].childNodes[1].childNodes[7].childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[1].childNodes[3].childNodes[1].setAttribute("for","inputDescripcionModalVideo_"+CantidadEtapas);
    elemento_clon.childNodes[11].childNodes[1].childNodes[3].childNodes[1].childNodes[7].childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[1].childNodes[3].childNodes[3].setAttribute("id","inputDescripcionModalVideo_"+CantidadEtapas);
    console.log("CUADRO DE LOS VIDEOS(MODAL BODY-DESCRIPCION)[3][1][7][1][1][3][1][3]: ",elemento_clon.childNodes[11].childNodes[1].childNodes[3].childNodes[1].childNodes[7].childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[1].childNodes[3].childNodes);
    

    console.log("\n\n\n\n\n\n");

    
    elemento_clon.childNodes[11].childNodes[1].childNodes[3].childNodes[1].childNodes[7].childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[1].childNodes[5].setAttribute("id","PadreInputVideo_"+CantidadEtapas);
    console.log("CUADRO DE LOS VIDEOS(MODAL BODY-VIDEO-PADRE_INPUT)[3][1][7][1][1][3][1][5]: ",elemento_clon.childNodes[11].childNodes[1].childNodes[3].childNodes[1].childNodes[7].childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[1].childNodes[5]);
    

    console.log("\n\n\n\n\n\n");
    //elemento_clon.childNodes[11].childNodes[1].childNodes[3].childNodes[1].childNodes[7].childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[1].childNodes[5].childNodes[1].setAttribute("for","inputDescripcionModalVideo_"+CantidadEtapas);
    //elemento_clon.childNodes[11].childNodes[1].childNodes[3].childNodes[1].childNodes[7].childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[1].childNodes[5].childNodes[3].setAttribute("id","inputDescripcionModalVideo_"+CantidadEtapas);
    console.log("CUADRO DE LOS VIDEOS(MODAL BODY-VIDEO)[3][1][7][1][1][3][1][5]: ",elemento_clon.childNodes[11].childNodes[1].childNodes[3].childNodes[1].childNodes[7].childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[1].childNodes[5].childNodes);
    console.log("\n\n\n\n\n\n");

    elemento_clon.childNodes[11].childNodes[1].childNodes[3].childNodes[1].childNodes[7].childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[1].childNodes[5].childNodes[1].setAttribute("id","AbrirVideoModal_"+CantidadEtapas);
    
    //Asignamos evento para abrir el input de video
    botonVideo = elemento_clon.childNodes[11].childNodes[1].childNodes[3].childNodes[1].childNodes[7].childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[1].childNodes[5].childNodes[1];
    
    console.log("boton para activar el input de video: ",botonVideo);
    botonVideo.addEventListener("click",abrirInputVideo);
    botonVideo.setAttribute("data-id",CantidadEtapas);
    
    console.log("-----",elemento_clon.childNodes[11].childNodes[1].childNodes[3].childNodes[1].childNodes[7].childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[1].childNodes[5].childNodes[1]);
    
    console.log("CUADRO DE LOS VIDEOS(MODAL BODY-VIDEO-BOTON)[3][1][7][1][1][3][1][5][1]: ",elemento_clon.childNodes[11].childNodes[1].childNodes[3].childNodes[1].childNodes[7].childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[1].childNodes[5].childNodes[1]);
    console.log("\n\n\n\n\n\n");


    elemento_clon.childNodes[11].childNodes[1].childNodes[3].childNodes[1].childNodes[7].childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[1].childNodes[5].childNodes[3].setAttribute("id","inputVideoModalVideo_"+CantidadEtapas);
    elemento_clon.childNodes[11].childNodes[1].childNodes[3].childNodes[1].childNodes[7].childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[1].childNodes[5].childNodes[3].setAttribute("data-id",CantidadEtapas);
    //Asignamos evento para guardar el input de video
    elemento_clon.childNodes[11].childNodes[1].childNodes[3].childNodes[1].childNodes[7].childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[1].childNodes[5].childNodes[3].addEventListener("change",AceptarInputVideo);
    
    console.log("CUADRO DE LOS VIDEOS(MODAL BODY-VIDEO-INPUT)[3][1][7][1][1][3][1][5][3]: ",elemento_clon.childNodes[11].childNodes[1].childNodes[3].childNodes[1].childNodes[7].childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[1].childNodes[5].childNodes[3]);
    console.log("\n\n\n\n\n\n");


    elemento_clon.childNodes[11].childNodes[1].childNodes[3].childNodes[1].childNodes[7].childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[1].childNodes[5].childNodes[5].setAttribute("id","MensajeNombreVideo_"+CantidadEtapas);
    console.log("CUADRO DE LOS VIDEOS(MODAL BODY-VIDEO-H5)[3][1][7][1][1][3][1][5][5]: ",elemento_clon.childNodes[11].childNodes[1].childNodes[3].childNodes[1].childNodes[7].childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[1].childNodes[5].childNodes[5]);
    console.log("\n\n\n\n\n\n");


    console.log("CUADRO DE LOS VIDEOS(MODAL FOOTER)[3][1][7][1][1][5]: ",elemento_clon.childNodes[11].childNodes[1].childNodes[3].childNodes[1].childNodes[7].childNodes[1].childNodes[1].childNodes[5].childNodes);
    elemento_clon.childNodes[11].childNodes[1].childNodes[3].childNodes[1].childNodes[7].childNodes[1].childNodes[1].childNodes[5].childNodes[3].setAttribute("id","GuardarVideo_"+CantidadEtapas);
    elemento_clon.childNodes[11].childNodes[1].childNodes[3].childNodes[1].childNodes[7].childNodes[1].childNodes[1].childNodes[5].childNodes[3].setAttribute("data-id",CantidadEtapas);

    //Asignamos evento para guardar todo referente al video
    elemento_clon.childNodes[11].childNodes[1].childNodes[3].childNodes[1].childNodes[7].childNodes[1].childNodes[1].childNodes[5].childNodes[3].addEventListener("click",GuardarVideo);
    console.log("CUADRO DE LOS VIDEOS(MODAL FOOTER-BOTONGUARDAR)[3][1][7][1][1][5][3]: ",elemento_clon.childNodes[11].childNodes[1].childNodes[3].childNodes[1].childNodes[7].childNodes[1].childNodes[1].childNodes[5].childNodes[3]);
    console.log("\n\n\n\n\n\n");


    console.log("\n\n\n\n\n\n");
    elemento_clon.childNodes[11].childNodes[1].childNodes[6].setAttribute("id","divClonarVideo_"+CantidadEtapas);
    console.log("CUADRO DE LOS VIDEOS(CLONACION)[11][1][6]: ",elemento_clon.childNodes[11].childNodes[1].childNodes[6].childNodes);
    console.log("CUADRO DE LOS VIDEOS(CLONACION)[11][1][6]: ",elemento_clon.childNodes[11].childNodes[1].childNodes[6]);

    console.log("CUADRO DE LOS VIDEOS(CLONACION-VIDEO)[11][1][6][2][1][1]: ",elemento_clon.childNodes[11].childNodes[1].childNodes[6].childNodes[2].childNodes[1].childNodes[1]);
    console.log("CUADRO DE LOS VIDEOS(CLONACION-VIDEO-SOURCE)[11][1][6][2][1][1][1]: ",elemento_clon.childNodes[11].childNodes[1].childNodes[6].childNodes[2].childNodes[1].childNodes[1].childNodes[1]);

    console.log("\n\n\n\n\n\n");
    console.log("\n\n\n\n\n\n");

    console.log("CUADRO DE LOS VIDEOS(CLONACION-TEXTO)[11][1][6][4]: ",elemento_clon.childNodes[11].childNodes[1].childNodes[6].childNodes[4].childNodes);
    console.log("CUADRO DE LOS VIDEOS(CLONACION-TEXTO-H5)[11][1][6][4][1]: ",elemento_clon.childNodes[11].childNodes[1].childNodes[6].childNodes[4].childNodes[1]);
    console.log("CUADRO DE LOS VIDEOS(CLONACION-TEXTO-P)[11][1][6][4][3]: ",elemento_clon.childNodes[11].childNodes[1].childNodes[6].childNodes[4].childNodes[3]);


    console.log("\n\n\n\n\n\n");
    console.log("\n\n\n\n\n\n");
    elemento_clon.childNodes[11].childNodes[1].childNodes[6].childNodes[6].setAttribute("id","elementosAGuardar_"+CantidadEtapas);
    console.log("CUADRO DE LOS VIDEOS(CLONACION-INPUTS)[11][1][6]: ",elemento_clon.childNodes[11].childNodes[1].childNodes[6].childNodes[6]);
    console.log("CUADRO DE LOS VIDEOS(CLONACION-INPUTS)[11][1][6]: ",elemento_clon.childNodes[11].childNodes[1].childNodes[6].childNodes[6].childNodes);
    
    elemento_clon.childNodes[11].childNodes[1].childNodes[6].childNodes[6].childNodes[1].setAttribute("id","id_titulo_video_entrevista_etapa_"+CantidadEtapas);
    console.log("CUADRO DE LOS VIDEOS(CLONACION-INPUTS-TITULO)[11][1][6][1]: ",elemento_clon.childNodes[11].childNodes[1].childNodes[6].childNodes[6].childNodes[1]);

    elemento_clon.childNodes[11].childNodes[1].childNodes[6].childNodes[6].childNodes[3].setAttribute("id","id_descripcion_video_entrevista_etapa_"+CantidadEtapas);
    console.log("CUADRO DE LOS VIDEOS(CLONACION-INPUTS-DESCRIPCION)[11][1][6][3]: ",elemento_clon.childNodes[11].childNodes[1].childNodes[6].childNodes[6].childNodes[3]);
    
    elemento_clon.childNodes[11].childNodes[1].childNodes[6].childNodes[6].childNodes[5].setAttribute("id","id_videoPrimario_etapa_"+CantidadEtapas);
    console.log("CUADRO DE LOS VIDEOS(CLONACION-INPUTS-VIDEO)[11][1][6][5]: ",elemento_clon.childNodes[11].childNodes[1].childNodes[6].childNodes[6].childNodes[5]);




////////////////////////////////////////////////////////////////////////////////////////////////
    console.log("\n\n\n\n-----------------EQUIPO---------------------------\n")
///// AQUI ES PARA MODIFICAR INFORMACION DEL CUARTO CUADRO(DE LOS EQUIPOS) /////////////////////

    console.log("\n\n\n\n\n\n");
    console.log("CUADROS DE EQUIPOS: ",elemento_clon.childNodes[14].childNodes);

    console.log("\n\n\n\n\n\n");
    console.log("CUADRO DE LOS EQUIPOS: ",elemento_clon.childNodes[14].childNodes[1].childNodes);
    console.log("CUADRO DE LOS EQUIPOS(MODAL)[14][1][5][1][1]: ",elemento_clon.childNodes[14].childNodes[1].childNodes[5].childNodes[1].childNodes[1].childNodes);


    console.log("\n\n\n\n\n\n");
    elemento_clon.childNodes[14].childNodes[1].childNodes[1].childNodes[1].childNodes[1].childNodes[1].setAttribute("data-bs-target","#ModalTeamClonar_"+CantidadEtapas);
    console.log("CUADRO DE LOS EQUIPOS(BOTON-MODAL)[14][1][1][1][1][1]: ",elemento_clon.childNodes[14].childNodes[1].childNodes[1].childNodes[1].childNodes[1].childNodes[1]);
    

    console.log("\n\n\n\n\n\n");
    elemento_clon.childNodes[14].childNodes[1].childNodes[5].setAttribute("id","ModalTeamClonar_"+CantidadEtapas);
    console.log("CUADRO DE LOS EQUIPOS(CAJA-MODAL)[14][1][5]: ",elemento_clon.childNodes[14].childNodes[1].childNodes[5]);
    

    console.log("\n\n\n\n\n\n");
    elemento_clon.childNodes[14].childNodes[1].childNodes[5].childNodes[1].childNodes[1].childNodes[1].childNodes[1].innerHTML= "Add Team "+CantidadEtapas;
    elemento_clon.childNodes[14].childNodes[1].childNodes[5].childNodes[1].childNodes[1].childNodes[1].childNodes[1].setAttribute("id","ModalTeamClonarLabel_"+CantidadEtapas);
    console.log("CUADRO DE LOS EQUIPOS(MODAL-HEADER)[14][1][5][1][1][1][1]: ",elemento_clon.childNodes[14].childNodes[1].childNodes[5].childNodes[1].childNodes[1].childNodes[1].childNodes[1]);
    

    console.log("\n\n\n\n\n\n");
    console.log("CUADRO DE LOS EQUIPOS(MODAL-BODY)[14][1][5][1][1][3][1][1]: ",elemento_clon.childNodes[14].childNodes[1].childNodes[5].childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[1].childNodes);
    
    elemento_clon.childNodes[14].childNodes[1].childNodes[5].childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[1].childNodes[5].setAttribute("id","PadreInputTeam_"+CantidadEtapas);
    console.log("CUADRO DE LOS EQUIPOS(MODAL-BODY-PADREINPUTS)[14][1][5][1][1][3][1][1][5]: ",elemento_clon.childNodes[14].childNodes[1].childNodes[5].childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[1].childNodes[5]);
    

    console.log("\n\n\n\n\n\n");
    elemento_clon.childNodes[14].childNodes[1].childNodes[5].childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[1].childNodes[1].childNodes[1].setAttribute("for","inputNameModalTeam_"+CantidadEtapas);
    console.log("CUADRO DE LOS EQUIPOS(MODAL-BODY-LABEL-NOMBRE)[14][1][5][1][1][3][1][1][1][1]: ",elemento_clon.childNodes[14].childNodes[1].childNodes[5].childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[1].childNodes[1].childNodes[1]);
    
    elemento_clon.childNodes[14].childNodes[1].childNodes[5].childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[1].childNodes[1].childNodes[3].setAttribute("id","inputNameModalTeam_"+CantidadEtapas);
    console.log("CUADRO DE LOS EQUIPOS(MODAL-BODY-NOMBRE)[14][1][5][1][1][3][1][1][1][3]: ",elemento_clon.childNodes[14].childNodes[1].childNodes[5].childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[1].childNodes[1].childNodes[3]);
    

    console.log("\n\n\n\n\n\n");
    elemento_clon.childNodes[14].childNodes[1].childNodes[5].childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[1].childNodes[3].childNodes[1].setAttribute("for","inputDescripcionModalTeam_"+CantidadEtapas);
    console.log("CUADRO DE LOS EQUIPOS(MODAL-BODY-LABEL-DESCRIPCION)[14][1][5][1][1][3][1][1][3]: ",elemento_clon.childNodes[14].childNodes[1].childNodes[5].childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[1].childNodes[3].childNodes[1]);
    
    elemento_clon.childNodes[14].childNodes[1].childNodes[5].childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[1].childNodes[3].childNodes[3].setAttribute("id","inputDescripcionModalTeam_"+CantidadEtapas);
    console.log("CUADRO DE LOS EQUIPOS(MODAL-BODY-DESCRIPCION)[14][1][5][1][1][3][1][1][3]: ",elemento_clon.childNodes[14].childNodes[1].childNodes[5].childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[1].childNodes[3].childNodes[3]);
    

    console.log("\n\n\n\n\n\n");
    var botonEquipo = elemento_clon.childNodes[14].childNodes[1].childNodes[5].childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[1].childNodes[5].childNodes[1];
    botonEquipo.setAttribute("id","AbrirImagenModalTeam_"+CantidadEtapas);
    botonEquipo.setAttribute("data-id",CantidadEtapas);
    
    //Asignamos evento al boton de equipo
    botonEquipo.addEventListener("click",abrirInputEquipo);
    console.log("CUADRO DE LOS EQUIPOS(MODAL-BODY-FOTO)[14][1][5][1][1][3][1][1][5][1]: ",elemento_clon.childNodes[14].childNodes[1].childNodes[5].childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[1].childNodes[5].childNodes[1]);
    
    console.log("\n\n\n\n\n\n");
    var inputEquipo =elemento_clon.childNodes[14].childNodes[1].childNodes[5].childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[1].childNodes[5].childNodes[3];
    inputEquipo.addEventListener("change",AceptarInputEquipo)
    inputEquipo.setAttribute("id","inputImagenModalTeam_"+CantidadEtapas);
    inputEquipo.setAttribute("data-id",CantidadEtapas);
    console.log("CUADRO DE LOS EQUIPOS(MODAL-BODY-INPUT)[14][1][5][1][1][3][1][1][5][3]: ",elemento_clon.childNodes[14].childNodes[1].childNodes[5].childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[1].childNodes[5].childNodes[3]);
    
    elemento_clon.childNodes[14].childNodes[1].childNodes[5].childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[1].childNodes[5].childNodes[5].setAttribute("id","MensajeNombreTeam_"+CantidadEtapas);
    console.log("CUADRO DE LOS EQUIPOS(MODAL-BODY-MENSAJE)[14][1][5][1][1][3][1][1][5][3]: ",elemento_clon.childNodes[14].childNodes[1].childNodes[5].childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[1].childNodes[5].childNodes[5]);


    console.log("\n\n\n\n\n\n");
    elemento_clon.childNodes[14].childNodes[1].childNodes[9].setAttribute("id","divClonarTeam_"+CantidadEtapas);
    console.log("CUADRO DE LOS EQUIPOS(CLONAR): ",elemento_clon.childNodes[14].childNodes[1].childNodes[9]);
    console.log("CUADRO DE LOS EQUIPOS(CLONAR-HIJOS): ",elemento_clon.childNodes[14].childNodes[1].childNodes[9].childNodes);
    console.log("CUADRO DE LOS EQUIPOS(CLONAR-HIJOS[2][1]): ",elemento_clon.childNodes[14].childNodes[1].childNodes[9].childNodes[2].childNodes[1].childNodes);
    
    elemento_clon.childNodes[14].childNodes[1].childNodes[9].childNodes[6].setAttribute("id","elementosAGuardarImagen_"+CantidadEtapas);
    console.log("CUADRO DE LOS EQUIPOS(CLONAR-ELEMENTOSGUARDAR): ",elemento_clon.childNodes[14].childNodes[1].childNodes[9].childNodes[6]);
    console.log("CUADRO DE LOS EQUIPOS(CLONAR-ELEMENTOSGUARDAR-HIJOS): ",elemento_clon.childNodes[14].childNodes[1].childNodes[9].childNodes[6].childNodes);

    elemento_clon.childNodes[14].childNodes[1].childNodes[9].childNodes[6].childNodes[1].setAttribute("id","imagenPersonaPrueba_"+CantidadEtapas);
    elemento_clon.childNodes[14].childNodes[1].childNodes[9].childNodes[6].childNodes[1].setAttribute("name","imagenPersonaPrueba_"+CantidadEtapas);
    
    console.log("CUADRO DE LOS EQUIPOS(CLONAR-ELEMENTOSGUARDAR-HIJOS-inputimagen): ",elemento_clon.childNodes[14].childNodes[1].childNodes[9].childNodes[6].childNodes[1]);
    
    elemento_clon.childNodes[14].childNodes[1].childNodes[9].childNodes[6].childNodes[3].setAttribute("id","nombrePersonaPrueba_"+CantidadEtapas);
    elemento_clon.childNodes[14].childNodes[1].childNodes[9].childNodes[6].childNodes[3].setAttribute("name","nombrePersonaPrueba_"+CantidadEtapas);
    
    console.log("CUADRO DE LOS EQUIPOS(CLONAR-ELEMENTOSGUARDAR-HIJOS-inputnombre): ",elemento_clon.childNodes[14].childNodes[1].childNodes[9].childNodes[6].childNodes[3]);

    elemento_clon.childNodes[14].childNodes[1].childNodes[9].childNodes[6].childNodes[5].setAttribute("id","areaTrabajoPrueba_"+CantidadEtapas);
    elemento_clon.childNodes[14].childNodes[1].childNodes[9].childNodes[6].childNodes[5].setAttribute("name","areaTrabajoPrueba_"+CantidadEtapas);
    console.log("CUADRO DE LOS EQUIPOS(CLONAR-ELEMENTOSGUARDAR-HIJOS-inputdescripcion): ",elemento_clon.childNodes[14].childNodes[1].childNodes[9].childNodes[6].childNodes[5]);
    



    console.log("\n\n\n\n\n\n");
    console.log("CUADRO DE LOS EQUIPOS(MODAL-FOOTER)[14][1][5][1][1][5]: ",elemento_clon.childNodes[14].childNodes[1].childNodes[5].childNodes[1].childNodes[1].childNodes[5]);
    console.log("CUADRO DE LOS EQUIPOS(MODAL-FOOTER-HIJOS)[14][1][5][1][1][5]: ",elemento_clon.childNodes[14].childNodes[1].childNodes[5].childNodes[1].childNodes[1].childNodes[5].childNodes);

    var botonguardarEquipo = elemento_clon.childNodes[14].childNodes[1].childNodes[5].childNodes[1].childNodes[1].childNodes[5].childNodes[3];
    botonguardarEquipo.setAttribute("id","GuardarTeam_"+CantidadEtapas);
    botonguardarEquipo.addEventListener("click",GuardarEquipo);
    botonguardarEquipo.setAttribute("data-id",CantidadEtapas);
    console.log("CUADRO DE LOS EQUIPOS(MODAL-FOOTER-HIJOS-INPUTGUARDAR)[14][1][5][1][1][5]: ",elemento_clon.childNodes[14].childNodes[1].childNodes[5].childNodes[1].childNodes[1].childNodes[5].childNodes[3]);



    //console.log("CUADRO DE LOS VIDEOS(MODAL): ",elemento_clon.childNodes[11].childNodes[1].childNodes[6].childNodes);
    
    
    //console.log("\n\n\n\n\n\n");
    //console.log("CUADRO DE LOS VIDEOS(MODAL) 2: ",elemento_clon.childNodes[11].childNodes[1].childNodes[3].childNodes[1].childNodes);



















    var br = document.createElement("br");
    //Con esto clonamos al final
    
    lugarParaColocarLasEtapas.insertAdjacentElement("beforebegin", br);
    lugarParaColocarLasEtapas.insertAdjacentElement("beforebegin", elemento_clon);
    
    

});