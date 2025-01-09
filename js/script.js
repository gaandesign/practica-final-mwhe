// console.log("online");

// JQUERY 
$(document).ready(function () {
    setTimeout(function () {
        $("#cookie-popup").fadeIn();
    }, 2000);

    $("#accept-cookies").click(function () {
        $("#cookie-popup").fadeOut();
    });

    $("#reject-cookies").click(function () {
        $("#cookie-popup").fadeOut();
    });
});


// LOCOMOTIVE SCROLL 
document.addEventListener("DOMContentLoaded", function () {
    const scroll = new LocomotiveScroll({
        el: document.querySelector("#introduccion[data-scroll-container]"), 
        smooth: true, 
        multiplier: 1.5, 
    });
});
