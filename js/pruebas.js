let datoCliente = prompt("Ingrese su nombre y apellido");
let fechaCita = prompt("ingrese la fecha (formato: DD-MM-AAA)");
let horaCita = prompt("ingrese la hora formato: HH:MM");

const horaAbierto = 9;
const horaCerrado = 19;
const horarioAtencion = [];


if (horaCita < horaAbierto || horaCita > horaCerrado) {
    alert(`${datoCliente} Nuestro horario es desde las 9hr hasta las 19hr`);
} else {
    alert(`${datoCliente} Gracias por Preferirnos te esperamos el dia ${fechaCita} a las ${horaCita}hr`);
}
horarioAtencion.push(horaAbierto);



