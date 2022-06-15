
//Botones generales
var BotonGuardarPremios = document.getElementById("GuardarPremios");
var BotonAbrirImagenModalPremios = document.getElementById("AbrirImagenModalPremios");

//Padres del modal
var padreInputPremios = document.getElementById("PadreInputPremios");

//Esto son los campos del modal
var InputNombreModalPremios = document.getElementById("inputNameModalPremios");
var InputDescripcionModalPremios = document.getElementById("inputDescripcionModalPremios");
var InputImagenModalPremios = document.getElementById("inputImagenModalPremios");
var textoH5Premios = document.getElementById("MensajeNombrePremios");


//console.log("--->",BotonVideos);


//Funciones Nuevas
function GuardarCambiosImagen(){


    
    console.clear();
    console.log("linea 25...Presionaste save changes en el modalPremios");


    //Inputs dentro del modal para crear un video
    var InputImagenModalPremios = document.getElementById("inputImagenModalPremios");
    console.log("Existe: ",InputImagenModalPremios);
    ////////////////////////////////////////////////////////////////////////////////


    
    console.log("Agregando campo de premios");
    var TrClonar = document.getElementById("divClonarPremios");
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
    const primerArchivo = InputImagenModalPremios.files[0];

    console.log("\n\nFILES[0]: ",primerArchivo);
    // Ahora tomamos el primer archivo, el cual vamos a previsualizar
    // Lo convertimos a un objeto de tipo objectURL
    const objectURL = URL.createObjectURL(primerArchivo);
    // Y a la fuente de la imagen le ponemos el objectURL
    elemento_clon.childNodes[2].childNodes[1].childNodes[1].src = objectURL;



    
    var tituloH5 = elemento_clon.childNodes[4].childNodes[1];
    tituloH5.textContent = InputNombreModalPremios.value;
    

    //Parafo del div
    var parrafo = elemento_clon.childNodes[4].childNodes[3];
    parrafo.textContent = InputDescripcionModalPremios.value;


    //Con esto clonamos al final
    TrClonar.insertAdjacentElement("afterend", elemento_clon);

    

    //div de los elementos a guardar
    console.log("\n\n(PADRE)Elementos a guardar");
    console.log(elemento_clon.childNodes[6]);


    console.log("IMAGEN:",elemento_clon.childNodes[6].childNodes[1]);
    
    elemento_clon.childNodes[6].childNodes[1].setAttribute("name","imagenPremios");
    elemento_clon.childNodes[6].childNodes[1].files = InputImagenModalPremios.files;
    elemento_clon.childNodes[6].childNodes[1].files[0] = InputImagenModalPremios.files[0];
    //elemento_clon.childNodes[6].childNodes[1].value = InputImagenModalTeam.value;


    console.log("NOMBRE:",elemento_clon.childNodes[6].childNodes[3]);

    elemento_clon.childNodes[6].childNodes[3].setAttribute("name","nombrePremios");
    elemento_clon.childNodes[6].childNodes[3].value = InputNombreModalPremios.value;

    console.log("DESCRIPCION:",elemento_clon.childNodes[6].childNodes[5]);

    elemento_clon.childNodes[6].childNodes[5].setAttribute("name","areaTrabajoPremios");
    elemento_clon.childNodes[6].childNodes[5].value = InputDescripcionModalPremios.value;


     //Limpiamos los campos del modal
     InputNombreModalPremios.value= "";
     InputDescripcionModalPremios.value = "";
     //InputImagenModalTeam.src = "";
     //InputImagenModalTeam.value = "";
     textoH5Premios.innerText = "";




    console.log("Padre del input imagen:\n",padreInputPremios);
    padreInputPremios.removeChild(InputImagenModalPremios);


    //<input id="inputVideoModalVideo" class="" type="file" accept="video/*">
    var inputModalNuevoImagen = document.createElement("input");
    inputModalNuevoImagen.setAttribute("id","inputImagenModalPremios");
    inputModalNuevoImagen.setAttribute("class","");
    inputModalNuevoImagen.setAttribute("type","file");
    inputModalNuevoImagen.setAttribute("accept","imagen/*");
    
    //objectURL
    inputModalNuevoImagen.URL = objectURL;

    //AQUI ASIGNAMOS EL EVENTO AL BOTON NUEVO
    inputModalNuevoImagen.addEventListener('change',ImagenSeleccionado);


    //
    //Con esto clonamos al final
    textoH5Premios.insertAdjacentElement("beforebegin", inputModalNuevoImagen);

    


};









function ImagenSeleccionado(){

    //Se abre el input de file
    //document.getElementById("id_imagenMarca").click(); 
    //inputVideoSecundarios.click();
    console.log("linea 195 ...Nueva Imagen Seleccionada....");

    console.log("El nombre es: ", this.files[0].name);
    textoH5Premios.innerText = "Has elegido : "+this.files[0].name;
    console.log("El textoh5 es: ",textoH5.innerText);



};




BotonAbrirImagenModalPremios.addEventListener('click',function() {

    //Se abre el input de video del modal
    console.log("linea 186...BotonAbrirImagenModalPremios...Aqui abrimos el modal de Premios...............");
    document.getElementById("inputImagenModalPremios").click(); 
    
    


});




//Este evento es para que se guarde todo
BotonGuardarPremios.addEventListener('click', GuardarCambiosImagen);


//Este evento es para que se abra la seleccion de videos secundarios
InputImagenModalPremios.addEventListener('change', ImagenSeleccionado);











