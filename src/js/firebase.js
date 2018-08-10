// Registrarse

function fire() {
  
  home();

  let email = document.getElementById('mail').value;
  let password = document.getElementById('pass').value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() =>{
      console.log('bien, se loguea!');
    })
    .catch(function(error) {
      // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
      // ...
    });

}

// loguearse con su usuario registrado
/*
firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});

// obtener informacion del usuario

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    // ...
  } else {
    // User is signed out.
    // ...
  }
});
*/