const listaUsuarios = [];
const bodyTable=document.getElementById("bodyTable");


let formulario = document.getElementById('formulario');


formulario.addEventListener('submit', function (evento) {
  evento.preventDefault();
  // console.clear();


  console.log(formulario)


  let nombres = document.getElementById("nombres").value;
  console.log("nombres", nombres);
  let apellidos = document.getElementById("apellidos").value;
  console.log("apellidos", apellidos);
  let correo = document.getElementById("correo_electronico").value;
  console.log("correo_electronico", correo);
  let contraseña = document.getElementById("contraseña").value;
  console.log("contraseña", contraseña);
  let confirmarContraseña = document.getElementById("confirmar_contraseña").value;
  console.log("confirmar_contraseña", confirmarContraseña);
  let nacimiento = document.getElementById("fecha_de_nacimiento").value;
  console.log("fecha_de_nacimiento", nacimiento);
  let direccion = document.getElementById("direccion").value;
  console.log("direccion", direccion);
  let categorias = document.getElementById("categorias").value;
  console.log("categorias", categorias);




  //objeto
  const usuario = {
    nombres: nombres,
    apellidos: apellidos,
    correo: correo,
    contraseña: contraseña,
    confirmarContraseña: confirmarContraseña,
    nacimiento: nacimiento,
    direccion: direccion,
    categorias: categorias,
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


  if (usuario.contraseña != usuario.confirmarContraseña) {


    Swal.fire({
      title: "La contraseña no coincide",
      width: 400,
      padding: "3em",
      color: "#716add",
      background: "#fff url(/images/trees.png)",
      backdrop: `
              rgba(0,0,123,0.4)
              url("https://i.gifer.com/XOsX.gif")
              left top
              no-repeat
            `
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


  const validacionDireccion = validarDireccion(usuario.direccion);
  console.log(validarDireccion(direccion));
  if (validacionDireccion == false) {
    Swal.fire({
      title: "Error!",
      text: "La direccion debe contener mas de 10 caracteres.",
      icon: "error"
    });
    return false;
  };


  listaUsuarios.push(usuario);
  var jasonUsuarios = JSON.stringify(listaUsuarios);
  localStorage.setItem('RegistroUsuarios', jasonUsuarios);
  obtenerRegistro();


});


function validarCorreo(email) {
  var verificarEmail = /^[a-zA-z0-9._-]+@gmail.com$/;
  return verificarEmail.test(email);
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


function validarDireccion(direccion) {
  var expresion = /^.{10,}$/;
  return expresion.test(direccion);
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
    bodyTable.innerHTML="";


    for (let i=0; i<informacionFinal.length; i++){
      let registro=informacionFinal[i];
      console.log(registro);


      bodyTable.innerHTML+=`
      <tr>
      <td class="border-t-2 border-gray-200 px-4 py-3">${registro.nombres+""+registro.apellidos}</td>
      <td class="border-t-2 border-gray-200 px-4 py-3">${registro.correo}</td>
      <td class="border-t-2 border-gray-200 px-4 py-3">${registro.nacimiento}</td>
      <td class="border-t-2 border-gray-200 px-4 py-3">${registro.direccion}</td>
      </tr>`;
    };
    console.log(valor);
  }
};
