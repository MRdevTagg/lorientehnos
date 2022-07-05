
$(document).ready(main);/*PARA QUE EJECUTE LA FUNCION LUEGO DE CARGAR LA PAGINA*/

//VARIABLES
const animDur = 300;
const tiempoActualizar = 310;
let l = true;
let toRight = false;
let canSwipe= true;

const serv = [
serv1={
  titulo:'Electromecánica',
  fondo:'',
  logo: 'Recursos\\IMG\\SVG\\ico4.svg',
  linkhref:'#',
  linktxt:'+',
  texto:'Electromecánica'
},
serv2={
  titulo:'Seguridad',
  fondo:'Recursos/IMG/camras-para-casa-678x381.jpg',
  logo: 'Recursos\\IMG\\SVG\\ico1.svg',
  linkhref:'#',
  linktxt:'+',
  texto:"• Video vigilancia<br>• Sistemas de Alarma<br>• Control de Acceso<br>• Cableado Estrcuturado"
  
},
serv3={
  titulo:'Portería',
  fondo:"Recursos/IMG/porteria.jpg",
  logo: 'Recursos\\IMG\\SVG\\ico2.svg',
  linkhref:'#',
  linktxt:'+',
  texto:'Portería para<br>Casas y/o Edificios<br>Centrales telefónicas<br>Video-Portero'
},
serv4={
  titulo:'Domótica',
  fondo:'',
  logo: 'Recursos\\IMG\\porteria.jpg',
  linkhref:'#',
  linktxt:'+',
  texto:'Instalacion<br>Programacion<br>Automatización Doméstica<br>Todo desde la App'
}
  ]
const refs =[
 ref3=
{
  titulo:'',
 logo: 'Recursos\\IMG\\Logos\\EliasRegulesLogo.jpg',
 linkhref: 'https://www.spotter.com.uy/',
 linktxt: 'Visitar Sitio',
 texto: 'Elias Regules'
},
 ref1=
{
    titulo:'',
 logo: 'Recursos\\IMG\\Logos\\logo-Spotter.svg',
 linkhref: 'https://www.spotter.com.uy/',
 linktxt: 'Visitar Sitio',
 texto: 'Una unidad de negocios de GRUPO ASSETS con el objetivo de brindar el mejor servicio de portería virtual y monitoreo de seguridad en tiempo real.'
},
 ref2=
{
    titulo:'',
 logo: 'Recursos\\IMG\\Logos\\fable.svg',
 linkhref: 'https://www.fabletybertoni.com/landing/',
 linktxt: 'Visitar Sitio',
 texto: 'Fablet & Bertoni es una reconocida empresa del Uruguay dedicada a la electrónica y la seguridad. Hemos tenido el placer de trabajar junto a ellos en numerosas ocasiones.'
},
ref4=
{
    titulo:'',
 logo: 'Recursos\\IMG\\Logos\\logo-Spotter.svg',
 linkhref: 'https://www.spotter.com.uy/',
 linktxt: 'Visitar Sitio',
 texto: 'ref4'
}]
const cdo = ['.cuadradoA','.cuadradoB','.cuadradoC',0,1,2]
const servobj = ['.cuadradoD','.cuadradoE','.cuadradoF',0,1,2]
//ANIMACIONES
let animRL = function animacionRL(selectores,objs){

if(l){

    $(selectores[2]).removeClass('desapareceryescala')
  $(selectores[2]).addClass('apareceryescala'); 
 $(selectores[1]).removeClass('apareceryescala')
    $(selectores[1]).addClass('desapareceryescala');
    $(selectores[2]).animate({ left:'0'},animDur);
    $(selectores[1]).animate({left:'-100%'},animDur);
}
if(!l){
         $(selectores[0]).animate({left:'0'},animDur);
  $(selectores[0]).removeClass('desapareceryescala');
 $(selectores[0]).addClass('apareceryescala'); 
$(selectores[1]).removeClass('apareceryescala')
$(selectores[1]).addClass('desapareceryescala');
    $(selectores[1]).animate({left:'100%'},animDur);
}
}
let animRL2 = function animacionRL2(selectores,objs){
    
if(l){
$(selectores[2]).css('opacity','1')
    $(selectores[2]).animate({ left:'0'},animDur);
    $(selectores[1]).animate({left:'-100%'},animDur);
}
if(!l){
  $(selectores[0]).css('opacity','1')
         $(selectores[0]).animate({left:'0'},animDur);

    $(selectores[1]).animate({left:'100%'},animDur);
}
}

//FUNCIONES
function ActualizarLogica (selectores,objs){
if(toRight){

      selectores[3]-=1;
      if(selectores[3]<0){selectores[3]=objs.length - 1}
      selectores[4]-=1;
      if(selectores[4]<0){selectores[4]=objs.length - 1}
      selectores[5]-=1;
      if(selectores[5]<0){selectores[5]=objs.length - 1}
      $(selectores[0]).css('left','-100%');
      $(selectores[1]).removeClass('desapareceryescala')
        $(selectores[1]).removeClass('apareceryescala');
      $(selectores[1]).css('opacity','1')
      $(selectores[1]).css('left','0');
       
  }
if(!toRight)
  {
    selectores[3]+=1;
    if(selectores[3]>objs.length - 1){selectores[3]=0;}
    selectores[4]+=1;
    if(selectores[4]>objs.length - 1){selectores[4]=0;}
    selectores[5]+=1;
    if(selectores[5]>objs.length - 1){selectores[5]=0;}
    $(selectores[2]).css('left','100%');
   $(selectores[1]).removeClass('apareceryescala');
    $(selectores[1]).removeClass('desapareceryescala');
    $(selectores[1]).css('opacity','1')
    $(selectores[1]).css('left','0');
  }   
}
function ActualizarVista(selectores,objs){
    
    $(selectores[0]+' '+'p').html(objs[selectores[3]].texto);
    $(selectores[1]+' '+'p').html (objs[selectores[4]].texto);
    $(selectores[2]+' '+'p').html(objs[selectores[5]].texto);
        $(selectores[0]+' '+'h1').text(objs[selectores[3]].titulo);
    $(selectores[1]+' '+'h1').text(objs[selectores[4]].titulo);
    $(selectores[2]+' '+'h1').text(objs[selectores[5]].titulo);
    $(selectores[0]+' '+'img').attr('src',objs[selectores[3]].logo);
    $(selectores[1]+' '+'img').attr('src',objs[selectores[4]].logo);
    $(selectores[2]+' '+'img').attr('src',objs[selectores[5]].logo);
    $(selectores[0]+' '+'.img-container').css({'background-image':"url("+objs[selectores[3]].fondo+")"});

    $(selectores[1]+' '+'.img-container').css({"background-image":"url("+objs[selectores[4]].fondo+")"});

    $(selectores[2]+' '+'.img-container').css('background-image','url('+objs[selectores[5]].fondo+')');
    
       $(selectores[0]+' '+'a').attr('href',objs[selectores[3]].linkhref);

    $(selectores[1]+' '+'a').attr('href',objs[selectores[4]].linkhref);

    $(selectores[2]+' '+'a').attr('href',objs[selectores[5]].linkhref);
        $(selectores[0]+' '+'a').text(objs[selectores[3]].linktxt);

    $(selectores[1]+' '+'a').text(objs[selectores[4]].linktxt);

    $(selectores[2]+' '+'a').text(objs[selectores[5]].linktxt);
    
}
function Actualizar(selectores,objs){
ActualizarLogica(selectores,objs);
ActualizarVista(selectores,objs);
}
function Izquierda(selectores,objs,anim){
    canSwipe=false;
   l=true;
  anim(selectores,objs);
    
    setTimeout(()=>
    {
     canSwipe=true;     
     toRight=false;
     Actualizar(selectores,objs);
    },tiempoActualizar);
}
function Derecha(selectores,objs,anim){
    canSwipe=false; 
    l = false;
anim(selectores,objs);
   
   
    setTimeout(()=>
    {canSwipe=true;
    toRight=true;
    Actualizar(selectores,objs);},tiempoActualizar);
}


//PROGRAMA
function main()
{    
                    //EVENTOS USUARIO
 Actualizar(servobj,serv);
 Actualizar(cdo,refs);
 $(cdo[1]).on('swipeleft', ()=>
        {  if(canSwipe) 
            {Izquierda(cdo,refs,animRL);}
        });
 $(cdo[1]).on('swiperight', ()=>{
            if(canSwipe) 
            {Derecha(cdo,refs,animRL);}
        });
        
 $(servobj[1]).on('swipeleft', ()=>
        {  if(canSwipe) 
            {Izquierda(servobj,serv,animRL2);}
        });
        
 $(servobj[1]).on('swiperight', ()=>{
            if(canSwipe) 
            {Derecha(servobj,serv,animRL2);}
        });

}   
   
