const background = document.querySelector(".background");

function criaCactus(){

    const cactus = document.createElement("div");
    let posicaoCactus = 1000;
    let tempoAleatorio = Math.random() * 6000;

    cactus.classList.add("cactus");
    cactus.style.left = posicaoCactus + "px";
    background.appendChild(cactus);

    let leftIntervalo = setInterval( () => {

        posicaoCactus -= 10;

        if (posicaoCactus < -60){

            clearInterval(leftIntervalo);
            background.removeChild(cactus);
        } else if (posicaoCactus > 0 && posicaoCactus <60 && posicao < 60){

            clearInterval(leftIntervalo);
            document.body.innerHTML = '<h1 class= "game-over"> Fim de Jogo </h1> <button class = reiniciar> Reiniciar </button>'

        }else{

            cactus.style.left = posicaoCactus + "px";
        }
    },20);

    setTimeout(criaCactus, tempoAleatorio);

}
