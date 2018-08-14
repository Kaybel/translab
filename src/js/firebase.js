// Registrarse

function fire() {
  home();
  let email = document.getElementById('mail').value;
  let password = document.getElementById('pass').value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
    })
    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
    });

}
// obtener informacion del usuario y que lo imprima en la página de perfil
  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    let email = user.email;
    printUser.innerHTML = email;
  }
});

// subir la tarjeta ingresada en firebase
function bipInFirebase(inputTarjeta) {
  firebase.database().ref("tarjeta").push(inputTarjeta)
    .then(() => {
      console.log("tarjeta bip en fb");
    })
    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
 }

// select 
firebase.database().ref("/tarjeta")
  .on("child_added", card => {
    let numeroTarjetaBip = card.val().bip;
    selectDeBip.innerHTML += `
   <select>
   <option>${numeroTarjetaBip}</option>
   </select>`;
  });

/*
// loguearse con su usuario registrado
firebase.auth().signInWithEmailAndPassword(email, password)
.then(()=>{
})
.catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
*/