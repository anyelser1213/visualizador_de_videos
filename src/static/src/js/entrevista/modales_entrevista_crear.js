
//Este es para el modal de kilometraje que tiene el id= exampleModal
var ModalColor = document.getElementById('ModalColor');


if(ModalColor ==null){

    //console.log("LINEA 8...NO EXISTE EN ESTE MOMENTO");


}else{



    ModalColor.addEventListener('show.bs.modal', function (event) {
        // Button that triggered the modal
        var button = event.relatedTarget;
        // Extract info from data-bs-* attributes
        var id = button.getAttribute('data-bs-id');
        var Kilometraje = button.getAttribute('data-bs-whatever');
        var minimo = button.getAttribute('data-minimo');
        
        //Para visualizar un mensaje
        console.log(id+" y el xxx es: "+Kilometraje+" minimo: "+minimo);
        
        //Probando con el focus
        
        //boton =document.querySelector("#recipient-name");
        //console.log(boton);
        //boton.setAttribute("autofocus","");
        
        //console.log("estamoos aqui");
        //console.log(boton);
        //boton.value = 23444;
        
        
        // If necessary, you could initiate an AJAX request here
        // and then do the updating in a callback.
        //
        // Update the modal's content.
        var modalTitle = ModalColor.querySelector('.modal-title');
        var modalBodyInput = ModalColor.querySelector('.kilometraje');
        var modalBodyInputID = ModalColor.querySelector('.id ');
        
        console.log(modalTitle);
        modalTitle.textContent = "Select Color";
        //modalBodyInputID.value = id;
        //modalBodyInput.value = Kilometraje;
        //modalBodyInput.setAttribute("min",minimo);
        
        })



}