


    var resultados = "Cargando...";
	fetch("/probando",{
            method:"GET",
            headers:{
                "X-CSRFToken":getCookie('csrftoken'),
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
            console.log(data.FondoIndex);

            
            document.body.style.backgroundImage = "url("+data.FondoIndex+")";
            document.body.style.backgroundPosition = "center center";
            document.body.style.backgroundRepeat = "no-repeat";
            document.body.style.backgroundSize = "cover";

        }
    )
		
