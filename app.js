window.onload = () => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            //Si estamos logueados
            loggedOut.style.display = "none";
            loggedIn.style.display = "block";
            console.log("User > " + JSON.stringify(user));
        } else {
            //No estamos logueados
            loggedOut.style.display = "block";
            loggedIn.style.display = "none";

            messageContainer.innerHTML = "";
        }
    });

    firebase.database().ref('messages')
        .limitToLast(2)//Filtro paran no obtener todos los mensajes
        .once('value', (snap) => {
            messageContainer.innerHTML +=
            `<p>Nombre : ${snap.val().creatorName}</p>
             <p>${snap.val().text}</p>`;
        })
        .then((messages) => {
            console.log("Mensajes > "+JSON.stringify(messages));
        })
        .catch(() => {

        })

    // Acá comenzamos a escuchar por nuevos mensajes usando el evento
    // on child_added
    firebase.database().ref('messages')
        .on('child_added', (newMessage) => {
            messageContainer.innerHTML +=
                `<p>Nombre : ${newMessage.val().creatorName}</p>
                 <p>${newMessage.val().text}</p>`;
        });
};

function register() {
    const emailValue = email.value;
    const passwordValue = password.value;
    firebase.auth().createUserWithEmailAndPassword(emailValue, passwordValue)
        .then(() => {
            console.log("Usuario registrado");
        })
        .catch((error) => {
            console.log("Error de firebase > " + error.code);
            console.log("Error de firebase, mensaje > " + error.message);
        });
}

function login() {
    const emailValue = email.value;
    const passwordValue = password.value;
    firebase.auth().signInWithEmailAndPassword(emailValue, passwordValue)
        .then(() => {
            console.log("Usuario con login exitoso");
        })
        .catch((error) => {
            console.log("Error de firebase > " + error.code);
            console.log("Error de firebase, mensaje > " + error.message);
        });
}

function logout() {
    firebase.auth().signOut()
        .then(() => {
            console.log("Chao");
        })
        .catch();
}

function loginFacebook() {
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
}