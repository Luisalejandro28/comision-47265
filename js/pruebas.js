// correcion
let nombreUser = prompt("Ingrese su nombre y apellido");
let turnoFecha = prompt("Ingrese la fecha (formaro; dd/mm//aaaa)");
let turnoHora = prompt("Ingrse la hora (formato: hh:mm)");


const hrInicio = 9;
const hrFin = 20;
const turnos =(nombreUser,turnoFecha,turnoHora) =>{
  while(turnoHora < hrInicio || turnoHora > hrFin){
    alert("Intenta con una hora dentro de nuestro horario");
    alert("Nuestro horario de Atencion es de 9hr a 20hrs");
    turnoHora = parseInt(prompt("Ingrese la hora en (formato: HH:MM)"))
  }
  if(turnoHora >= hrInicio && turnoHora <= hrFin){
    alert(`${nombreUser} tu turno es para el ${turnoFecha} a las ${turnoHora}hrs`)
  }
  alert ("Gracias por preferirinos");
}
turnos(nombreUser,turnoFecha,turnoHora);









































































// let nombreUser = prompt("Ingrese su nombre");
// let turnoFecha = prompt("Ingrese Fecha (DD/MM/AAAA)");
// let turnoHora = prompt("Ingrese la Hora (HH:MM)");

// const turnos = (nombreUser, turnoFecha, turnoHora) => {
//   const hrInicio = 9;
//   const hrFin = 19;

//   if (turnoHora >= hrInicio && turnoHora <= hrFin) {
//     alert(`${nombreUser} tu turno es para el ${turnoFecha} a las ${turnoHora}hrs`);
//   } else if (turnoHora < hrInicio || turnoHora > hrFin) {
//     alert("Intenta con una hora dentro de nuestro horario");
//     alert("nuestro horario es de 9hrs a 19hrs");
//   } else {
// }
// alert("Gracias por preferirnos");
// };
// turnos(nombreUser, turnoFecha, turnoHora);