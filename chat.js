
function sendMessage() {//pensar qué debe ocurrir para enviar un mensaje, desde el usuario
    const currentUser = firebase.auth().currentUser;
    const messageAreaText = messageArea.value;

    //para tener una nueva llave en la colección messages
    const newMessageKey = firebase.database().ref().child('messages').push().key; //metodo de firebase

    firebase.database().ref(`messages/${newMessageKey}`).set({
        creator : currentUser.uid,
        creatorName : currentUser.displayName,
        text : messageAreaText,
    }); //ref, ruta para guardar los mensajes
}