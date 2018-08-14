// dom
// botones con funcionalidad para visibilizar otras páginas.
//pagina de inicio para ingresar a la app
function showIndextPage() {
  $('#index').show();
  $('#registro').hide();
  $('#options').hide();
  $('#profile').hide();
  $('#answers').hide();
  $('#checkCash').hide();
  $('#calculate').hide();
  $('#home').hide();
}
//para registrarse
function showRegisterPage() {
  $('#index').hide();
  $('#registro').show();
  $('#options').hide();
  $('#profile').hide();
  $('#answers').hide();
  $('#checkCash').hide();
  $('#calculate').hide();
  $('#home').hide();
  closeMenu()
}
//para ver el perfil
function showProfile() {
  $('#index').hide();
  $('#registro').hide();
  $('#options').show();
  $('#profile').show();
  $('#answers').hide();
  $('#checkCash').hide();
  $('#calculate').hide();
  $('#home').hide();
  closeMenu()
}
//para ver las preguntas frecuentes
function showComunAnswers() {
  $('#index').hide();
  $('#registro').hide();
  $('#options').show();
  $('#profile').hide();
  $('#answers').show();
  $('#checkCash').hide();
  $('#calculate').hide();
  $('#home').hide();
  closeMenu()
}
//para ver el saldo
function checkCash() {
  $('#index').hide();
  $('#registro').hide();
  $('#options').show();
  $('#profile').hide();
  $('#answers').hide();
  $('#checkCash').show();
  $('#calculate').hide();
  $('#home').hide();
  closeMenu()
}
// para calcular la tarifa
function calculate() {
  $('#index').hide();
  $('#registro').hide();
  $('#options').show();
  $('#profile').hide();
  $('#answers').hide();
  $('#checkCash').hide();
  $('#calculate').show();
  $('#home').hide();
  closeMenu()
}
//para ver la pagina de inicio
function home() {
  $('#index').hide();
  $('#registro').hide();
  $('#options').show();
  $('#profile').hide();
  $('#answers').hide();
  $('#checkCash').hide();
  $('#calculate').hide();
  $('#home').show();
  closeMenu()
}
// para que imprima la info de la tarjeta en la pagina.
 let inputTarjeta = document.getElementById("tarjeta");
 function bipTar() {
  let objTarjeta = {
    bip: inputTarjeta.value
  };
 
  bipInFirebase(objTarjeta);
  inputTarjeta.value = "";
  let divHTMLTarjeta = document.getElementById("cardTarj");
  let divDeImpresionBip = document.createElement("div");
  divHTMLTarjeta.appendChild(divDeImpresionBip);
  divDeImpresionBip.innerHTML = Object.values(objTarjeta);
 };