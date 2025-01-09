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


// GSAP ANIMATION
gsap.fromTo("#letter-a", 
    {
      rotationY: -180, 
    }, 
    {
      duration: 2, 
      rotationY: 0, 
      ease: "power2.inOut",
      repeat: -1, 
      yoyo: true, 
    }
  );
