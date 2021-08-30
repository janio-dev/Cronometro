const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const reiniciar = document.querySelector('.reiniciar')
const segundosCampo = document.querySelector('.segundos');
const minutosCampo = document.querySelector('.minutos');
const horasCampo = document.querySelector('.horas');

let segundos = 0;
let minutos = 0;
let horas = 0;

function Cronometro(){
    if(segundos <= 60){
        segundosCampo.innerText = ++segundos;
    }
    if(segundos <= 9){
        segundosCampo.innerText = '0' + segundos;
    }
    if(segundos === 60){
        minutosCampo.innerText = ++minutos;
        segundos = 0;
    }
    if(minutos <= 9){
        minutosCampo.innerText = '0' + minutos;
    }
    if(minutos === 60){
        horasCampo.innerText = ++horas;
        minutos = 0;
    }
    if(horas <= 9){
        horasCampo.innerText = '0' + horas;
    }
    if(horas === 24){
        horas = 0;
        minutos = 0;
        segundos = 0;
    }
}

let tempoInter;
iniciar.addEventListener('click', ()=>{
   tempoInter =  setInterval(Cronometro, 1000);
   iniciar.setAttribute('disabled','');
})

pausar.addEventListener('click', ()=>{
    clearInterval(tempoInter);
    iniciar.removeAttribute('disabled');
});

reiniciar.addEventListener('click', ()=>{
    segundos = 0;
    minutos = 0;
    horas = 0;
    segundosCampo.innerText = '00';
    minutosCampo.innerText = '00';
    horasCampo.innerText = '00';
    clearInterval(tempoInter);
    iniciar.removeAttribute('disabled');
});

