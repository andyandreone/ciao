	
	/*
	//Haces click en la imagen y te abre el modal
	var abririmagen=function(){
	$(".openimg").click(
		function() {
 		console.log("abriendo imagen");
 		$(".modal").css("display","block");	
 		var urlimagen=$(this).attr("id");
  		var urlimagen2= "images/zapatos/"+urlimagen+"/foto1.jpg";
 		$("#urlimagen").attr("src",urlimagen2);
		$("#vectorimagen").attr("class",urlimagen);
		
		});

	
	
	};
	 abririmagen();
	
		
	var cambiarderecha=function(){
 		$("#imagenderecha").click(function(){
 		var urlimagen=$("#vectorimagen").attr("class");	
 		console.log("derecha");
 		if(i<4){
 		i++;	
 		var urlimagen2="images/zapatos/"+urlimagen+"/foto"+i+".jpg";
 		$("#urlimagen").attr("src",urlimagen2);
 		}
 		else{
 		i=1;
 		var urlimagen2="images/zapatos/"+urlimagen+"/foto"+i+".jpg";
 		$("#urlimagen").attr("src",urlimagen2);
 		}
 		});
 	};

 	var cambiarizquierda=function(){
 		$("#imagenizquierda").click(function(){
 		var urlimagen=$("#vectorimagen").attr("class");		
 		console.log("izquierda");
  		if(i>1){
 		i--;	
 		var urlimagen2="images/zapatos/"+urlimagen+"/foto"+i+".jpg";
 		$("#urlimagen").attr("src",urlimagen2);
 		}
 		else{
 			i=4;
 		var urlimagen2="images/zapatos/"+urlimagen+"/foto"+i+".jpg";
 		$("#urlimagen").attr("src",urlimagen2);
 		}
 		});
 	};
	


	//Para cerrar la imagen
	$("#closeimagen").click(function(){
		$(".modal").css("display","none");
	});
	var i=1;
	cambiarderecha();
 	cambiarizquierda();
	*/


	