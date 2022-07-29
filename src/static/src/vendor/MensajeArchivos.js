

function DescargarArchivo(e){

    console.log(e);
    console.log("\nruta: ",e.dataset);
    
    
    swal({
      title: "Quieres descargar "+e.dataset.nombrearchivo+"?",
      text: "",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Perfecto, has descargado el archivo", {
          icon: "success",
        });

        //console.log("Funciona esta vaina ",e.data.ruta);

        var clon = e.cloneNode(true);
        clon.removeAttribute("onclick")
        console.log("Lo que hemos cllonado: ",clon);

        clon.setAttribute("href",e.dataset.ruta);
        clon.setAttribute("download","");
        console.log("Ruta del clon: ",clon.dataset.ruta);
        
        clon.click();
        //var element = document.createElement(e);
        //element.setAttribute('href')
        //element.setAttribute('download', filename);
        //document.body.appendChild(element);
        //element.click();
                  //document.body.removeChild(element);

        //e.setAttribute("href");
        //e.setAttribute("download","");
      
      
      
      }else {
        swal("Descarga Cancelada!");

        console.log("NO Funciona esta vaina");
      }
    });

    return false;

};


 