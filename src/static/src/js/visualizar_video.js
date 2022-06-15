
var video = document.getElementById("VideoCapa");
var source = document.getElementById('SourceVisual');



function VisualizarVideo(e){

    //e.preventDefault();
    //console.log("Mostrando un mensaje al hacer click",this);

    //Con el dataset tenemos todos los datos de la propiedad data-
    //console.log("Probando: ",e.dataset.url);

    source.setAttribute('src', e.dataset.url);

    video.load();
    video.play();

};

/*
document.getElementById("EnlaceVideo").addEventListener("click",function(e){

        console.log("Mostrando un mensaje al hacer click",e);


});
*/