 $(document).ready(() =>
    {
      $(".queApareceyEscala, .queAparece, .queApareceIzqDer").each(function()
{ $(this).addClass("op");
    });
    });  
$(window).on('scroll',()=>{ 

    let windBottom = $(window).scrollTop() + $(window).outerHeight();

    let windTop = $(window).scrollTop();
   
$(".queApareceyEscala").each(function()
{
    let thisBottom = $(this).offset().top + $(this).outerHeight();
    let thisTop = $(this).offset().top;
 
        
        
   
       if(windBottom>thisTop||windTop>thisBottom)
       { if ($(this).hasClass('desapareceryescala')) {
        $(this).removeClass("desapareceryescala");
        if (!$(this).hasClass('apareceryescala')) {
        $(this).addClass("apareceryescala");
       }
       }
       }
    
       if(windBottom<thisTop || windTop>thisBottom){
               if ($(this).hasClass('apareceryescala')) {
        $(this).removeClass("apareceryescala");}
        $(this).addClass("desapareceryescala");   
               }
       
});
      
       $(".queAparece").each(function()
   
     {
   
    let thisBottom = $(this).offset().top + $(this).outerHeight();
    let thisTop = $(this).offset().top ;

 
       if(windBottom>thisTop||windTop>thisBottom)
   { if ($(this).hasClass('desaparecer')) 
       {$(this).removeClass("desaparecer");
         $(this).addClass("aparecer");
       }
   }
    
       if(windBottom<thisTop ||windTop>thisBottom){
         $(this).removeClass("aparecer");
         $(this).addClass("desaparecer");
         
       }
   
     });
     $(".queApareceIzqDer").each(function()
   
     {
   
    let thisBottom = $(this).offset().top + $(this).outerHeight();
    let thisTop = $(this).offset().top ;

 
       if(windBottom>thisTop||windTop>thisBottom)
    {if ($(this).hasClass('desaparecerizq')) 
       {$(this).removeClass("desaparecerizq");
         $(this).addClass("aparecerizq");
       }
    }
    
       if(windBottom<thisTop ||windTop>thisBottom){
         $(this).removeClass("aparecerizq");
         $(this).addClass("desaparecerizq");
         
       }
   
     });
     $(".quebackimg").each(function()
   
     {
       let thisBottom = $(this).offset().top + $(this).outerHeight();

    let thisTop = $(this).offset().top ;

       if(windBottom>thisTop||windTop>thisBottom)
 {
 if ($(this).hasClass('desaparecerbki')) 
   
       {$(this).removeClass("desaparecerbki");
       
         $(this).addClass("aparecerbki");
       }
 }
       
    
       if(windBottom<thisTop ||windTop>thisBottom){
         $(this).removeClass("aparecerbki");
         $(this).addClass("desaparecerbki");
         
       }
   
     });

     
    });
   