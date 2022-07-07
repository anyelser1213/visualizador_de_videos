import {csrftoken} from "./cookiesDjango.js";



var img = document.getElementById("imagenLogin");

console.log(csrftoken);


    var resultados = "Cargando...";
	fetch("/api_login",{
            method:"GET",
            headers:{
                "X-CSRFToken":csrftoken,
                "X-Requestd-With":"XMLGttpRequest"//Con esto indicamos que es una peticion ajax
            }

    //Promesa de javascript
    }).then(
        function(response){
            return response.json();
            //console.log(response.data);
        }
    ).then(
        function(data){

            //console.log(data.FondoLogin);

            //{% static 'src/img/logo_login.jpg' %} esto lo quitamos del login.html
            img.setAttribute("src",data.ImagenLogin);
            
            document.body.style.backgroundImage = "url("+data.FondoLogin+")";
            document.body.style.backgroundPosition = "center center";
            document.body.style.backgroundRepeat = "no-repeat";
            document.body.style.backgroundSize = "cover";

        }
    ) 