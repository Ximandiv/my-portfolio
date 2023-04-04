var presion = 0;
var calculo = 0;

function wa(){
    var opacidad = document.getElementById("opacidad");
    opacidad.classList.add("opacidad");
    presion++
    calculo = presion%2
    if(calculo == 0){
        opacidad.classList.remove("opacidad");
    }
}

