// const nmbinput = document.querySelector('.container__input');
let numberlist = [];
let numberlimit = 20;
let numbergeneration = randomnumber();
let trynumber = 1;


function textchange(tag, texto) {
    const tagget = document.querySelector(tag);
    tagget.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2});
}

textchange('h1', 'Olá, Bem vindo!');
textchange('p', 'Escolha um numero de 0 a 10!');

function randomnumber() {
    let choosenumber = parseInt(Math.random() * numberlimit + 1)

    let listelementsquantity = numberlist.length;

    if (listelementsquantity == numberlimit) {
        numberlist = [];
    }

    if (numberlist.includes(choosenumber)) {
        return randomnumber();
    } else {
        numberlist.push(choosenumber);
        console.log(numberlist)
        return choosenumber;
    }
}

function clearinput() {
    secretnumber = document.querySelector('input');
    secretnumber.value = '';
}

function reiniciarJogo() {
    numbergeneration = randomnumber();
    clearinput();
    trynumber = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);
    textchange('h1', 'Olá, Bem vindo!');
    textchange('p', 'Escolha um numero de 0 a 10!');
};

function verificarChute() {
    let secretnumber = document.querySelector('input').value

    if (secretnumber == numbergeneration) {
        let tryword = trynumber > 1 ? ' tentativas' : ' tentativa';
        const trymensage = 'voce descobriou o numero secreto com ' + trynumber + tryword;
        textchange('h1', trymensage);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (secretnumber > numbergeneration) {
            textchange('h1', 'O numero é menor!')
        } else{
            textchange('h1', 'O numero é maior!')
            
        }
        trynumber++;
        clearinput();
    }
};

