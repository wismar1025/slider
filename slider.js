$(document).ready(function(){
var contenedor=$('#con2');
var izquierda=$('#izqui');
var cen1=$('#ce1');
var ce2=$('#ce2');
var derecha=$('#dere');
contenedor.css('marginLeft', '-'+100+'%');
function moverde(){
    contenedor.animate({marginLeft:'-'+300+'%'}, 700, function(){});
    contenedor.css('marginLeft', '-'+100+'%');
}
function moveriz(){
    contenedor.animate({marginLeft:0}, 700, function(){});
    contenedor.css('marginLeft', '-'+100+'%');
}
function moverce1(){
    contenedor.animate({marginLeft:'-'+100+'%'}, 700, function(){});
    contenedor.css('marginLeft', '-'+100+'%'); 
}
function moverce2(){
    contenedor.animate({marginLeft:'-'+200+'%'}, 700, function(){});
    contenedor.css('marginLeft', '-'+100+'%');

}
derecha.on('click', function(){moverde()})
izquierda.on('click ',function(){moveriz()})
cen1.on('click', function(){moverce1()})
ce2.on('click',function(){moverce2()})

})