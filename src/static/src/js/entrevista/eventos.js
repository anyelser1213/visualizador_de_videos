

/*VARIABLES PARA MANIPULAR EL LOS BOTONES */
var BotonDocumento = document.getElementById("documentoBoton");
var BotonColor = document.getElementById("BotonColor");
var BotonImagenEntrevista = document.getElementById("BotonImagenEntrevista");
var BotonVideoEntrevista = document.getElementById("BotonVideoEntrevista");
var BotonEnviar = document.getElementById("enviarDatos");


//Variables Input

var ImagenEntrevista = document.getElementById("RepresentacionImagenMarca");
var VideoEntrevistaPerfil = document.getElementById("VideoPrincipal");
var inputImagenEntrevista = document.getElementById("id_imagenEntrevista");
var inputVideoEntrevista = document.getElementById("id_videoEntrevista");

//var inputImagenEmpresa = document.getElementById("id_imagenEmpresa");

//var inputColorEmpresa = document.getElementById("id_color");





//Evento para abrir para seleccionar la imagen de la marca de la empresa

BotonColor.addEventListener('click', function() {

    //Se abre el input de file
    document.getElementById("id_colorEntrevista").click(); 
    

    console.log("Probando...");

});

BotonImagenEntrevista.addEventListener('click', function() {

    //Se abre el input de file
    inputImagenEntrevista.click(); 
    

    console.log("Probando con imagen...");

});

BotonVideoEntrevista.addEventListener('click', function() {

    //Se abre el input de file
    inputVideoEntrevista.click(); 
    

    console.log("Probando con imagen...");

});

/* para mostrar la imagen selecionada DE PERFIL DE LA ENTREVISTA */
inputImagenEntrevista.addEventListener('change', function() {

    //Se abre el input de file
    inputImagenEntrevista.click(); 
    

    console.log("Probando con imagen selecionada...");
    console.log("Elegiste: ", this.files[0].name)


    //const archivos = $seleccionArchivos.files;
    
    // Ahora tomamos el primer archivo, el cual vamos a previsualizar
    const primerArchivo = this.files[0];
    // Lo convertimos a un objeto de tipo objectURL
    const objectURL = URL.createObjectURL(primerArchivo);
    // Y a la fuente de la imagen le ponemos el objectURL
    ImagenEntrevista.setAttribute("src",objectURL)

});



/*ESTE INPUT ES PARA SELECCIONAR Y MOSTRAR EL VIDEO PRINCIPAL*/
inputVideoEntrevista.addEventListener("change", function(){


    VideoEntrevistaPerfil.setAttribute("controls","");
    console.log("cambiando VIDEOS");
    console.log("Donde se visualiza el video principal: ", VideoEntrevistaPerfil)
    console.log("Input del video principal: ", inputVideoEntrevista.files[0])

    
    // Ahora tomamos el primer archivo, el cual vamos a previsualizar
    const videoooo = inputVideoEntrevista.files[0];

    console.log("\n\nFILES[0]: ",videoooo);
    //console.log("\n\nFILES[0].name: ",primerArchivo.name);



    //Auxiliar_textoH5 = primerArchivo.name;

    // Lo convertimos a un objeto de tipo objectURL
    const objectURL = URL.createObjectURL(videoooo);
    console.log("\n\nObjectURL: ",objectURL);
    //prompt("Probando");
    // Y a la fuente del video le ponemos el objectURL
    console.log(VideoEntrevistaPerfil);
    //VideoEmpresaPerfil.setAttribute("src",objectURL)
    //VideoEmpresaPerfil.remove();    
    VideoEntrevistaPerfil.src = objectURL;

    console.log("\n\n");
});

























/*
////Evento para visualizar los videos secundarios
inputVideoSecundarios.addEventListener('change', function() {

    //Se abre el input de file de videos secundarios
    var listaVideosSecundarios = document.getElementById("listaVideoSecundarios");


    console.log("VISUALIZANDO VIDEOS SECUNDARIOS");

    // AQUI ES PARA CLONAR ELEMENTOS Y AGREGAR LOS VIDEOS 
    console.log("Agregando nuevo video, para visualizar---141-");
    var ElementoClonar = document.getElementById("ClonVideosSecundarios");
    var padre = ElementoClonar.parentNode;
    var elemento = ElementoClonar.cloneNode(true);

    //console.log("Elemento Padre: ",padre);
    //console.log("Elemento que clonaremos: ",ElementoClonar);
    console.log("elemento Principal: ",elemento.childNodes);
    console.log("\n");
    console.log("Elemento del video: ",elemento.childNodes[1].childNodes[1]);

    console.log("Elemento del TITULO (h5): ",elemento.childNodes[3].childNodes[1]);
    console.log("Elemento del parrafo (p): ",elemento.childNodes[3].childNodes[3]);


    //insertAdjacentElement es para insertar un elemento
    //el primer parametro es para indicar la posicion en la que se creara
    //afterbegin es para que el video aparezca de primero
    //padre.insertAdjacentElement("afterbegin",elemento);

    console.log("\n-----------------------------\n");
    console.log(inputVideoSecundarios.files);
    console.log("\n-----------------------------\n");
    console.log(inputVideoSecundarios.files.length);//para saber la cantidad de elementos del file
    var CantidadVideos = inputVideoSecundarios.files.length;
    var n=1;
    for (var i = 0; i < CantidadVideos; i++) {

        var elemento = ElementoClonar.cloneNode(true);
        elemento.setAttribute("id","");



        // Lo convertimos a un objeto de tipo objectURL
        const objectURL = URL.createObjectURL(inputVideoSecundarios.files[i]);
        // Y a la fuente de la imagen le ponemos el objectURL
        //RepresentacionVideoMarca.src = objectURL;
        //donde se coloca el video
        elemento.childNodes[1].childNodes[1].src = objectURL;
        elemento.childNodes[1].childNodes[1].setAttribute("controls","") 

        //Para colocar el titulo del video
        elemento.childNodes[3].childNodes[1].textContent = inputVideoSecundarios.files[i].name;
        //Para colocar el parrafo del video
        elemento.childNodes[3].childNodes[3].textContent = "jalapena";

        padre.insertAdjacentElement("afterbegin",elemento);



        console.log("Video: ",n);
        console.log(inputVideoSecundarios.files[i].name);//Aqui visualizamos el nombre del/los archivo(s)
        n += 1;
     }


});

*/
















/* BOTON PARA ENVIAR LA DATA*/

//Esto es para enviar la data
BotonEnviar.addEventListener('click', function() {

    //Se abre el input de file
    console.log("Probando el click");
    document.getElementById("Enviar").click(); 

});
        