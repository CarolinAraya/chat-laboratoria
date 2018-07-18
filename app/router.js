function showRegisterPage() {
    $('#login-page').hide(); 
    $('#perfil-page').hide(); 
    $('#dashboard-page').hide();
    $('#register-page').show();
}

function showPerfilPage() {
    $('#login-page').hide(); 
    $('#perfil-page').show(); 
    $('#dashboard-page').hide();
    $('#register-page').hide();
}

function showDashboardPage() {
    $('#login-page').hide(); 
    $('#perfil-page').hide(); 
    $('#dashboard-page').show();
    $('#register-page').hide();
}

function showLoginPage() {
    $('#login-page').show(); 
    $('#perfil-page').hide(); 
    $('#dashboard-page').hide();
    $('#register-page').hide();
}