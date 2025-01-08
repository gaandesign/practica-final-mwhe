// console.log("online");

$(document).ready(function(){
    // POP UP
    // Muestra el pop-up de cookies después de 2 segundos
    setTimeout(function(){
      $("#cookie-popup").fadeIn();
    }, 2000);

    // Maneja el clic en el botón de aceptar cookies
    $("#accept-cookies").click(function(){
        $("#cookie-popup").fadeOut();
    });   

    // Maneja el clic en el botón de rechazar cookies
    $("#reject-cookies").click(function() {
        $("#cookie-popup").fadeOut();
    });
});