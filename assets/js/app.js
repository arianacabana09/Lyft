// validacion de formulario
enviar.addEventListener("click", function(){
  var telf = document.getElementById("phone");
  var nombre = document.getElementById("name");
  var correo = document.getElementById("email");
  var ciudad = document.getElementById("city");
  var msje = document.getElementById("msj");
  //Ingresar los campos necesarios
  if (telf.value == "" || nombre.value == "" || correo.value == "" || ciudad.value == ""){
    alert("*Verifica que datos obligatorios estan incompletos");
  }
  //caracteres expresion regular
  var crtCantidad = /^\s+|\s+$/;
  var letras = /[a-zA-Z]/;
  var crtNumero = /[0-9]/;

  validaPhone();

  //valido la telefono
  function validaPhone(){
    var expresion = /^9[\d]{8}$/;
    if (isNaN(phone.value) || !expresion.test(phone.value)){
      alert("Debe ingresar un número con el formato correcto \n ej: 987654321");
    } else{
      validaNombre();
    }
  }

  //valido el nombre
  function validaNombre(){
    if (nombre.value.length < 3 || crtCantidad.test(nombre.value)){
      alert("Tiene que ingresar su nombre");
    } else if (crtNumero.test(nombre.value) || !(letras.test(nombre.value))){
      alert("Solo se permiten letras");
    } else if (!(/[^a-z]+([a-z]{1,})/.test(nombre.value))){
      alert("Su nombre debe empezar con mayúscula");
    } else{
      validaEmail();
    }
  }

  //valido el correo
  function validaEmail(){
    var crt = /\S+@\+\S+.\+S+/;
    var crt2= /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
    if (!crt.test(correo.value) && correo.value.length < 10){
      alert("Ingrese el formato correcto del correo");
    } else if (!(crt2.test(correo.value))){
      alert("Correo no válido \n ej: abcd@lab.co");
    } else{
      alert("Gracias por registrarse :)");
    }
  }
});
