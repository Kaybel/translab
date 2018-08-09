// dom
// botones con funcionalidad para visibilizar otras páginas.

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
  console.log('2');
  $('#index').hide();
  $('#registro').show();
  $('#options').hide();
  $('#profile').hide();
  $('#answers').hide();
  $('#checkCash').hide();
  $('#calculate').hide();
  $('#home').hide();
}
//para ver botones de fondo sin desplegar el dropdown
function showOptions() {
  console.log('3');
  $('#index').hide();
  $('#registro').hide();
  $('#options').show();
  $('#profile').hide();
  $('#answers').hide();
  $('#checkCash').hide();
  $('#calculate').hide();
  $('#home').hide();
}
//para ver el perfil
function showProfile() {
  console.log('4');
  $('#index').hide();
  $('#registro').hide();
  $('#options').show();
  $('#profile').show();
  $('#answers').hide();
  $('#checkCash').hide();
  $('#calculate').hide();
  $('#home').hide();
}
//para ver las preguntas frecuentes
function showComunAnswers() {
  console.log('5');
  $('#index').hide();
  $('#registro').hide();
  $('#options').show();
  $('#profile').hide();
  $('#answers').show();
  $('#checkCash').hide();
  $('#calculate').hide();
  $('#home').hide();
}
//para ver el saldo
function checkCash() {
  console.log('6');
  $('#index').hide();
  $('#registro').hide();
  $('#options').show();
  $('#profile').hide();
  $('#answers').hide();
  $('#checkCash').show();
  $('#calculate').hide();
  $('#home').hide();
}
// para calcular tasa
function calculate() {
  console.log('7');
  $('#index').hide();
  $('#registro').hide();
  $('#options').show();
  $('#profile').hide();
  $('#answers').hide();
  $('#checkCash').hide();
  $('#calculate').show();
  $('#home').hide();
}
//para ver el dropdown
function home() {
  console.log('8');
  $('#index').hide();
  $('#registro').hide();
  $('#options').show();
  $('#profile').hide();
  $('#answers').hide();
  $('#checkCash').hide();
  $('#calculate').hide();
  $('#home').show();
}