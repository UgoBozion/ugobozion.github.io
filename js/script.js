console.log("script chargé !");

$(document).ready(function() {
  const backToTopButton = $('#btn-back-to-top');


  backToTopButton.hide();


  $("body").on("scroll", function() {
    let scrollPosition = $(this).scrollTop();
    console.log("Scroll détecté :", scrollPosition);

    if (scrollPosition > 300) {
      console.log("Affichage du bouton !");
      backToTopButton.fadeIn();
    } else {
      backToTopButton.fadeOut();
    }
  });


  backToTopButton.on("click", function() {
    $("html, body").animate({ scrollTop: 0 }, 800);
  });
});


