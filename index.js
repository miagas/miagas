const pedo1 = new Audio ('/assets/pedo1.mp4');
const boton1 = document.getElementById('pedo1');
boton1.addEventListener('click', () => {
    pedo1.load();
    pedo1.play();
});

