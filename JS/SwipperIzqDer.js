//con esto se puede hacer un slide
$(document).ready(main);/*PARA QUE EJECUTE LA FUNCION LUEGO DE CARGAR LA PAGINA*/

//VARIABLES
let i = 0;
let iDos= 1;
let iTres= 2;
let animDur=700;
let salidaDur = animDur + 10;

let ilen = 6;
let imagenes = new Array(ilen);
imagenes[0] = 'rgba(202,0,61,0.569)';
imagenes[1] = 'rgba(46,0,202,0.553)';
imagenes[2] = 'rgba(41,159,244,0.55)';
imagenes[3] = 'rgba(222,222,222,0.651)';
imagenes[4] = 'rgba(218,189,96,.5)';
imagenes[5] = 'rgba(235,75,198,.5)';
imagenes[6] = 'rgba(0,128,0,.5)';
let texto = new Array(ilen);
texto[0]='Lh';
texto[1]='Somos una Empresa con sede en la Ciudad de Montevideo, dedicada a Instalaciones, Mantenimiento y Servicio Técnico,  especializada en el área de Sistemas de seguridad, Sistemas Electromecánicos, Portería y Domótica.';
texto[2]=' Nuestro principal objetivo es brindar un Servicio de Calidad que cumpla con las espectativas de nuestros Clientes. Para ello en LH contamos con un Equipo Técnico capacitado y Tecnología de última generación, aplicada a este fin, en constante actualización.';
texto[3]='Buscamos la exelencia en nuestro trabajo y por ello no dejamos nada librado al azar. Utilizamos todos nuestros recursos para evaluar el proyecto e idear previamente un plan de acción, para finalizar los trabajos en plazos razonables y realistas. Procurando que cubran las necesidades de quienes contratan nuestros servicios, sin dejar de lado la operatividad, seguridad e integridad que su proyecto necesita';
texto[4]='5';
texto[5]='6';
texto[6]='7';
let imgsrc = new Array(ilen);


let toRight = false;
let canSwipe=true;
const cdo = new Array(2);
cdo[0]=$('.cuadradoA');
cdo[1]=$('.cuadradoB');
cdo[2]=$('.cuadradoC');


//FUNCIONES
function cdoArrayLogic (){
    if(toRight){

     
      
      i-=1;
      iDos-=1;
      iTres-=1;
       if(i<0){i=ilen}

      if(iDos<0){iDos=ilen}

      if(iTres<0){iTres=ilen}
      cdo[0].css('left','-100%');
      cdo[1].css('left','0');
  }
  if(!toRight)
  {
  
    
    i+=1;
    iDos+=1;
    iTres+=1;
    
      cdo[2].css('left','100%');
      cdo[1].css('left','0');
        if(i>ilen){i=0;}

    if(iDos>ilen){iDos=0;}

    if(iTres>ilen){iTres=0;}
  }   
}
function swipeColor(){

cdoArrayLogic();
cdoSource();
     
}
function cdoSource(){
/*cdo[0].css({background:imagenes[i]});
cdo[1].css({background:imagenes[iDos]});
cdo[2].css({background:imagenes[iTres]});
*/$('.cuadradoA p').text(texto[i]);
$('.cuadradoB p').text(texto[iDos]);
$('.cuadradoC p').text(texto[iTres]);

}


//PROGRAMA
function main()
{    
 //EVENTOS USUARIO
 cdoSource();
 cdo[1].on('swipeleft',function(){
      if(canSwipe) {
    canSwipe=false;
      cdo[2].animate({ left:'0'},animDur);
      cdo[1].animate({left:'-100%'},animDur)
         ;setTimeout(function(){
        canSwipe=true;     
        toRight=false;
        swipeColor();},salidaDur);
      
      }
   });
 cdo[1].on('swiperight',function(){
  if(canSwipe) {
    canSwipe=false;
          cdo[0].animate({ left:'0'},animDur);
          cdo[1].animate({left:'100%'},animDur);
          setTimeout(function(){
         canSwipe=true;
        toRight=true;
        swipeColor();
          },salidaDur);
  }
      });

}   
   
