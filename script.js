function iniciarSesion() {
    var usuario = document.getElementById('usuario').value;
    var contraseña = document.getElementById('contraseña').value;

    if (usuario === '19240569' && contraseña === 'feralomel3') {
        window.location.href = 'informacion_angular.html';
    } else {
        alert('Credenciales incorrectas. Inténtalo de nuevo.');
    }
}
