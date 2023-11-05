const valor_ticket = 200;

const desc_estudiante = 0.8; // Uso 0.8 en lugar de 80 para representar el 80% de descuento
const desc_trainee = 0.5;    // Uso 0.5 en lugar de 50 para representar el 50% de descuento
const desc_junior = 0.15;    // Uso 0.15 en lugar de 15 para representar el 15% de descuento

const nombre = document.getElementById("nombre");
const error_div_nombre = document.getElementById("mje_error_nombre");

const apellido = document.getElementById("apellido");
const error_div_apellido = document.getElementById("mje_error_apellido");

const correo = document.getElementById("correo");
const error_div_correo = document.getElementById("mje_error_correo");

const cantidad = document.getElementById("cantidad");
const error_div_cantidad = document.getElementById("mje_error_cantidad");

const categoria = document.getElementById("categoria");
const error_div_categoria = document.getElementById("mje_error_categoria");

const pago = document.getElementById("pago"); // Agregué esta línea para obtener el elemento de pago

function quitarClaseError() {
    let listaNodos = document.querySelectorAll(".form-control, .form-select");
    for (let i = 0; i < listaNodos.length; i++) {
        listaNodos[i].classList.remove('is-invalid');
    }
    let listaNodosdiv = document.querySelectorAll(".invalid-feedback");
    for (let i = 0; i < listaNodosdiv.length; i++) {
        listaNodosdiv[i].classList.remove('mostrar');
    }
}

function resumen(event) {
    event.preventDefault(); 

    quitarClaseError();

    if (nombre.value === "") {
        nombre.classList.add("is-invalid");
        error_div_nombre.classList.add("mostrar");
        nombre.focus();
        return;
    }
    if (apellido.value === "") {
        apellido.classList.add("is-invalid");
        error_div_apellido.classList.add("mostrar");
        apellido.focus();
        return;
    }
    if (correo.value === "") {
        correo.classList.add("is-invalid");
        error_div_correo.classList.add("mostrar");
        correo.focus();
        return;
    }

    function emailValido(mail) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
    }

    if (!emailValido(correo.value)) {
        correo.classList.add("is-invalid");
        correo.focus();
        return;
    }

    if (cantidad.value == 0 || isNaN(cantidad.value)) {
        cantidad.classList.add("is-invalid");
        error_div_cantidad.classList.add("mostrar");
        cantidad.focus();
        return;
    }
    if (categoria.value === "") {
        categoria.classList.add("is-invalid");
        error_div_categoria.classList.add("mostrar");
        categoria.focus();
        return;
    }

    let total_sin_descuento = valor_ticket * cantidad.value;
    let total_tickets;

    switch (categoria.value) {
        case "0":
            total_tickets = total_sin_descuento;
            break;

        case "1":
            total_tickets = total_sin_descuento * (1 - desc_estudiante);
            break;

        case "2":
            total_tickets = total_sin_descuento * (1 - desc_trainee);
            break;

        case "3":
            total_tickets = total_sin_descuento * (1 - desc_junior);
            break;
    }

    pago.innerHTML = total_tickets.toFixed(2); // Mostrar el total con 2 decimales
}

function borrar() {
    quitarClaseError();
    pago.innerHTML = "";
}

const btn_resumen = document.getElementById("btn_resumen");
btn_resumen.addEventListener('click', resumen);

const btn_borrar = document.getElementById("btn_borrar");
btn_borrar.addEventListener('click', borrar);
