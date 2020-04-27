$(document).ready(function(){
	
	//Slider

	if(window.location.href.indexOf('index') > -1){
  $('.galeria').bxSlider({
    mode: 'fade',
    captions: false, // titulo
    slideWidth: 1200,
    responsive:true,

  });
}

   // Posts

   if(window.location.href.indexOf('index') > -1){
   var posts = [
   		{
     			title : "Prueba de titulo 1",
     			date : 'Publicado el dia ' +moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"), 
     			content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum eligendi nemo et, incidunt sapiente perspiciatis molestias odio obcaecati nam illo ea quo repellendus aperiam numquam possimus recusandae dolores tempore labore!"
     		},
     		{
     			title : "Prueba de titulo 2",
     			date : new Date(),
     			content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum eligendi nemo et, incidunt sapiente perspiciatis molestias odio obcaecati nam illo ea quo repellendus aperiam numquam possimus recusandae dolores tempore labore!"
     		},
     		{
     			title : "Prueba de titulo 3",
     			date : new Date(),
     			content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum eligendi nemo et, incidunt sapiente perspiciatis molestias odio obcaecati nam illo ea quo repellendus aperiam numquam possimus recusandae dolores tempore labore!"
     		},
     		{
     			title : "Prueba de titulo 4",
     			date : new Date(),
     			content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum eligendi nemo et, incidunt sapiente perspiciatis molestias odio obcaecati nam illo ea quo repellendus aperiam numquam possimus recusandae dolores tempore labore!"
     		},
     		{
     			title : "Prueba de titulo 5",
     			date : new Date(),
     			content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum eligendi nemo et, incidunt sapiente perspiciatis molestias odio obcaecati nam illo ea quo repellendus aperiam numquam possimus recusandae dolores tempore labore!"
     		},
     		{
     			title : "Prueba de titulo 6",
     			date : new Date(),
     			content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum eligendi nemo et, incidunt sapiente perspiciatis molestias odio obcaecati nam illo ea quo repellendus aperiam numquam possimus recusandae dolores tempore labore!"
     		},
     ];


     posts.forEach((item, index) =>{
     		var post = ` 
     			<article class="post">
  				<h2>${item.title}</h2>
  				<span class="date">${item.date}</span>
  				<p>${item.content}</p>
  				<a href="#" class="button-more">Leer más</a>
  			</article>
  `;	
  $("#posts").append(post);				
  });
};

// Selector de Temas

var theme = $("#theme");
$("#to_green").click(function(){
			theme.attr("href", "css/green.css");
});			
$("#to_red").click(function(){
			theme.attr("href", "css/red.css");
});				
$("#to_blue").click(function(){
			theme.attr("href", "css/blue.css");

});

// Scroll para ir arriba

$(".subir").click(function(e){
			e.preventDefault(); // Esta linea es para asegurarse de que el link no se rediriga a otra pagina
		
		$('html, body').animate({
				scrollTop: 0
		}, 500);
		return false;
});

// Login Falso

$('#login form').submit(function(){
     var form_name = $('#form_name').val();

     localStorage.setItem('form_name', form_name); // Guardo el valor en el localStorage

})

var form_name = localStorage.getItem("form_name"); // LLamo al valor guardado en el LocalStorage

if(form_name != null && form_name != "undefined"){
  var about_parrafo = $('#about p');
about_parrafo.html("<br/><strong>Bienvenidos, "+form_name+"</stron>");
about_parrafo.append("<a href='#' id='logout'>Cerrar sección</a>");

$('#login form').hide();

$('#logout').click(function(){
    localStorage.clear();
    location.reload();
});
}

   // Acordeón

if(window.location.href.indexOf('about') > -1){ // signifa si existe la palabra "about" en la url
 $("#acordeon").accordion();
}


// Cambiar color al backgrond de las solapas del acordeón.

var solapa1 = $(".solapa1");
var solapa2 = $(".solapa2");
var solapa3 = $(".solapa3");


solapa1.click(function(){
    $(this).css("background", "red")
  });
solapa2.click(function(){
    $(this).css("background", "green")
  })
;solapa3.click(function(){
    $(this).css("background", "yellow")
  });


// Reloj

if(window.location.href.indexOf('reloj') > -1){

      setInterval(function(){
                    var reloj = moment().format("hh:mm:ss");
                    $('#reloj').html(reloj);
        },1000);
      

}

//  Validación ( desde la pagina de jquery validator se agrega el cdn al html y ademas $.validate)

if(window.location.href.indexOf('contact') > -1){

            
            $("form input[name='date']").datepicker({  // para que aparezca el calendario de validacion
              dateFormat: 'dd-mm-yy'
            });

             $.validate({
                lang: 'es',
                errorMessagePosition: 'top',
                scrollToTopOnError: true 
            });

}

}); 

