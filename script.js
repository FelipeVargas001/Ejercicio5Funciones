let COLORES = ['ROJO', 'AMARILLO', 'VERDE'];
let colorDelSemaforo=document.getElementById(`imagenSemaforo`);

function cambiarLuz(){
const COLOR=COLORES.pop();
colorDelSemaforo.src="imgSemaforo/"+COLOR+".jpg";
if(COLOR===`ROJO`){
    document.getElementById('indicacionSemaforo').innerText = "¡ALTO!, NI TE MUEVAS";
    document.getElementById('indicacionSemaforo').style.color = "red";
} else if(COLOR===`AMARILLO`){
    document.getElementById('indicacionSemaforo').innerText = "¡FRENA, FRENA!"; 
    document.getElementById('indicacionSemaforo').style.color = "yellow";
} else if(COLOR===`VERDE`){
    document.getElementById('indicacionSemaforo').innerText = "YA PUEDES SEGUIR";
    document.getElementById('indicacionSemaforo').style.color = "green"; 
}
if(COLORES.length===0){
    COLORES = ['ROJO', 'AMARILLO', 'VERDE'];
}
}
setInterval(cambiarLuz, 3000);
