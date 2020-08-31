// Losowanie kaczki

const draw = document.querySelector('button');
const duckContainter = document.querySelector('.glownaKaczka')
const duckHome = ["img/kaczka1.png", "img/kaczka2.jpg", "img/kaczka3.jpg", "img/kaczka4.jpg", "img/kaczka5.jpg", "img/kaczka6.jpg"];
let duckPond = duckHome.concat();
let duckCounter = 0;

const activeDuck=()=>{
        let duckIndex = [Math.floor(Math.random() * duckPond.length)];
        duckContainter.innerHTML = "<img src='" + duckPond[duckIndex] + "'></img>";
        duckPond.splice(duckIndex,1);
        duckCounter++;
}

let newDuck=()=>{
        if(duckCounter==duckHome.length){
                duckPond=duckPond.concat(duckHome);
                duckCounter=0;
                activeDuck();
        }else{
                activeDuck();
        }
}

draw.addEventListener('click', newDuck)


// Kaczka dnia

const kaczkaDnia = document.querySelector('.kaczkaDnia');
const tomorrow = new Date(2030, 08, 30, 20, 30, 00);


const activeDuck2=()=>{
        let duckIndex = [Math.floor(Math.random() * duckPond.length)];
        kaczkaDnia.innerHTML = "<img src='" + duckPond[duckIndex] + "'></img>";
        duckPond.splice(duckIndex,1);
        duckCounter++;
        console.log("dupa");
}
let newDuck2=()=>{
                if(duckCounter==duckHome.length){
                        duckPond=duckPond.concat(duckHome);
                        duckCounter=0;
                        activeDuck2();
                }else{
                        activeDuck2();
                }
        }

const podmianaKaczki = () => {
             newDuck2();
}

const odliczanie = () => {
        const now = new Date().getTime();
        const timeleft = tomorrow - now;
        const hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

        document.getElementById("hours").innerHTML = hours + "h " 
        document.getElementById("mins").innerHTML = minutes + "m " 
        document.getElementById("secs").innerHTML = seconds + "s "

       
        if ((hours === 0) && (minutes === 0 &&seconds === 0)){
                podmianaKaczki();
        }
}       

setInterval(odliczanie, 1000);