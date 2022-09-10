function presionar(){
    if(!medio.paused && !medio.ended){
        medio.pause();

        document.querySelector(".fa-play").style.display = "block";
        document.querySelector(".fa-pause").style.display = "none";
        window.clearInterval(bucle);


    }else{
        medio.play();

        document.querySelector(".fa-play").style.display = "none";
        document.querySelector(".fa-pause").style.display = "block";
        bucle =setInterval(estado, 1000);
    }
    
}

function estado() {
    if(!medio.ended){
        var total = parseInt(medio.currentTime * maximo / medio.duration);
        progreso.style.width = total + "px";
    }else{
        progreso.style.width = "px";
        reproducir.innerHTML = "Reproducir";
        bucle = setInterval(bucle);
    }
}

function iniciar(){
    maximo = 600;
    medio = document.getElementById('medio');
    reproducir = document.getElementById('reproducir');
    barra = document.getElementById('barra');
    progreso = document.getElementById('progreso');
    document.querySelector(".fa-play").style.display = "block";
    document.querySelector(".fa-pause").style.display = "none";
    retroceder =document.getElementById('retroceder');
    avanzar =document.getElementById('adelantar'); 
    reproducir.addEventListener('click', presionar, false);
    barra.addEventListener('click', mover, false);
    retroceder.addEventListener('click', rewind, false);
    avanzar.addEventListener('click', adela, false);
    expandrPantalla = document.getElementById('fullscreen');
    expandrPantalla.addEventListener('click', expandir, false);
    Vid.ontimeupdate=actualizar;
}
function expandir(e){
    e.preventDefault();
    medio.requestFullscreen();
}


function rewind(e){
    medio.currentTime = medio.currentTime - ((medio.duration/100)*5);
}
function adela(e){
    medio.currentTime = medio.currentTime + ((medio.duration/100)*5);
}

function mover(e){
    if(!medio.paused && !medio.ended){
        var ratonX = e.pageX - barra.offsetLeft;
        var nuevoTiempo = ratonX * medio.duration / maximo;
        medio.currentTime = nuevoTiempo;
        progreso.style.width = ratonX + 'px'; 
    } 
}function actualizar(){
    document.querySelector(".estado").vid.currentTime;
    Vid.duration;
}

window.addEventListener('load', iniciar, false);