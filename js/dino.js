const dino = document.querySelector(".dino");
let sePulo = false;
let posicao = 0;

criaCactus();

function sePulou(event){

    if (event.keyCode === 32){

        if(!sePulo){

            pulo();

        }

    }

}

document.addEventListener("keyup", handleKeyUp); 

function handleKeyUp(event){

    if (event.keyCode === 32){

        console.log("Espaco");
        pulo();

    }

}

function pulo(){

    let intpulo = setInterval(() =>{

        if(posicao >= 150){

            clearInterval(intpulo);
            
            let intDesce = setInterval(() => {

                if(posicao <= 0){

                    clearInterval(intDesce);
                    sePulo = false

                }else{

                    posicao -= 20;
                    dino.style.bottom = posicao + "px";
                }
            
            },20);

        } else{
        posicao += 20;

        dino.style.bottom = posicao + "px";
        }
    }, 0);

}

