
$(document).ready(main);

$(window).on('load',() => {
  $('main','header','footer').css('opacity','0')
  setTimeout(() =>
      {
        loader.animate({opacity:'0'},400);
        
      }, 1100)
  setTimeout(() =>
  {
    loader.css('display','none');
    bod.css('overflow-y', 'scroll');
    $('main').animate({opacity:'1'},300);
    $('header','footer','.imagenPrincipal').animate({opacity:'1'},1000);
    
  }, 1500)
  }
  );
    


//VARIABLES
const loader = $('.preloader');
let contador = false;
let esconder = false;
const ma = $(".menu");
const menbt = $(".btnmenu");
const bod= $('body');
const logo=$(".logolh");
let clickado =true;
let headt = true;


//FUNCIONES
function onOff(){

    if(contador===false)
      {
        esconder=false;
        esconderOnOff();
        $('nav').animate({top:'0', opacity:'1'},500);
        ma.removeClass("menuanimado2");
        ma.addClass("menuanimado");
        contador=true;
           setTimeout(() =>
        {
         clickado = false;
        }, 500);
      }
  else
      {
        $('nav').animate ({top:'-50%', opacity:'0'},500);
          ma.removeClass("menuanimado");
          ma.addClass("menuanimado2");
        setTimeout(() =>  
        {
          contador=false;
          clickado = true;
          esconder=true;
           esconderOnOff();
        }, 500);
      }
}
function esconderOnOff() {
  if (esconder) 
  {
  $('nav').css('display','none');
  }
  else 
  {
     $('nav').css('display','block');
  }
}   

//PROGRAMA
function main()
{
  //EVENTOS USUARIO

 menbt.click(()=>{
        onOff();
      });
 bod.click(()=>{

        if(!clickado && contador)
        {
          onOff();
        }
      });
    bod.on('swipeup',()=>{
              if(!clickado && contador)
        {
          onOff();
        }
    });
    bod.on('swipedown',()=>{
              if(!clickado && contador)
        {
          onOff();
        }
    });
    $('.lh').click(()=>{
      if(headt){
        headt=false;
        $('.fondoheader').attr('src','Recursos\\IMG\\SVG\\header2.svg');
      }
      else{
      headt=true;
        $('.fondoheader').attr('src','Recursos\\IMG\\SVG\\header.svg');}
      
    });
 //MENU LINKS
$('#inicio').click(() => {
        $([document.documentElement, document.body]).animate({

        scrollTop: $(".imagenPrincipal").offset().top-$('.fondoheader img').height()
    }, 500);
       $('.uno').css('background-color', '#146a75');
           $(' .dos, .cuatro, .tres, .cinco').css('background-color', 'rgba(0,0,0,0.604)');
});

$('#nosotros').click(() =>{
  $([document.documentElement, document.body]).animate({
      scrollTop: $(".secInicio").offset().top - $('.fondoheader').height()
  }, 500);
     $('.dos').css('background-color', '#146a75');
         $('.uno, .cuatro, .tres, .cinco').css('background-color', 'rgba(0,0,0,0.604)');
});
$('#servicios').click(() =>{
  $([document.documentElement, document.body]).animate({
      scrollTop: $(".secServicios").offset().top -$('.fondoheader').height()
    
  }, 600);
    $('.tres').css('background-color', '#146a75');
       $('.uno, .dos, .cuatro, .cinco').css('background-color', 'rgba(0,0,0,0.604)');
});

$('#referencias').click(() =>{
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".cuadrado-container").offset().top -$('.fondoheader').height()
      
    }, 600);
      $('.cuatro').css('background-color', '#146a75');
         $('.uno, .dos, .tres, .cinco').css('background-color', 'rgba(0,0,0,0.604)');
});



}




