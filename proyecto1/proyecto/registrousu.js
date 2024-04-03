const listaUsuarios = [];



let formulario = document.getElementById('formulario');


formulario.addEventListener('submit', function (evento) {
  evento.preventDefault();
  console.clear();


  console.log(formulario)


  let nombres = document.getElementById("nombres").value;
  console.log("nombres", nombres);
  let apellidos = document.getElementById("apellidos").value;
  console.log("apellidos", apellidos);
  let correo = document.getElementById("correo_electronico").value;
  console.log("correo_electronico", correo);
  let pais = document.getElementById("pais").value;
  console.log("pais", pais);
  let nacimiento = document.getElementById("fecha_nacimiento").value;
  console.log("fecha_nacimiento", nacimiento);
  let usuario1 = document.getElementById("usuario").value;
  console.log("usuario", usuario1);
  let contraseña = document.getElementById("contraseña").value;
  console.log("contraseña", contraseña);
  let confirme_contraseña = document.getElementById("confirme_contraseña").value;
  console.log("confirme_contraseña", confirme_contraseña);
  
  formulario.reset();




  //objeto
  const usuario = {
    nombres: nombres,
    apellidos: apellidos,
    correo: correo,
    pais:pais,
    nacimiento: nacimiento,
    usuario1: usuario1,
    contraseña: contraseña,
    confirme_contraseña: confirme_contraseña,
  };


  console.log("Info ususario==>", usuario);


  const correoVerificado = validarCorreo(usuario.correo);
  console.log(correoVerificado);


  if (!correoVerificado) {
    Swal.fire({
      title: "Error!",
      text: "Correo Invalido!!",
      icon: "error"
    });
    return false;
  };


  if (usuario.contraseña.length < 8) {
    Swal.fire({
      title: "Error!",
      text: "La contraseña debe tener al menos 8 caracteres de longitud.",
      icon: "error"
    });
    return false;
  };


  if (usuario.contraseña != usuario.confirme_contraseña) {


    Swal.fire({
        title: "Error!",
        text: "La contraseña debe no coincide.",
        icon: "error"
    });
    return false;
  };


  const validacionFechaUsuario = validarFechaDeNacimiento(usuario.nacimiento);
  console.log("Validacion de edad=>", validacionFechaUsuario);


  if (validacionFechaUsuario == false) {
    Swal.fire({
      title: "Error!",
      text: "Debes ser mayor de 18 años.",
      icon: "error"
    });
    return false;
  };


  listaUsuarios.push(usuario);
  var jasonUsuarios = JSON.stringify(listaUsuarios);
  localStorage.setItem('RegistroUsuarios', jasonUsuarios);
  obtenerRegistro();


});


function validarCorreo(correo) {
  var verificarEmail = /^[a-zA-z0-9._-]+@gmail.com$/;
  return verificarEmail.test(correo);
};


function validarFechaDeNacimiento(fecha) {


  var fechaParts = fecha.split('-');
  if (fechaParts.length !== 3)
    return false;


  var anio = parseInt(fechaParts[0]);
  var mes = parseInt(fechaParts[1]);
  var dia = parseInt(fechaParts[2]);


  var fechaIngresada = new Date(anio, mes - 1, dia);
  var fechaActual = new Date();
  var edad = fechaActual.getFullYear() - fechaIngresada.getFullYear();
  return edad >= 18;
};

function obtenerRegistro(){
  if(localStorage.length===0){
    console.log("No hay elementos almacenados en el localStorage");
  }else{
    console.log("listar todo aqui");


    let clave="RegistroUsuarios";
    let valor=localStorage.getItem(clave);
    let informacionFinal=JSON.parse(valor);
    console.log(informacionFinal);
    


    for (let i=0; i<informacionFinal.length; i++){
      let registro=informacionFinal[i];
      console.log(registro);
    };
    console.log(valor);
  }
};
