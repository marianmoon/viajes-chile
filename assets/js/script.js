$(function (){
    $('[data-bs-toggle="tooltip" ]').tooltip();

    $('#enviarCorreo').click(function(){
      alert("Mensaje enviado correctamente");
    });
});

    $(document).scroll(function(){
    const y = $("html").scrollTop();
    y > 300 ? $('nav').addClass("nav-black") : $("nav").removeClass("nav-black");
    });