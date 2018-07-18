
function sendMessage() {//pensar qué debe ocurrir para enviar un mensaje, desde el usuario
    const currentUser = firebase.auth().currentUser;
    const messageText = document.getElementById('message-box').value;

    document.getElementById('message-box').value = "";

    //para tener una nueva llave en la colección messages
    const newMessageKey = firebase.database().ref().child('messages').push().key; //metodo de firebase

    firebase.database().ref(`messages/${newMessageKey}`).set({
        creator : currentUser.uid,
        creatorName : currentUser.displayName,
        text : messageText,
        //profile_picture: imgurl
    }); //ref, ruta para guardar los mensajes
}

function setupMessages() {
    firebase.database().ref('messages')
                .limitToLast(100)
                .on('child_added', (newMessage) => {
                    document.getElementById("message-container").innerHTML +=
                        `<li class="right clearfix">
                            <div class="chat-body clearfix">
                                <div class="header">
                                    <small class=" text-muted">
                                        <span class="glyphicon glyphicon-time"></span>13 mins ago</small>
                                    <strong class="pull-right primary-font">${newMessage.val().creatorName}</strong>
                                </div>
                                <p>${newMessage.val().text}</p>
                            </div>
                        </li>`;
                });
}

