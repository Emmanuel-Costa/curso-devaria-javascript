function numeroAleatorio() {
    console.log(Math.random())
}

numeroAleatorio();
numeroAleatorio();
 
const olamundo = () => {
    console.log("ola mundo");
}

olamundo();

function soma(numero1, numero2) {
    return numero1+numero2;
}

const primeiraSoma = soma(1, 3);
const segundaSoma = soma(5, 7);

console.log({
    primeiraSoma,
    segundaSoma
});