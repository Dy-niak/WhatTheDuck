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
        if(duckCounter==duckHome.length){
                duckPond=duckPond.concat(duckHome);
                duckCounter=0;
                activeDuck();
        }else{
                activeDuck();
        }
}

draw.addEventListener('click', newDuck)


//Odliczanie do nowej kaczki

        // The data/time we want to countdown to
        var tomorrow = new Date(2030, 08, 23, 15, 26, 10);

        // Run myfunc every second
        var myfunc = setInterval(function() {

        var now = new Date().getTime();;
        var timeleft = tomorrow - now;
        
        // Calculating the days, hours, minutes and seconds left
        var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
        
        // Result is output to the specific element
        document.getElementById("hours").innerHTML = hours + "h " 
        document.getElementById("mins").innerHTML = minutes + "m " 
        document.getElementById("secs").innerHTML = seconds + "s " 
        
        // Display the message when countdown is over
        if (timeleft < 0) {
        clearInterval(myfunc);
        document.getElementById("hours").innerHTML = "" 
        document.getElementById("mins").innerHTML = ""
        document.getElementById("secs").innerHTML = ""
        document.getElementById("end").innerHTML = "TIME UP!!";
        }
        }, 1000);