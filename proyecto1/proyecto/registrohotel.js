const listaHoteles = [];



let formulario = document.getElementById('formulario');


formulario.addEventListener('submit', function (evento) {
  evento.preventDefault();
  console.clear();


  console.log(formulario)


  let nombre = document.getElementById("nombre_hotel").value;
  console.log("nombre_hotel", nombre);

  let correo = document.getElementById("correo_electronico").value;
  console.log("correo_electronico", correo);

  let contactoNum = document.getElementById("contacto").value;
  console.log("contacto", contactoNum);

  let contraseña = document.getElementById("contraseña").value;
  console.log("contraseña", contraseña);

  let confirmar_contraseña = document.getElementById("confirmar_contraseña").value;
  console.log("confirmar_contraseña", confirmar_contraseña);

  let direccion = document.getElementById("direccion").value;
  console.log("direccion", direccion);
  
  let departamento = document.getElementById("departamento").value;
  console.log("departamento", departamento);

  formulario.reset();



  //objeto
  const hotel = {
    nombre: nombre,
    correo: correo,
    contactoNum: contactoNum,
    contraseña: contraseña,
    confirmar_contraseña: confirmar_contraseña,
    direccion: direccion,
    departamento: departamento,
  };


  console.log("Info hotel==>", hotel);


  const correoVerificado = validarCorreo(hotel.correo);
  console.log(correoVerificado);


  if (!correoVerificado) {
    Swal.fire({
      title: "Error!",
      text: "Correo Invalido!!",
      icon: "error"
    });
    return false;
  };


  if (hotel.contraseña.length < 8) {
    Swal.fire({
      title: "Error!",
      text: "La contraseña debe tener al menos 8 caracteres de longitud.",
      icon: "error"
    });
    return false;
  };


  if (hotel.contraseña != hotel.confirmar_contraseña) {


    Swal.fire({
      title: "Error!",
      text: "La contraseña no coincide.",
      icon: "error"
    });
    return false;
  };


  const validacionDireccion = validarDireccion(hotel.direccion);
  console.log(validarDireccion(direccion));
  if (validacionDireccion == false) {
    Swal.fire({
      title: "Error!",
      text: "La direccion debe contener mas de 10 caracteres.",
      icon: "error"
    });
    return false;
  };


  listaHoteles.push(hotel);
  var jasonHoteles = JSON.stringify(listaHoteles);
  localStorage.setItem('RegistroHoteles', jasonHoteles);
  obtenerRegistro();


});


function validarCorreo(email) {
  var verificarEmail = /^[a-zA-z0-9._-]+@gmail.com$/;
  return verificarEmail.test(email);
};


function validarDireccion(direccion) {
  var expresion = /^.{10,}$/;
  return expresion.test(direccion);
};

function obtenerRegistro(){
  if(localStorage.length===0){
    console.log("No hay elementos almacenados en el localStorage");
  }else{
    console.log("listar todo aqui");


    let clave="RegistroHoteles";
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
