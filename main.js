const losuj = document.querySelector('button');
const kaczkaContainter = document.querySelector('#glownaKaczka')

const fotkiKaczek = ["img/kaczka1.png", "img/kaczka2.jpg", "img/kaczka3.jpg", "img/kaczka4.jpg", "img/kaczka5.jpg", "img/kaczka6.jpg"]

const losowanieKaczki = () => {
    kaczkaContainter.innerHTML = "<img src='" + fotkiKaczek[Math.floor(Math.random() * fotkiKaczek.length)] + "'></img>";
    console.log(fotkiKaczek[Math.floor(Math.random() * fotkiKaczek.length)]);
    console.log(kaczkaContainter.innerHTML);

}

losuj.addEventListener('click', losowanieKaczki)