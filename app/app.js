window.onload = () => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {             //Si estamos logueados

           showDashboardPage(); //Cambiar a la pagina de dasboard
           setupMessages();     //Dejar todo listo para mostrar mensajes.

        } else {                //No estamos logueados
            
           showLoginPage();     //Cambiar a la pagina de login
        }
    });
};