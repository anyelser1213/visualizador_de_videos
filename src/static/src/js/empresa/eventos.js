
//pruebas
var BotonEnviar2 = document.getElementById("enviar2");


//Botones para eventos
var BotonMarca = document.getElementById("attachment");
var BotonEnviar = document.getElementById("enviarDatos");
var BotonImagenEmpresa = document.getElementById("botonImagenEmpresa");
var BotonVideoEmpresa = document.getElementById("botonVideoEmpresa");
var BotonColorEmpresa = document.getElementById("botonColorEmpresa");
//var BotonVideosSecundarios = document.getElementById("inputVideosSecundarios");

var ImagenEmpresaPerfil = document.getElementById("RepresentacionImagenMarca");
var VideoEmpresaPerfil = document.getElementById("VideoPrincipal");
var inputImagenEmpresa = document.getElementById("id_imagenEmpresa");
var inputVideoEmpresa = document.getElementById("id_videoEmpresa");
var inputColorEmpresa = document.getElementById("id_color");

//Boton de progress Barr
var BotonProgresBar = document.getElementById("progressBar");


/* BOTON PARA ENVIAR LA DATA*/
//Este boton es para tomar la imagen
BotonImagenEmpresa.addEventListener('click', function() {



    
    console.log("probando.. boton imagen");
    //Se ejecuta el boton de submit para guardar el formulario
    inputImagenEmpresa.click(); 

});

//Este boton es para tomar el video
BotonVideoEmpresa.addEventListener('click', function() {



    
    console.log("probando.. boton video");
    //Se ejecuta el boton de submit para guardar el formulario
    inputVideoEmpresa.click(); 

});

//Este boton es para tomar el color
BotonColorEmpresa.addEventListener('click', function() {



    
    console.log("probando.. boton video");
    //Se ejecuta el boton de submit para guardar el formulario
    inputColorEmpresa.click(); 

});



inputImagenEmpresa.addEventListener("click", function(){


    console.log("Probando el boton");
});

inputImagenEmpresa.addEventListener("change", function(){


    console.log("cambiando todo el boton");
    console.log("Elegiste: ", this.files[0].name)


    //const archivos = $seleccionArchivos.files;
    
    // Ahora tomamos el primer archivo, el cual vamos a previsualizar
    const primerArchivo = this.files[0];
    // Lo convertimos a un objeto de tipo objectURL
    const objectURL = URL.createObjectURL(primerArchivo);
    // Y a la fuente de la imagen le ponemos el objectURL
    ImagenEmpresaPerfil.setAttribute("src",objectURL)
    //ImagenEmpresaPerfil.src = objectURL;

    //ImagenEmpresaPerfil.src = this.files[0].name;
});



//Estos son para el video
inputVideoEmpresa.addEventListener("click", function(){


    console.log("Probando el boton de video");

});


inputVideoEmpresa.addEventListener("change", function(){


    VideoEmpresaPerfil.setAttribute("controls","");
    console.log("cambiando VIDEOS");
    console.log("Donde se visualiza el video principal: ", VideoEmpresaPerfil)
    console.log("Input del video principal: ", inputVideoEmpresa.files[0])

    
    // Ahora tomamos el primer archivo, el cual vamos a previsualizar
    const videoooo = inputVideoEmpresa.files[0];

    console.log("\n\nFILES[0]: ",videoooo);
    //console.log("\n\nFILES[0].name: ",primerArchivo.name);



    //Auxiliar_textoH5 = primerArchivo.name;

    // Lo convertimos a un objeto de tipo objectURL
    const objectURL = URL.createObjectURL(videoooo);
    console.log("\n\nObjectURL: ",objectURL);
    //prompt("Probando");
    // Y a la fuente del video le ponemos el objectURL
    console.log(VideoEmpresaPerfil);
    //VideoEmpresaPerfil.setAttribute("src",objectURL)
    //VideoEmpresaPerfil.remove();    
    VideoEmpresaPerfil.src = objectURL;

    console.log("\n\n");
});


/* FUNCION PARA PROBAR EL TIEMPO */

function saludos(x){

     setInterval(function () {
         console.log(x++);
         BotonProgresBar.setAttribute("style","width: "+x+"%");
     },1000);
  }
  
  


/*********************************/








//Esto es para enviar la data
BotonEnviar.addEventListener('click', function() {



    
    console.log("linea 140, apretando el boton de SAVE...");
    //Se ejecuta el boton de submit para guardar el formulario
    document.getElementById("Enviar").click(); 
    


    

});


BotonEnviar2.addEventListener('click', function() {



    

        
        saludos(5);

    

});

        