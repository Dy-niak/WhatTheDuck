const losuj = document.querySelector('button');
const kaczkaContainter = document.querySelector('#glownaKaczka')
const bazaKaczek = ["img/kaczka1.png", "img/kaczka2.jpg", "img/kaczka3.jpg", "img/kaczka4.jpg", "img/kaczka5.jpg", "img/kaczka6.jpg"];
let fotkiKaczek = bazaKaczek.concat();
let kaczkaCounter=0;

const aktywnaKaczka=()=>{
        let kaczkaIndex = [Math.floor(Math.random() * fotkiKaczek.length)];
        kaczkaContainter.innerHTML = "<img src='" + fotkiKaczek[kaczkaIndex] + "'></img>";
        fotkiKaczek.splice(kaczkaIndex,1);
        kaczkaCounter++;
}

let zmianaKaczki=()=>{
        if(kaczkaCounter==bazaKaczek.length){
                fotkiKaczek=fotkiKaczek.concat(bazaKaczek);
                kaczkaCounter=0;
                aktywnaKaczka();
        }else{
                aktywnaKaczka();
        }
}

losuj.addEventListener('click', zmianaKaczki)