function login() {
    const emailValue = document.getElementById("login-username").value;
    const passwordValue = document.getElementById("login-password").value;
    firebase.auth().signInWithEmailAndPassword(emailValue, passwordValue)
        .then(() => {
            console.log("Usuario con login exitoso");
        })
        .catch((error) => {
            console.log("Error de firebase > " + error.code);
            console.log("Error de firebase, mensaje > " + error.message);
        });
}

function loginWithFacebook() {
    const provider = new firebase.auth.FacebookAuthProvider();
    //provider.addScope("user_birthday"); tienen que pedirle permiso a facebook
    provider.setCustomParameters({
        'display': 'popup'
    });
    firebase.auth().signInWithPopup(provider)
        .then(() => {
            console.log("Login con facebook");
        })
        .catch((error) => {
            console.log("Error de firebase > " + error.code);
            console.log("Error de firebase, mensaje > " + error.message);
        });
    scope: 'email'//acceder al email del usuario

}

function logout() {
    firebase.auth().signOut()
        .then(() => {
            console.log("Chao");
        })
        .catch();
}