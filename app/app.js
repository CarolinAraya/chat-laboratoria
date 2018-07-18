window.onload = () => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            //Si estamos logueados
           showDashboardPage();
            console.log("User > " + JSON.stringify(user));

            // Acá comenzamos a escuchar por nuevos mensajes usando el evento
            // on child_added
           /*  firebase.database().ref('messages')
                .limitToLast(2)
                .on('child_added', (newMessage) => {
                    messageContainer.innerHTML +=
                        `<p>Nombre : ${newMessage.val().creatorName}</p>
                         <p>${newMessage.val().text}</p>`;
                }); */
        } else {
            //No estamos logueados
           showLoginPage();
        }
    });
};