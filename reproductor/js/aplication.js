function iniciar(){
maximo = 600;
medio = document.getElementById(medio);
reproducir = document.getElementById("reproducir");
barra = document.getElementById("barra");
progreso = document.getElementById("progreso");

reproducir.AddEventListener("click", presionar, false);
barra.AddEventListener("click", mover, false);
}

function presionar(){
    if(!medio.paused && !medio.ended){
        medio.paused();
        reproducir.innerHTML = 'Reproducir';
        window.clearInterval(bucle);


    }else{
        medio.play();
        reproducir.innerHTML= 'Pausar';
        bucle =setInterval(estado, 100);
    }
    
}