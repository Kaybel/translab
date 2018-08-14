
let tarj = {};

function api(numeroTarjetaBip) {
  fetch(`http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${numeroTarjetaBip}`)
    .then(response => response.json())
    .then(data => {
      tarj = data;
    })
    .catch(error => {
      console.error('tarjeta invalida');
      console.error('ERROR > ' + error.stack);
    });
}