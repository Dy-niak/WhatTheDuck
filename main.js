const losuj = document.querySelector('button');
let kaczkaContainter = document.querySelector('#glownaKaczka')

const fotkiKaczek = ["img/kaczka1.png", "img/kaczka2.jpg", "img/kaczka3.jpg", "img/kaczka4.jpg", "img/kaczka5.jpg", "img/kaczka6.jpg"]


const zmianaKaczki=()=>{
        let kaczkaIndex = [Math.floor(Math.random() * fotkiKaczek.length)];
        console.log(kaczkaIndex);
        console.log(fotkiKaczek[kaczkaIndex]);
        kaczkaContainter.innerHTML = "<img src='" + fotkiKaczek[kaczkaIndex] + "'></img>"
}

losuj.addEventListener('click', zmianaKaczki)