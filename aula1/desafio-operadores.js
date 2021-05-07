const readline = require ('readline');

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const primeiraPergunta = 'Digite o primeiro número:\n';
const segundaPergunta = 'Digite o segundo número:\n';
const terceiraPergunta = 'Digite o operador:\n';

const realizarCalculo = (num1, num2, operador) => {
    const primeiroNumero = parseInt(num1);
    const segundoNumero = parseInt(num2);
    switch (operador) {
        case '+':
            return primeiroNumero + segundoNumero;
        case '-':
            return primeiroNumero - segundoNumero;
        case '*':
            return primeiroNumero * segundoNumero;
        case '/':
            return primeiroNumero / segundoNumero;
        default:
            return 0;
    }
}
leitor.question(primeiraPergunta, (primeiroNumero) => {
    leitor.question(segundaPergunta, (segundoNumero) => {
        leitor.question(terceiraPergunta, (operador) => {
            const resultado = realizarCalculo(primeiroNumero, segundoNumero, operador);

            console.log({resultado});

            leitor.close();
        })
    })
});