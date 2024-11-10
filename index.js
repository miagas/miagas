let pedo1 = document.getElementById('audio1')
const boton1 = document.getElementById('pedo1');
let pedo2 = document.getElementById('audio2')
const boton2 = document.getElementById('pedo2');
boton1.addEventListener('click', () => {
    pedo1.play();
});
boton2.addEventListener('click', () => {
    pedo2.play();
});
