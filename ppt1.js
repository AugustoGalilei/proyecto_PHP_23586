/*clave guardada*/
const passw = "q";
/* ciclo para ingreso de clave*/
var ingreso;
while (ingreso != passw) {
  ingreso = prompt("Ingrese clave: ");

  if (ingreso == passw) {
    alert("Acceso permitido");

    /*empieza el juego*/
    var i;
    let puntosU = 0;
    let puntosM = 0;
    let eleccionMaq = "tijera";
    /*ciclo que cuenta los tres intento*/
    for (i = 1; i <= 3; i++) {
      /*ingreso del usuario Todo a minusculas*/
      let eleccionUsuario = prompt(
        "ingrese Piedra; Papel o Tijera"
      ).toLowerCase();

      /*evalua si eleccion usuario es valida*/
      if (
        eleccionUsuario == "piedra" ||
        eleccionUsuario == "papel" ||
        eleccionUsuario == "tijera"
      ) {
        /*evalua quien gana*/
        if (eleccionUsuario == eleccionMaq) {
          alert(
            "Intento " +
              i +
              " usuario: " +
              puntosU +
              "-" +
              " maquina: " +
              puntosM
          );
        } else if (
          (eleccionUsuario == "piedra" && eleccionMaq == "tijera") ||
          (eleccionUsuario == "papel" && eleccionMaq == "piedra") ||
          (eleccionUsuario == "tijera" && eleccionMaq == "papel")
        ) {
          puntosU++;
          alert(
            "Intento" +
              i +
              " usuario: " +
              puntosU +
              "-" +
              " maquina: " +
              puntosM
          );
        } else {
          puntosM++;
          alert(
            "Intento" +
              i +
              " usuario: " +
              puntosU +
              "-" +
              " maquina: " +
              puntosM
          );
        }
      } else {
        alert("Eleccion no valida Intente nuevamente");
        i = i - 1;
      }
    }
    document.getElementById("mensaje").innerHTML = "el juego ha terminado";

    console.log("el juego ha terminado");

    if (puntosU == puntosM) {
      document.getElementById("resultado").innerHTML =
        "resultado Final = EMPATE";
      console.log("resultado Final = EMPATE");
    } else if (puntosU > puntosM) {
      document.getElementById("resultado").innerHTML = " Ganador = usuario";
      console.log(" Ganador = usuario");
    } else {
      document.getElementById("resultado").innerHTML = " Ganador = maquina";
      console.log(" Ganador = maquina");
    }
  } else {
    alert("Clave incorrecta, vuelva a intentar");
  }
}
