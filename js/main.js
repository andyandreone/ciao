$(document).ready(function(){
    console.log('its working !');

    	
    cargarcontenido();
    
     $(document).on("scroll", function(){
    var desplazamientoActual = $(document).scrollTop();
   
 
    if(desplazamientoActual > 140 ){
        animacionLogoHide();    
    }
    if(desplazamientoActual < 140){
       	animacionLogoShow();
    }



});

 });    

