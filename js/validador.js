/* Cargar al estar listo el documento */
$("document").ready(function () {

    /* Caputar evento Submit */
    $("#registroEstudiante").submit(function () {
        return validarDatos();
    })
})


/*Función Validar Datos*/
function validarDatos(){
    /* Confirmar el envio del formulario */
    let confirmación = confirm("¿Seguro que deseas enviar?");
    if (confirmación){

        //Campos del Nombre e Email
        let inputName = $("#txtName")[0].value;
        let inputEmail = $("#txtEmail")[0].value;      
        
        if (inputName.length > 50 || inputName.length < 2) {
            alert("Su nombre no es aceptado.");
            return false;
        } 
        if (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(inputEmail) == false) {
            alert("Su correo electrónico está mal");
            return false;
        }

        //Campo DNI
        let inputDNI = $("#intDNI")[0].value;

        //Validar si DNI es un numero
        if(isNaN(inputDNI)){
            alert("El DNI no es válido")
            return false;
        }
        
        //Campos de Contraseñas
        let inputPassword = $("#txtPassword")[0].value;
        let inputRePassword = $("#txtRePassword")[0].value;
       
        /*Contraseña según los estandares: 
        - 8 y 16 caracteres 
        - Al menos un dígito 
        - Al menos una minúscula 
        - Al menos una mayúscula*/
        if (/(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(inputPassword)==false){
            alert("Su contraseña es muy débil")
            return false;
        }

        //Verificar si las contraseñas son iguales
        if (inputPassword !== inputRePassword){
            alert("Las contraseñas deben ser iguales") 
            return false;
        } 

        //Campo Celular
        let inputCelular = $("#txtPhone")[0].value;

        //Validar si Celular es un numero
        if(isNaN(inputCelular)){
            alert("El celular no es válido")
            return false;
        }

        /* Mandar confirmación de envio */
        return true;

    } else { // Caso presiona Cancelar
        return false;
    }
}
        
      

