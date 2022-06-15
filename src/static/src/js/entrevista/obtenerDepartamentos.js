

//MODELO PARA HACER PETICIONES CON FETCH


//var opcion = document.getElementById("ELEGIRDEPARTAMENTO");
/*
opcion.addEventListener('click',function() {

    //Se abre el input de file
    //document.getElementById("id_imagenMarca").click(); 
    //inputVideoSecundarios.click();
    //var nombre_placa = document.getElementById("id_id_placa2");
    
    //console.log(nombre_placa.value);
    var valores = {
        nombre_placa: 1
    };
    


    fetch('/apis/obtenerDepartamentos/',{
        method: "POST",
        body: JSON.stringify({valores}),
        headers: {
            "X-CSRFToken": csrftoken,
            "X-Requested-With": "XMLHttpRequest",
        }
    }).then(
        function(response){
            return response.json();
        }
    ).then(
        function(data){


                if(data.status == 200){


                        console.log(data);
                        console.log(data.mensaje);
                        console.log(data.status);
                        console.log(data);
                        /*
                        console.log("------------------------------------------");
                        console.log("Status:",data.status)
                        console.log("Mensaje:",data.mensaje)
                        console.log("Placa:",data.placa)
                        console.log("Placa id:",data.placa[0].id)
                        console.log("Placa nombre:",data.placa[0].id_placa)
                        let select_placa = document.getElementById("id_id_placa");
                        let parrafo = document.getElementById('MensajePlaca');
                        
                        console.log(select_placa);
                        console.log(select_placa.length);
                        
                        


                        

                        //Mensaje de aviso de la placa
                        parrafo.innerHTML = data.mensaje;
                        let texto = data.placa[0].id_placa;
                        let value = data.placa[0].id;

                        //Agregamos el nuevo opcion al HTML
                        select_placa.appendChild(new Option(texto,value));
                        //console.log(select_placa.selectedIndex)
                        select_placa.selectedIndex = select_placa.length-1;
                        
                        //console.log(select_placa.selectedIndex)


                        

                }else if(data.status == 500){


                    console.log("Error al traer informacion");
                    
                        let parrafo = document.getElementById('MensajePlaca');
                         
                        //Mensaje de aviso de la placa
                        parrafo.innerHTML = data.mensaje;

                    

                }//fin del else
                

        }//fin de la funcion dentro de la promesa
    )//fin de then(promesa)

});
*/


//Funcion para guardar la placa
function llamarApi_Placa(){

            
            
    


};//fin de funcion llamar_api


function borrarParrafoModal(){

let parrafo = document.getElementById('MensajePlaca');
parrafo.innerHTML = "";

};