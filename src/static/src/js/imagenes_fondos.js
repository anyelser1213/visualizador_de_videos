
    

    




    function getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    //Valor que  le pasaremos aa Django para la seguridad
    var csrftoken = getCookie('csrftoken');


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
		
