const draw = document.querySelector('button');
const duckContainter = document.querySelector('#glownaKaczka')
const duckHome = ["img/kaczka1.png", "img/kaczka2.jpg", "img/kaczka3.jpg", "img/kaczka4.jpg", "img/kaczka5.jpg", "img/kaczka6.jpg"];
let duckPond = duckHome.concat();
let duckCounter=0;

const activeDuck=()=>{
        let duckIndex = [Math.floor(Math.random() * duckPond.length)];
        duckContainter.innerHTML = "<img src='" + duckPond[duckIndex] + "'></img>";
        duckPond.splice(duckIndex,1);
        duckCounter++;
}

let newDuck=()=>{
        if(duckCounter==duckPond.length){
                duckPond=duckPond.concat(duckHome);
                duckCounter=0;
                activeDuck();
        }else{
                activeDuck();
        }
}

draw.addEventListener('click', newDuck)