const valor_ticket = 200;

let desc_estudiante=80;
let desc_trainee=50;
let desc_junior=15;

let nombre = document.getElementById("nombre");
let error_div_nombre = document.getElementById("mje_error_nombre");

let apellido = document.getElementById("apellido");
let error_div_apellido = document.getElementById("mje_error_apellido");

let correo = document.getElementById("correo");
let error_div_correo = document.getElementById("mje_error_correo");

let cantidad = document.getElementById("cantidad");
let error_div_cantidad = document.getElementById("mje_error_cantidad");

let categoria = document.getElementById("categoria");
let error_div_categoria = document.getElementById("mje_error_categoria");




function quitarClaseError  ()  {
  let listaNodos = document.querySelectorAll(".form-control, .form-select");
    for (let i = 0; i < listaNodos.length; i++){
      listaNodos[i].classList.remove('is-invalid');
  }
  let listaNodosdiv = document.querySelectorAll(".invalid-feedback");
    for (let i = 0; i < listaNodosdiv.length; i++){
      listaNodosdiv[i].classList.remove('mostrar');
     
  }
}
  function resumen () {
  
    quitarClaseError();

  if (nombre.value ==="") {
    
    nombre.classList.add("is-invalid");
    error_div_nombre.classList.add("mostrar")
    nombre.focus();
        return;
    }
  if (apellido.value ==="") {
      apellido.classList.add("is-invalid");
      error_div_apellido.classList.add("mostrar")
          apellido.focus();
          return;
      }
  if (correo.value ==="") {
        correo.classList.add("is-invalid");
        error_div_correo.classList.add("mostrar")
            correo.focus();
            return;
        } 

function emailValido (mail) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
}
if(!emailValido(correo.value)){
  correo.classList.add("is-invalid");
 
  correo.focus();
  return;
 }
 if ((cantidad.value ==0)||(isNaN(cantidad.value) )){
    
  cantidad.classList.add("is-invalid");
  error_div_cantidad.classList.add("mostrar")
  cantidad.focus();
      return;
  }
  if (categoria.value ==="") {
    
    categoria.classList.add("is-invalid");
    error_div_categoria.classList.add("mostrar")
    categoria.focus();
        return;
    }

let total_sin_descuento =   valor_ticket * cantidad.value ;
let total_tickets;

switch(categoria.value) {
  case "0":
    total_tickets=total_sin_descuento;
 break;
  
case "1":
  total_tickets=total_sin_descuento*(1-(desc_estudiante/100));
  break;

  case "2":
  total_tickets=total_sin_descuento*(1-desc_trainee/100);
  break;

  case "3":
  total_tickets=total_sin_descuento*(1-desc_junior/100);
  break;
}

pago.innerHTML=total_tickets;

}



function borrar ()  {
  quitarClaseError  ();
}
btn_resumen.addEventListener('submit',resumen);
btn_borrar.addEventListener('click',borrar);




















/*


function resumen() {

}

let total_tickets= cantidad.valor_ticket
switch(categoria.value) {
  case "0":
    total_tickets=total_tickets;
 break;
  
case "1":
  total_tickets=total_tickets*(1-desc_estudiante/100);
  break;

  case "2":
  total_tickets=total_tickets*(1-desc_trainee/100);
  break;

  case "3":
  total_tickets=total_tickets*(1-desc_junior/100);
  break;
}

  */


