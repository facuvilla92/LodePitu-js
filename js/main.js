let verificar = true;
let intento = 1;

while (verificar && intento <= 3) {
    let nombreUsuario = prompt("Ingrese su nombre");

    if (nombreUsuario === "" || nombreUsuario === null) {
        alert("Por favor, escriba un nombre de usuario real. Le quedan " + (3 - intento) + " intentos.");
        intento++;
    } else {
        alert("¡Hola, " + nombreUsuario + "! Bienvenido a Carnicería LodePitu.");
        verificar = false;
        break;
    }
}

if (verificar) {
    alert("Ha excedido el número de intentos permitidos. Por favor, vuelva más tarde.");
} else {
    comprarAsado();
}

function comprarAsado() {
    let intentosRespuestaInvalida = 1;
    while (true) {
        let respuesta = prompt("¿Le gustaría comprar asado?").toLowerCase();

        if (respuesta === "si") {
            alert("¡Genial, comencemos!!");

            let cantidad = parseFloat(prompt("¿Cuántos kilogramos de asado le gustaría comprar?"));

            if ((cantidad) && cantidad > 0) {
                let precioPorKg = (cantidad > 3) ? 2700 : 3000;
                let precioTotal = cantidad * precioPorKg;

                alert("El precio total por " + cantidad + " kg de asado es $" + precioTotal);
                alert("¡Gracias por su compra! ¡Vuelva pronto!");
                break;
                ;
            } else {
                alert("Por favor, ingrese una cantidad válida.");
            }
        } else if (respuesta === "no") {
            alert("Gracias igualmente, ¡saludos!");
            return;
        } else {
            if (intentosRespuestaInvalida > 0) {
                alert("Respuestas válidas son 'si' o 'no'. Tienes una oportunidad más.");
                intentosRespuestaInvalida--;
            } else {
                alert("Ha agotado el número máximo de intentos para respuestas no válidas. Volviendo al menú principal.");
                return;
            }
        }
    }
}
